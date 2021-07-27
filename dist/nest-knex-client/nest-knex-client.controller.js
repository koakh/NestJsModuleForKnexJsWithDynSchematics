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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestKnexClientController = void 0;
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
const common_1 = require("@nestjs/common");
const nest_knex_service_1 = require("../nest-knex.service");
let NestKnexClientController = class NestKnexClientController {
    constructor(nestKnexService) {
        this.nestKnexService = nestKnexService;
    }
    index() {
        return this.nestKnexService.test();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NestKnexClientController.prototype, "index", null);
NestKnexClientController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [nest_knex_service_1.NestKnexService])
], NestKnexClientController);
exports.NestKnexClientController = NestKnexClientController;
