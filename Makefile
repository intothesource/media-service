.PHONY: build up down test e2e

all:
	$(error No default target)

build:
	docker-compose build --pull --parallel

up:
	docker-compose up --build --force-recreate

down:
	docker-compose down --build --force-recreate

test:
	docker-compose run --rm backend yarn test --watchAll

e2e:
	docker-compose run --rm backend yarn test:e2e --watchAll
