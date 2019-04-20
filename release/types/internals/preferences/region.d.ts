/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import { Entity } from './entity';
/**
 * Settings region, entity class.
 */
export declare class Region extends Class.Null {
    /**
     * Default currency code.
     */
    currencyCode?: string;
    /**
     * Default currency symbol.
     */
    currencySymbol?: string;
    /**
     * Default date format.
     */
    dateFormatOption?: string;
    /**
     * Default time format.
     */
    timeFormatOption?: string;
    /**
     * Default number position.
     */
    numberPositionOption?: string;
    /**
     * Default number format.
     */
    numberFormatOption?: string;
    /**
     * Default number decimals.
     */
    numberDecimalsOption?: string;
    /**
     * Entity preferences.
     */
    entityOptions?: RestDB.Map<Entity>;
}
