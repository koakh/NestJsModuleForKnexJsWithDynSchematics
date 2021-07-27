/**
 *  NestKnexClientModule is a testing module that verifies that
 *  NestKnexModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestKnexModule`.
 *
 *  Once you begin customizing NestKnexModule, you'll probably want
 *  to delete this module.
 */
import { Module } from '@nestjs/common';
import { NestKnexClientController } from './nest-knex-client.controller';
import { NestKnexModule } from '../nest-knex.module';

@Module({
  controllers: [NestKnexClientController],
  imports: [
    // NestKnexModule.register({
    //   client: 'pg',
    //   connection: {
    //     host: 'localhost',
    //     user: 'postgres',
    //     password: 'example',
    //     database: 'example',
    //     port: 5432,
    //   },
    // }),
    // Dynamic Registration (with a Config Factory)
    NestKnexModule.registerAsync({
      useFactory: () => {
        return {
          debug: false,
          client: 'pg',
          connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'example',
            database: 'example',
            port: 5432,
          },
        };
      },
    }),
  ],
})
export class NestKnexClientModule { }
