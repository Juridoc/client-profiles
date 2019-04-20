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
@RestDB.Schema.Entity('profiles')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Profile Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Grant Entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiGrants.Entity, ['id', 'rolesIdList', 'name'])
  @Class.Public()
  public grant!: ApiGrants.Entity;

  /**
   * Contact Entity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => ApiContacts.Entity, ['id', 'pictureId', 'name', 'language', 'personal', 'professional'])
  @Class.Public()
  public contact!: ApiContacts.Entity;

  /**
   * Seat type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Seat))
  @Class.Public()
  public seat!: Types.Seat;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Last update date.
   */
  @RestDB.Schema.Date()
  @Class.Public()
  public updatedAt?: Date;

  /**
   * Research fields.
   */
  @RestDB.Schema.Map(String)
  @Class.Public()
  public research?: RestDB.Map<string>;

  /**
   * Profile settings.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(Internals.Settings)
  @Class.Public()
  public settings!: Internals.Settings;

  /**
   * Get the profile name.
   */
  @Class.Public()
  public get name(): string {
    return (this.contact.personal?.firstName ?? this.contact.name).toString();
  }

  /**
   * Get the profile language.
   */
  @Class.Public()
  public get language(): string {
    return this.contact?.language ?? this.settings?.regionLanguage ?? this.settings?.platformLanguage ?? 'en-US';
  }

  /**
   * Get the profile full name.
   */
  @Class.Public()
  public get fullName(): string {
    return (this.contact.personal?.fullName ?? this.contact.name).toString();
  }
}
