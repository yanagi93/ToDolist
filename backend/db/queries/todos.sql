-- name: CreateTodo :one
INSERT INTO todos (
    user_id,
    title
) VALUES (
    $1,
    $2
)
RETURNING id, user_id, title, completed, created_at, updated_at;

-- name: GetTodo :one
SELECT id, user_id, title, completed, created_at, updated_at
FROM todos
WHERE id = $1;

-- name: ListTodosByUser :many
SELECT id, user_id, title, completed, created_at, updated_at
FROM todos
WHERE user_id = $1
ORDER BY id;

-- name: ListIncompleteTodosByUser :many
SELECT id, user_id, title, completed, created_at, updated_at
FROM todos
WHERE user_id = $1
  AND completed = FALSE
ORDER BY id;

-- name: UpdateTodoTitle :one
UPDATE todos
SET
    title = $2,
    updated_at = NOW()
WHERE id = $1
RETURNING id, user_id, title, completed, created_at, updated_at;

-- name: SetTodoCompleted :one
UPDATE todos
SET
    completed = $2,
    updated_at = NOW()
WHERE id = $1
RETURNING id, user_id, title, completed, created_at, updated_at;

-- name: DeleteTodo :exec
DELETE FROM todos
WHERE id = $1;

-- name: DeleteTodosByUser :exec
DELETE FROM todos
WHERE user_id = $1;
