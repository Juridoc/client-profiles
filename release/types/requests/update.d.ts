/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Internals from '../internals';
import * as Contacts from './contacts';
/**
 * Profile update request.
 */
export declare class Update extends Class.Null {
    /**
     * Contact request.
     */
    contact?: Contacts.Update;
    /**
     * Research fields.
     */
    research?: RestDB.Map<string>;
    /**
     * Profile settings.
     */
    settings?: Omit<Internals.Settings, 'getRegionPreferences' | 'getCurrentRegionPreferences'>;
}
