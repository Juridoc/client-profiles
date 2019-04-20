/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiUsers from '@juridoc/client-users';

/**
 * Profile user, creation request.
 */
@RestDB.Schema.Entity('profiles/users')
@Class.Describe()
export class Create extends ApiUsers.Requests.Create {
  /**
   * User type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(() => [ApiUsers.Types.Common.App])
  @Class.Public()
  public type!: ApiUsers.Types.Common.App;
}
