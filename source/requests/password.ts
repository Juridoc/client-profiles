/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

/**
 * Password updating request.
 */
@RestDB.Schema.Entity('profiles/password')
@Class.Describe()
export class Password extends Class.Null {
  /**
   * User email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;

  /**
   * New user password.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public password!: string;
}
