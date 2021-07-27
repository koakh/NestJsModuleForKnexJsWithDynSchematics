import { NestKnexOptions } from './interfaces';
interface INestKnexService {
    getKnex(): any;
}
export declare class NestKnexService implements INestKnexService {
    private _nestKnexOptions;
    private readonly logger;
    private _knexConnection;
    constructor(_nestKnexOptions: NestKnexOptions);
    getKnex(): any;
}
export {};
