<script lang="ts">
	/**
	 * @slot {{
	 * actions: {
	 *  create: (bucketId: string, fileId: string, file: File, read?: string[], write?: string[]) => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { SDK as Appwrite } from '../_appwrite';

	import { createEventDispatcher } from 'svelte';
	import { currentUser } from '../_stores';

	const dispatch = createEventDispatcher();

	const actions = {
		create: async (
			bucketId: string,
			fileId: string,
			file: File,
			read = [`user:${$currentUser.$id}`],
			write = [`user:${$currentUser.$id}`]
		) => {
			try {
				dispatch('upload');
				const response = await Appwrite.sdk.storage.createFile(bucketId, fileId, file, read, write);
				dispatch('success', response);
				return response;
			} catch (error) {
				dispatch('failure', error);
			}
		}
	};
</script>

<slot {actions} />

<!-- 
  @component

### `<Storage />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `create(bucketId, fileId, file, read, write)` | Uploads a file. <br />`fileId` is required `@type - {string}`, `"unique()"` will generate random unique id, but you can use custom.<br />`file` is `@type - {File}` and required.<br />`read`/`write` is `@type - {string[]}` and *optional* |

#### Example

```svelte
<script lang="ts">
    import { Storage } from "metawrite"

    // Required
	let bucketId = "default"
    let file: File;
    let fileId = "unique()"; // this will generate random unique id, but you can use custom

    // Optional
    let read: string[];
    let write: string[];
</script>

<Storage {file} let:actions>
    <button on:click={actions.create(bucketId, fileId, file, read, write)}>Upload File</button>
</Storage>
```
 -->
