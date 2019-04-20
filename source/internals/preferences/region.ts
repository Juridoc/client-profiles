/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Entity } from './entity';

/**
 * Settings region, entity class.
 */
@RestDB.Schema.Entity('accounts/settings/preferences/region')
@Class.Describe()
export class Region extends Class.Null {
  /**
   * Default currency code.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public currencyCode?: string;

  /**
   * Default currency symbol.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public currencySymbol?: string;

  /**
   * Default date format.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public dateFormatOption?: string;

  /**
   * Default time format.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public timeFormatOption?: string;

  /**
   * Default number position.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public numberPositionOption?: string;

  /**
   * Default number format.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public numberFormatOption?: string;

  /**
   * Default number decimals.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public numberDecimalsOption?: string;

  /**
   * Entity preferences.
   */
  @RestDB.Schema.Map(Entity)
  @Class.Public()
  public entityOptions?: RestDB.Map<Entity>;
}
