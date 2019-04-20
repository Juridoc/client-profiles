/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as ApiGrants from '@juridoc/client-grants';
import * as ApiContacts from '@juridoc/client-contacts';
import * as Internals from './internals';
import * as Types from './types';
/**
 * Profile entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Profile Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Grant Entity.
     */
    grant: ApiGrants.Entity;
    /**
     * Contact Entity.
     */
    contact: ApiContacts.Entity;
    /**
     * Seat type.
     */
    seat: Types.Seat;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Last update date.
     */
    updatedAt?: Date;
    /**
     * Research fields.
     */
    research?: RestDB.Map<string>;
    /**
     * Profile settings.
     */
    settings: Internals.Settings;
    /**
     * Get the profile name.
     */
    get name(): string;
    /**
     * Get the profile language.
     */
    get language(): string;
    /**
     * Get the profile full name.
     */
    get fullName(): string;
}
