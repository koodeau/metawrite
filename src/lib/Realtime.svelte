<script lang="ts">
	import { SDK as Appwrite } from './_appwrite';

	// export let event: string;

	const actions = {
		subscribe: (channels: string | string[]) =>
			Appwrite.sdk.subscribe(channels, (response) => {
				// Callback will be executed on changes for documents A and all files.
				return response;
			}),
        unsubscribe: (channels: string | string[]) => {
            const unsubscribe = Appwrite.sdk.subscribe(channels, (response) => {
				// Callback will be executed on changes for documents A and all files.
                console.log(response);
				return unsubscribe();
			})
        }
	};

</script>

<slot {actions} />

<!-- 
	@component
	
### `<Realtime />`

For more information about using Realtime in Appwrite see [Realtime documentation](https://appwrite.io/docs/realtime).

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `subscribe(channels)` | Subscribing to all updates related to one or more channels. `channels: string | string[]` |
| `unsubscribe(channels)` | If you no longer want to receive updates from a subscription, you can unsubscribe so that your callbacks are no longer called. `channels: string | string[]` |

#### Example 

```svelte
<script>
	import { Realtime } from 'metawrite';
</script>

<Realtime let:actions>
	<button on:click={actions.subscribe('account')}>Subscribe to Account channel</button>
	<button on:click={actions.unsubscribe('account')}>Unsubscribe from Account channel</button>
</Realtime>
```
	
 -->

