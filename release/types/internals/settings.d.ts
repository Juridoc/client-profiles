/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Preferences from './preferences';
/**
 * Profile settings, entity class.
 */
export declare class Settings extends Class.Null {
    /**
     * Default platform language.
     */
    platformLanguage?: string;
    /**
     * Default region language.
     */
    regionLanguage?: string;
    /**
     * Default preferences by region.
     */
    regionPreferences?: RestDB.Map<Preferences.Region>;
    /**
     * Get the region preferences according to the specified region code.
     * @param region Region code.
     * @returns Returns the region preferences that corresponds to the given region code.
     */
    getRegionPreferences(region: string | undefined): Preferences.Region;
    /**
     * Get the current region preferences.
     * @returns Returns the current region preferences.
     */
    getCurrentRegionPreferences(): Preferences.Region;
}
