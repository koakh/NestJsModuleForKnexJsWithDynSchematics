# NOTES

## Tutorial Notes

```shell
# Install NestJs Cli
$ sudo npm i -g @nestjs/cli
# Installing a Custom Schematics Collection 
$ sudo npm install @nestjsplus/dyn-schematics -g
```

> One important note: you must install a schematics collection as a global package, due to the way the CLI works

```shell
# Run the schematic with the CLI
$ nest g -c @nestjsplus/dyn-schematics dynpkg nest-knex
Generate a testing client? Yes
$ cd nest-knex
$ npm install
node_modules/jest-diff/build/printDiffs.d.ts:8:57 - error TS1005: ';' expected.

8 import type { DiffOptions, DiffOptionsNormalized } from './types';
```

read comment on post: apparently this error seems to be a conflict between @types/jest and typescript versions, and can be solved by updating both with jest v26.0.4 and typescript above v3.8 (v3.9.6 currently).

fix updating to lates versions

```json
"devDependencies": {
  "@types/jest": "^26.0.24",
  "typescript": "^4.3.5"
}    
```

```shell
$ npm install
$ npm audit fix --force
$ npm audit fix --force
$ npm run start:dev
```

If you now browse to <http://localhost:3000> you should get:

Hello from NestKnexModule!

Great! At this point, we've scaffolded the framework of our dynamic module, and we're ready to begin the Knex.js integration.

## Integrating with Knex.js 

```shell
$ cd nest-knex
$ npm install knex pg
```

fix 

```typescript
import { Config } from 'knex';
```

with 

```typescript
import { Knex } from 'knex'

export interface NestKnexOptions extends Knex.Config {}
```

- [knex/UPGRADING.md at master · knex/knex](https://github.com/knex/knex/blob/master/UPGRADING.md)

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

## Publish the Package

```shell
$ npm publish
```
