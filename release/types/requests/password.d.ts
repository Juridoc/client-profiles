/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Password updating request.
 */
export declare class Password extends Class.Null {
    /**
     * User email.
     */
    email: string;
    /**
     * New user password.
     */
    password: string;
}
