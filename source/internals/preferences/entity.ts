/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Profile settings, entity class.
 */
@RestDB.Schema.Entity('accounts/settings/preferences/entity')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Enabled status.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Boolean()
  @Class.Public()
  public enabled!: boolean;

  /**
   * Translated title.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public title?: string;
}
