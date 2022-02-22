<script lang="ts">
	import { SDK as Appwrite } from './_appwrite';

	export let channels: string | string[];

	const subscription = Appwrite.sdk.subscribe(channels, callback);
	const actions = {
		subscribe: () => (payload = subscription()),
        unsubscribe: () => {
            const unsubscribe = Appwrite.sdk.subscribe(channels, callback);
			return unsubscribe();
        }
	};
	let payload = subscription();



function callback(payload: unknown) {
	// Callback will be executed on changes for documents A and all files.
	return payload;
}
</script>

<slot {payload} {actions} />

<!-- 
	@component
	
### `<Realtime />`

For more information about using Realtime in Appwrite see [Realtime documentation](https://appwrite.io/docs/realtime).

#### Arguments

- channels - *required* `string | string[]`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `subscribe()` | Subscribing to all updates related to one or more channels. |
| `unsubscribe()` | If you no longer want to receive updates from a subscription, you can unsubscribe so that your callbacks are no longer called. |

#### Example 

```svelte
<script>
	import { Realtime } from 'metawrite';
</script>

<Realtime channels="account" let:actions>
	<button on:click={actions.subscribe()}>Subscribe to Account channel</button>
	<button on:click={actions.unsubscribe()}>Unsubscribe from Account channel</button>
</Realtime>
```
	
 -->

