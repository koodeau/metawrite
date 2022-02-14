/** @typedef {typeof __propDef.props}  CreateAnonymousSessionProps */
/** @typedef {typeof __propDef.events}  CreateAnonymousSessionEvents */
/** @typedef {typeof __propDef.slots}  CreateAnonymousSessionSlots */
/**
 * ### `<CreateAnonymousSession />`
 *
 * #### Directives
 *
 * **let:actions**
 *
 * | Name                        | Description                                                  |
 * | --------------------------- | ------------------------------------------------------------ |
 * | `create()` | Creates anonymous session. |
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { CreateAnonymousSession } from "metawrite";
 * </script>
 *
 * <CreateAnonymousSession let:actions>
 * <button on:click={actions.create}>Create Anonymous Session</button>
 * </CreateAnonymousSession>
 * ```
 *
 * ### `<CreateJWT />`
 *
 * #### Directives
 *
 * **let:actions**
 *
 * | Name                        | Description                                                  |
 * | --------------------------- | ------------------------------------------------------------ |
 * | `create()` | Creates JWT token. |
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { CreateJWT } from "metawrite";
 * </script>
 *
 * <CreateJWT let:actions>
 * <button on:click={actions.create}>Create JWT token</button>
 * </CreateJWT>
 * ```
 *
 * ### `<MagicURL />`
 *
 * #### Directives
 *
 * **let:actions**
 *
 * | Name                        | Description                                                  |
 * | --------------------------- | ------------------------------------------------------------ |
 * | `create()` | Creates Magic URL Session. |
 *
 * #### Example
 *
 * ```svelte
 * <script>
 * import { MagicURL } from "metawrite";
 *
 * const userId = "32h2hj24h2"
 * const email = "user@example.com"
 * const url = "http://example.com" // optional
 * </script>
 *
 * <MagicURL let:actions>
 * <button on:click={actions.create(userId, email, url)}>Create MagicURL</button>
 * </MagicURL>
 * ```
 */
export default class CreateAnonymousSession extends SvelteComponentTyped<{}, {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {
        actions: {
            create: () => Promise<import("appwrite").Models.Session>;
        };
    };
}> {
}
export type CreateAnonymousSessionProps = typeof __propDef.props;
export type CreateAnonymousSessionEvents = typeof __propDef.events;
export type CreateAnonymousSessionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        success: CustomEvent<any>;
        failure: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            actions: {
                create: () => Promise<import("appwrite").Models.Session>;
            };
        };
    };
};
export {};
