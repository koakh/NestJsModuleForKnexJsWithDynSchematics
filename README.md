# README

## Links

- [Build a NestJS Module for Knex.js (or other resource-based libraries) in 5 Minutes](https://dev.to/nestjs/build-a-nestjs-module-for-knex-js-or-other-resource-based-libraries-in-5-minutes-12an)

- [GitHub - nestjsplus/dyn-schematics: NestJS Dynamic Module Schematics for @nestjs/cli](https://github.com/nestjsplus/dyn-schematics)

- [GitHub - nestjsplus/knex-cats: Sample app using @nestjsplus/knex](https://github.com/nestjsplus/knex-cats)

> full sample with massive and knex implementation show case

## Create docker compose postgres yml file and run it

```shell
$ mkdir /srv/docker/oficial/postgres -p
$ cd /srv/docker/oficial/postgres
$ nano docker-compose.yml
```

docker-compose.yml

```yml
version: '2'

services:
  db:
    image: postgres:13.1-alpine
    container_name: db
    restart: unless-stopped
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=example
      - POSTGRES_DB=example
    ports:
      - 5432:5432
    # volumes:
    #   - ./volumes/db:/var/lib/postgresql/data

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    restart: unless-stopped
    environment:
      - PGADMIN_DEFAULT_EMAIL=postgres@domain.com
      - PGADMIN_DEFAULT_PASSWORD=example
    ports:
      - 5480:80
```

```shell
$ docker-compose up -d
# connect to postrges
$ psql -d postgres -h localhost -p 5432 -U postgres
# create database
postgres=# CREATE DATABASE example;
CREATE DATABASE
# list databases
\l
# connect to database
 \c example
psql (13.3, server 13.1)
You are now connected to database "example" as user "postgres".
```

> create schema

```sql
CREATE TABLE cats
(
  id     serial    NOT NULL,
  name   text,
  age    integer,
  breed  text
);

ALTER TABLE cats
  ADD CONSTRAINT cats_pkey
  PRIMARY KEY (id);
```

## Build Package

```shell
$ npm install
# build package and run nest-knex-client
$ npm run start:dev
# optional publish npm with
$ npm publish
```

## Test Api

```shell
$ curl localhost:3000 | jq
[
  {
    "id": 1,
    "name": "Fred",
    "age": 5,
    "breed": "tom cat"
  },
  {
    "id": 2,
    "name": "Fred",
    "age": 5,
    "breed": "tom cat"
  }
]
```
