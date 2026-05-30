package server

import (
	"net/http"

	"todolist/backend/internal/config"
)

func New(cfg config.Config) *http.Server {
	return &http.Server{
		Addr:    cfg.Addr,
		Handler: NewRouter(),
	}
}
