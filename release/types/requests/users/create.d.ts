import * as ApiUsers from '@juridoc/client-users';
/**
 * Profile user, creation request.
 */
export declare class Create extends ApiUsers.Requests.Create {
    /**
     * User type.
     */
    type: ApiUsers.Types.Common.App;
}
