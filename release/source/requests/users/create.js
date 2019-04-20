"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiUsers = require("@juridoc/client-users");
/**
 * Profile user, creation request.
 */
let Create = class Create extends ApiUsers.Requests.Create {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(() => [ApiUsers.Types.Common.App]),
    Class.Public()
], Create.prototype, "type", void 0);
Create = __decorate([
    RestDB.Schema.Entity('profiles/users'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map