/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Preferences from './preferences';

/**
 * Profile settings, entity class.
 */
@RestDB.Schema.Entity('profiles/settings')
@Class.Describe()
export class Settings extends Class.Null {
  /**
   * Default platform language.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public platformLanguage?: string;

  /**
   * Default region language.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public regionLanguage?: string;

  /**
   * Default preferences by region.
   */
  @RestDB.Schema.Map(Preferences.Region)
  @Class.Public()
  public regionPreferences?: RestDB.Map<Preferences.Region>;

  /**
   * Get the region preferences according to the specified region code.
   * @param region Region code.
   * @returns Returns the region preferences that corresponds to the given region code.
   */
  @Class.Public()
  public getRegionPreferences(region: string | undefined): Preferences.Region {
    if (region !== void 0 && this.regionPreferences !== void 0 && this.regionPreferences[region] !== void 0) {
      return this.regionPreferences[region];
    }
    return {};
  }

  /**
   * Get the current region preferences.
   * @returns Returns the current region preferences.
   */
  @Class.Public()
  public getCurrentRegionPreferences(): Preferences.Region {
    return this.getRegionPreferences(this.regionLanguage);
  }
}
