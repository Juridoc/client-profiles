/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as ApiContacts from '@juridoc/client-contacts';

/**
 * Contact creation request.
 */
@RestDB.Schema.Entity('profiles/contacts')
@Class.Describe()
export class Create extends ApiContacts.Requests.Create {}
