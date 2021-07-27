import { NestKnexService } from '../nest-knex.service';
export declare class NestKnexClientController {
    private readonly nestKnexService;
    constructor(nestKnexService: NestKnexService);
    index(): Promise<any>;
}
