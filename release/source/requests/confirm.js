"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirm = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Users = require("@juridoc/client-users");
/**
 * Confirmation request.
 */
let Confirm = class Confirm extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(() => Object.values(Users.Types.Confirmation)),
    Class.Public()
], Confirm.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Pattern(/[a-f0-9]{56}/, 'Confirmation'),
    Class.Public()
], Confirm.prototype, "code", void 0);
Confirm = __decorate([
    RestDB.Schema.Entity('profiles/confirm'),
    Class.Describe()
], Confirm);
exports.Confirm = Confirm;
//# sourceMappingURL=confirm.js.map