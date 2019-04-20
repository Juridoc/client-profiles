"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiGrants = require("@juridoc/client-grants");
const ApiContacts = require("@juridoc/client-contacts");
const Internals = require("./internals");
const Types = require("./types");
/**
 * Profile entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Get the profile name.
     */
    get name() {
        var _a, _b;
        return ((_b = (_a = this.contact.personal) === null || _a === void 0 ? void 0 : _a.firstName) !== null && _b !== void 0 ? _b : this.contact.name).toString();
    }
    /**
     * Get the profile language.
     */
    get language() {
        var _a, _b, _c, _d, _e, _f;
        return (_f = (_d = (_b = (_a = this.contact) === null || _a === void 0 ? void 0 : _a.language) !== null && _b !== void 0 ? _b : (_c = this.settings) === null || _c === void 0 ? void 0 : _c.regionLanguage) !== null && _d !== void 0 ? _d : (_e = this.settings) === null || _e === void 0 ? void 0 : _e.platformLanguage) !== null && _f !== void 0 ? _f : 'en-US';
    }
    /**
     * Get the profile full name.
     */
    get fullName() {
        var _a, _b;
        return ((_b = (_a = this.contact.personal) === null || _a === void 0 ? void 0 : _a.fullName) !== null && _b !== void 0 ? _b : this.contact.name).toString();
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiGrants.Entity, ['id', 'rolesIdList', 'name']),
    Class.Public()
], Entity.prototype, "grant", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(() => ApiContacts.Entity, ['id', 'pictureId', 'name', 'language', 'personal', 'professional']),
    Class.Public()
], Entity.prototype, "contact", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration(Object.values(Types.Seat)),
    Class.Public()
], Entity.prototype, "seat", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Map(String),
    Class.Public()
], Entity.prototype, "research", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(Internals.Settings),
    Class.Public()
], Entity.prototype, "settings", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "name", null);
__decorate([
    Class.Public()
], Entity.prototype, "language", null);
__decorate([
    Class.Public()
], Entity.prototype, "fullName", null);
Entity = __decorate([
    RestDB.Schema.Entity('profiles'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map