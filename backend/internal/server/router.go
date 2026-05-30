package server

import (
	"net/http"

	"todolist/backend/internal/handlers"
)

func NewRouter() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/", handlers.Hello)

	return mux
}
