<script>
	/**
	 * @slot {{
	 * actions: {
	 *  create: (fileId: string, file: File, read?: string[], write?: string[]) => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { SDK as Appwrite } from '../appwrite';

	import { createEventDispatcher } from 'svelte';
	import { currentUser } from '../stores';

	/**@type {File}*/ export let file;
	/**@type {string}*/ export let fileId;

	const dispatch = createEventDispatcher();

	const actions = {
		create: async (
			/** @type {string} */ fileId,
			/** @type {File} */ file,
			read = [`user:${$currentUser.$id}`],
			write = [`user:${$currentUser.$id}`]
		) => {
			try {
				dispatch('upload');
				const response = await Appwrite.sdk.storage.createFile(fileId, file, read, write);
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
| `create(fileId, file, read, write)` | Uploads a file. <br />`fileId` is required `@type - {string}`, `"unique()"` will generate random unique id, but you can use custom.<br />`file` is `@type - {File}` and required.<br />`read`/`write` is `@type - {string[]}` and *optional* |

- **let:files**

#### Example

```svelte
<script>
    import { Storage } from "metawrite"

    // Required
    /**@type {File}*/ let file;
    /**@type {string}*/ let fileId = "unique()"; // this will generate random unique id, but you can use custom

    // Optional
    /**@type {string[]}*/ let read;
    /**@type {string[]}*/ let write;
</script>

<Storage {file} let:actions>
    <button on:click={actions.create(fileId, file, read, write)}>Upload File</button>
</Storage>
```
 -->
