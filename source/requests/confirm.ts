/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Users from '@juridoc/client-users';

/**
 * Confirmation request.
 */
@RestDB.Schema.Entity('profiles/confirm')
@Class.Describe()
export class Confirm extends Class.Null {
  /**
   * Confirmation type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(() => Object.values(Users.Types.Confirmation))
  @Class.Public()
  public type!: Users.Types.Confirmation;

  /**
   * Confirmation code.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Pattern(/[a-f0-9]{56}/, 'Confirmation')
  @Class.Public()
  public code!: string;
}
