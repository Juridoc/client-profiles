"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const entity_1 = require("./entity");
/**
 * Settings region, entity class.
 */
let Region = class Region extends Class.Null {
};
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Region.prototype, "currencyCode", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Region.prototype, "currencySymbol", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Region.prototype, "dateFormatOption", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Region.prototype, "timeFormatOption", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Region.prototype, "numberPositionOption", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Region.prototype, "numberFormatOption", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Region.prototype, "numberDecimalsOption", void 0);
__decorate([
    RestDB.Schema.Map(entity_1.Entity),
    Class.Public()
], Region.prototype, "entityOptions", void 0);
Region = __decorate([
    RestDB.Schema.Entity('accounts/settings/preferences/region'),
    Class.Describe()
], Region);
exports.Region = Region;
//# sourceMappingURL=region.js.map