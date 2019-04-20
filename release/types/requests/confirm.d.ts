/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Users from '@juridoc/client-users';
/**
 * Confirmation request.
 */
export declare class Confirm extends Class.Null {
    /**
     * Confirmation type.
     */
    type: Users.Types.Confirmation;
    /**
     * Confirmation code.
     */
    code: string;
}
