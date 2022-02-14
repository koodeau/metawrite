/** @typedef {typeof __propDef.props}  UserProps */
/** @typedef {typeof __propDef.events}  UserEvents */
/** @typedef {typeof __propDef.slots}  UserSlots */
/**
 * ### `<User />`
 *
 * #### Slots
 *
 * - **loading**
 * - **error**
 *
 * #### Directives
 *
 * **let:actions**
 * | Name | Description |
 * | --- | --- |
 * | `reload()` | Reload. |
 * | `logout()` | Logout current session. |
 * | `logoutAll()` | Logout from all session. |
 * | `logoutFrom(session)` | Logout from specific session. `session` is `@type - {string}` |
 *
 * - **let:user** `object`
 * - **let:error**
 *
 * #### Events
 *
 * - **on:success** On user fetch success.
 * - **on:failure** On user fetch failure.
 * - **on:successLogout** On `logout` success.
 * - **on:failureLogout** On `logout` failure.
 * - **on:successLogoutFrom** On `logoutFrom` success.
 * - **on:failureLogoutFrom** On `logoutFrom` failure.
 * - **on:successLogoutAll** On `logoutAll` success.
 * - **on:failureLogoutAll** On `logoutAll` failure.
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { User } from "metawrite"
 * </script>
 *
 * <User let:actions let:user>
 * <button on:click={actions.reload()}>Reload user data</button>
 * <button on:click={actions.get()}>Get logged in user data</button>
 * <button on:click={actions.logout()}>Log out from current session</button>
 * <button on:click={actions.logoutFrom("sessionId")}>Log out from specific session</button>
 * <button on:click={actions.logoutAll()}>Log out from all sessions</button>
 *
 * <!-- If logged in --\>
 * <p>Hi, {user.name}</p>
 * </User>
 * ```
 */
export default class User extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
    successLogout: CustomEvent<any>;
    failureLogout: CustomEvent<any>;
    successLogoutFrom: CustomEvent<any>;
    failureLogoutFrom: CustomEvent<any>;
    successLogoutAll: CustomEvent<any>;
    failureLogoutAll: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        user: any;
        actions: {
            reload: () => Promise<any>;
            get: () => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
            logout: () => Promise<void>;
            logoutFrom: (session: string) => Promise<void>;
            logoutAll: () => Promise<void>;
        };
    };
    loading: {};
    error: {
        error: any;
    };
}> {
}
export type AppwriteUser = {
    $id: string;
    email: string;
    emailVerification: boolean;
    name: string;
    registration: number;
    status: number;
    prefs: object;
};
export type UserProps = typeof __propDef.props;
export type UserEvents = typeof __propDef.events;
export type UserSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        success: CustomEvent<any>;
        failure: CustomEvent<any>;
        successLogout: CustomEvent<any>;
        failureLogout: CustomEvent<any>;
        successLogoutFrom: CustomEvent<any>;
        failureLogoutFrom: CustomEvent<any>;
        successLogoutAll: CustomEvent<any>;
        failureLogoutAll: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            user: any;
            actions: {
                reload: () => Promise<any>;
                get: () => Promise<import("appwrite").Models.User<import("appwrite").Models.Preferences>>;
                logout: () => Promise<void>;
                logoutFrom: (session: string) => Promise<void>;
                logoutAll: () => Promise<void>;
            };
        };
        loading: {};
        error: {
            error: any;
        };
    };
};
export {};
