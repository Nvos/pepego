// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package backend

type EditTodo struct {
	ID             string `json:"id"`
	Text           string `json:"text"`
	Done           bool   `json:"done"`
	LastEditedByID string `json:"lastEditedById"`
}

type NewTodo struct {
	Text   string `json:"text"`
	UserID string `json:"userId"`
}

type NewUser struct {
	Name string `json:"name"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
