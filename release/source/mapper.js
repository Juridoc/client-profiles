"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const ApiCore = require("@juridoc/client-core");
const Requests = require("./requests");
const entity_1 = require("./entity");
/**
 * Profiles mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the error entity from the last operation.
     */
    get error() {
        return this.client.error;
    }
    /**
     * Confirm the user token based on the specified request.
     * @param request Confirm request.
     * @returns Returns a promise to get the session token.
     * @throws Throws an error when the user token wasn't found.
     */
    async confirm(request) {
        return (await this.mapper.insertEx(Requests.Confirm, request));
    }
    /**
     * Load the profile that corresponds to the specified profile Id.
     * @param id Profile Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the profile entity.
     * @throws Throws an error when the profile wasn't found.
     */
    async load(id, fields) {
        return (await this.mapper.findById(id, fields));
    }
    /**
     * Load the current session profile.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the profile entity.
     * @throws Throws an error when the current session wasn't found.
     */
    async loadMe(fields) {
        return (await this.mapper.findById('me', fields));
    }
    /**
     * Update the profile that corresponds to the specified profile Id based on the given update request.
     * @param id Profile Id.
     * @param request Profile update request.
     * @returns Returns a promise to get true when the profile was updated, false otherwise.
     * @throws Throws an error when the profile wasn't found.
     */
    async modify(id, request) {
        return (await this.mapper.updateByIdEx(Requests.Update, id, request));
    }
    /**
     * Update the current profile based on the given update request.
     * @param request Profile update request.
     * @returns Returns a promise to get true when the profile was updated, false otherwise.
     * @throws Throws an error when the current session wasn't found.
     */
    async modifyMe(request) {
        return (await this.mapper.updateByIdEx(Requests.Update, 'me', request));
    }
    /**
     * Update the user email based on the specified request.
     * @param request Email request.
     * @returns Returns a promise to get the user Id.
     * @throws Throws an error when the current session wasn't found.
     */
    async modifyUserEmail(request) {
        return (await this.mapper.insertEx(Requests.Email, request));
    }
    /**
     * Recover the user password based on the specified request.
     * @param request Recovering request.
     * @returns Returns a promise to get the user Id.
     * @throws Throws an error when the current session wasn't found.
     */
    async recoverUserPassword(request) {
        return (await this.mapper.insertEx(Requests.Recover, request));
    }
    /**
     * Update the user password based on the specified request.
     * @param request Password request.
     * @returns Returns a promise to get the user Id.
     * @throws Throws an error when the current session wasn't found.
     */
    async modifyUserPassword(request) {
        return (await this.mapper.insertEx(Requests.Password, request));
    }
    /**
     * List all profiles in the same account that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the profile list or undefined when an error occurs.
     */
    async list(query, fields) {
        return await this.mapper.find(query, fields);
    }
    /**
     * Count all profiles in the same account that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of profiles or undefined when an error occurs.
     */
    async count(query) {
        return await this.mapper.count(query);
    }
    /**
     * Delete the profile that corresponds to the specified profile Id.
     * @param id Profile Id.
     * @returns Returns a promise to get true when the profile was deleted, false otherwise.
     * @throws Throws an error when the profile wasn't found.
     */
    async remove(id) {
        return (await this.mapper.deleteById(id));
    }
};
__decorate([
    Injection.Inject(ApiCore.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "error", null);
__decorate([
    Class.Public()
], Mapper.prototype, "confirm", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "loadMe", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modify", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modifyMe", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modifyUserEmail", null);
__decorate([
    Class.Public()
], Mapper.prototype, "recoverUserPassword", null);
__decorate([
    Class.Public()
], Mapper.prototype, "modifyUserPassword", null);
__decorate([
    Class.Public()
], Mapper.prototype, "list", null);
__decorate([
    Class.Public()
], Mapper.prototype, "count", null);
__decorate([
    Class.Public()
], Mapper.prototype, "remove", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'profiles' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map