package backend

import (
	"context"
)

type Resolver struct {
	Todos map[string]*Todo
	Users map[string]*User
}

func (r *Resolver) Mutation() MutationResolver {
	return &mutationResolver{r}
}

func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}

func (r *Resolver) Subscription() SubscriptionResolver {
	return &subscriptionResolver{r}
}

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }

func (r *mutationResolver) CreateTodo(ctx context.Context, input NewTodo) (Todo, error) {
	panic("not implemented")
}
func (r *mutationResolver) EditTodo(ctx context.Context, input *EditTodo) (Todo, error) {
	panic("not implemented")
}

func (r *queryResolver) Todos(ctx context.Context) ([]Todo, error) {
	panic("not implemented")
}

func (r *subscriptionResolver) TodoAdded(ctx context.Context) (<-chan Todo, error) {
	panic("not implemented")
}

func New() Config {
	return Config{
		Resolvers: &Resolver{},
	}
}
