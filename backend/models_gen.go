// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package backend

import (
	"time"
)

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

type Todo struct {
	ID           string    `json:"id"`
	Text         string    `json:"text"`
	Done         bool      `json:"done"`
	User         User      `json:"user"`
	CreatedAt    time.Time `json:"createdAt"`
	LastEditedBy *User     `json:"lastEditedBy"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
