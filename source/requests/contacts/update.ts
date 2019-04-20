/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiContacts from '@juridoc/client-contacts';

/**
 * Contact update request.
 */
@RestDB.Schema.Entity('profiles/contacts/{id}')
@Class.Describe()
export class Update extends ApiContacts.Requests.Update {}
