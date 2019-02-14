package backend

import (
	"context"
	"github.com/satori/go.uuid"
	"sync"
	"time"
)

type Todo struct {
	ID           string    `json:"id"`
	Text         string    `json:"text"`
	Done         bool      `json:"done"`
	CreatedAt    time.Time `json:"createdAt"`
	User         string      `json:"user"`
	LastEditedBy *string     `json:"lastEditedBy"`
}

type Resolver struct {
	Todos map[string]Todo
	Users map[string]User
	Observers map[string]chan Todo
	TodosChangesMutex    sync.Mutex // nolint: structcheck
}

type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }

type todoResolver struct{ *Resolver }

func (r *Resolver) Mutation() MutationResolver {
	return &mutationResolver{r}
}
func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}
func (r *Resolver) Subscription() SubscriptionResolver {
	return &subscriptionResolver{r}
}
func (r *Resolver) Todo() TodoResolver {
	return &todoResolver{r}
}

type mutationResolver struct{ *Resolver }

func (r *mutationResolver) EditTodo(ctx context.Context, input EditTodo) (*Todo, error) {
	todo, ok := r.Resolver.Todos[input.ID]

	if !ok {
		return nil, nil
	}

	todo.Done = input.Done
	todo.Text = input.Text
	todo.LastEditedBy = &input.LastEditedByID

	r.Resolver.Todos[input.ID] = todo

	r.TodosChangesMutex.Lock()
	for _, observer := range r.Observers {
		observer <- todo
	}
	r.TodosChangesMutex.Unlock()

	return &todo, nil
}


func (r *mutationResolver) CreateUser(ctx context.Context, input NewUser) (User, error) {
	user := User {
		Name: input.Name,
		ID: uuid.NewV4().String(),
	}

	r.Users[user.ID] = user

	return user, nil
}

func (r *mutationResolver) CreateTodo(ctx context.Context, input NewTodo) (Todo, error) {
	todo := Todo {
		Text: input.Text,
		CreatedAt: time.Now(),
		Done: false,
		User: input.UserID,
		ID: uuid.NewV4().String(),
	}

	r.Resolver.Todos[todo.ID] = todo

	r.TodosChangesMutex.Lock()
	for _, observer := range r.Observers {
		observer <- todo
	}
	r.TodosChangesMutex.Unlock()

	return todo, nil
}

func (r *todoResolver) User(ctx context.Context, obj *Todo) (User, error) {
	return r.Resolver.Users[obj.User], nil
}
func (r *todoResolver) LastEditedBy(ctx context.Context, obj *Todo) (*User, error) {
	if obj.LastEditedBy != nil {
		value, ok := r.Resolver.Users[*obj.LastEditedBy]

		if ok {
			return &value, nil
		}
	}

	return nil, nil
}

func (r *queryResolver) Todos(ctx context.Context) ([]Todo, error) {
	var values []Todo

	for _, value := range r.Resolver.Todos {
		values = append(values, value)
	}

	return values, nil
}

func New() Config {
	return Config{
		Resolvers: &Resolver{
			Todos: map[string]Todo{},
			Users: map[string]User{},
			Observers: map[string]chan Todo{},
		},
	}
}

func (r *subscriptionResolver) TodoChanges(ctx context.Context) (<-chan Todo, error) {
	id := uuid.NewV4().String()
	events := make(chan Todo, 1)

	go func() {
		<-ctx.Done()
		r.TodosChangesMutex.Lock()
		delete(r.Observers, id)
		r.TodosChangesMutex.Unlock()
	}()

	r.TodosChangesMutex.Lock()
	r.Observers[id] = events
	r.TodosChangesMutex.Unlock()

	return events, nil
}