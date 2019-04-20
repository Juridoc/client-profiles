/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

/**
 * Email updating request.
 */
@RestDB.Schema.Entity('profiles/email')
@Class.Describe()
export class Email extends Class.Null {
  /**
   * User login.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public login!: string;

  /**
   * User password.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public password!: string;

  /**
   * New user email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;
}
