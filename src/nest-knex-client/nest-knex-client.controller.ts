/**
 *  NestKnexClientController is a testing controller that verifies that
 *  NestKnexModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestKnexModule`.
 *
 *  Once you begin customizing NestKnexModule, you'll probably want
 *  to delete this controller.
 */
import { Controller, Get } from '@nestjs/common';
import { NestKnexService } from '../nest-knex.service';

@Controller()
export class NestKnexClientController {
  constructor(private readonly nestKnexService: NestKnexService) {}

  @Get()
  index() {
    return this.nestKnexService.test();
  }
}
