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
@RestDB.Schema.Entity('profiles/{id}')
@Class.Describe()
export class Update extends Class.Null {
  /**
   * Contact request.
   */
  @RestDB.Schema.Object(() => Contacts.Update)
  @Class.Public()
  public contact?: Contacts.Update;

  /**
   * Research fields.
   */
  @RestDB.Schema.Map(String)
  @Class.Public()
  public research?: RestDB.Map<string>;

  /**
   * Profile settings.
   */
  @RestDB.Schema.Object(Internals.Settings)
  @Class.Public()
  public settings?: Omit<Internals.Settings, 'getRegionPreferences' | 'getCurrentRegionPreferences'>;
}
