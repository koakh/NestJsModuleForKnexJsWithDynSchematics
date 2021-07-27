import { NestKnexOptions } from './interfaces';
/**
 * Sample interface for NestKnexService
 *
 * Customize this as needed to describe the NestKnexService
 *
 */
interface INestKnexService {
    test(): Promise<any>;
}
export declare class NestKnexService implements INestKnexService {
    private _NestKnexOptions;
    private readonly logger;
    constructor(_NestKnexOptions: NestKnexOptions);
    test(): Promise<any>;
}
export {};
