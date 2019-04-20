/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as ApiCore from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Profiles mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): ApiCore.Entities.Error | undefined;
    /**
     * Confirm the user token based on the specified request.
     * @param request Confirm request.
     * @returns Returns a promise to get the session token.
     * @throws Throws an error when the user token wasn't found.
     */
    confirm(request: Requests.Confirm): Promise<string>;
    /**
     * Load the profile that corresponds to the specified profile Id.
     * @param id Profile Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the profile entity.
     * @throws Throws an error when the profile wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Load the current session profile.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the profile entity.
     * @throws Throws an error when the current session wasn't found.
     */
    loadMe(fields?: string[]): Promise<Entity>;
    /**
     * Update the profile that corresponds to the specified profile Id based on the given update request.
     * @param id Profile Id.
     * @param request Profile update request.
     * @returns Returns a promise to get true when the profile was updated, false otherwise.
     * @throws Throws an error when the profile wasn't found.
     */
    modify(id: string, request: Requests.Update): Promise<boolean>;
    /**
     * Update the current profile based on the given update request.
     * @param request Profile update request.
     * @returns Returns a promise to get true when the profile was updated, false otherwise.
     * @throws Throws an error when the current session wasn't found.
     */
    modifyMe(request: Requests.Update): Promise<boolean>;
    /**
     * Update the user email based on the specified request.
     * @param request Email request.
     * @returns Returns a promise to get the user Id.
     * @throws Throws an error when the current session wasn't found.
     */
    modifyUserEmail(request: Requests.Email): Promise<string>;
    /**
     * Recover the user password based on the specified request.
     * @param request Recovering request.
     * @returns Returns a promise to get the user Id.
     * @throws Throws an error when the current session wasn't found.
     */
    recoverUserPassword(request: Requests.Recover): Promise<string>;
    /**
     * Update the user password based on the specified request.
     * @param request Password request.
     * @returns Returns a promise to get the user Id.
     * @throws Throws an error when the current session wasn't found.
     */
    modifyUserPassword(request: Requests.Password): Promise<string>;
    /**
     * List all profiles in the same account that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the profile list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all profiles in the same account that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of profiles or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the profile that corresponds to the specified profile Id.
     * @param id Profile Id.
     * @returns Returns a promise to get true when the profile was deleted, false otherwise.
     * @throws Throws an error when the profile wasn't found.
     */
    remove(id: string): Promise<boolean>;
}
