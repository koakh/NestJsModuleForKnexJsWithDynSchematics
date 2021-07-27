"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestKnexService = void 0;
// tslint:disable: variable-name
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
let NestKnexService = 
/**
 *  You can remove the dependencies on the Logger if you don't need it.  You can also
 *  remove the `async test()` method.
 *
 *  The only thing you need to leave intact is the `@Inject(NEST_KNEX_OPTIONS) private _nest-knexOptions`.
 *
 *  That injected dependency gives you access to the options passed in to
 *  NestKnexService.
 *
 */
class NestKnexService {
    constructor(_NestKnexOptions) {
        this._NestKnexOptions = _NestKnexOptions;
        this.logger = new common_1.Logger('NestKnexService');
        this.logger.log(`Options: ${JSON.stringify(this._NestKnexOptions)}`);
    }
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Hello from NestKnexModule!';
        });
    }
};
NestKnexService = __decorate([
    common_1.Injectable()
    /**
     *  You can remove the dependencies on the Logger if you don't need it.  You can also
     *  remove the `async test()` method.
     *
     *  The only thing you need to leave intact is the `@Inject(NEST_KNEX_OPTIONS) private _nest-knexOptions`.
     *
     *  That injected dependency gives you access to the options passed in to
     *  NestKnexService.
     *
     */
    ,
    __param(0, common_1.Inject(constants_1.NEST_KNEX_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], NestKnexService);
exports.NestKnexService = NestKnexService;
