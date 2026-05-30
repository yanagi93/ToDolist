package main

import (
	"log"

	"todolist/backend/internal/config"
	"todolist/backend/internal/server"
)

func main() {
	cfg := config.Load()
	srv := server.New(cfg)

	log.Printf("listening on %s", cfg.Addr)
	log.Fatal(srv.ListenAndServe())
}
