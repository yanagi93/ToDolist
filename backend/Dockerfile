FROM golang:1.24-alpine AS build

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .
RUN go build -o /bin/api ./cmd/api

FROM alpine:3.21

WORKDIR /app

COPY --from=build /bin/api /bin/api

EXPOSE 8080

CMD ["/bin/api"]
