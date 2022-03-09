<script lang="ts">
	/**
	 * @slot {{
	 * files: any[];
	 * actions: {
	 *   reload: () => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { SDK as Appwrite } from '../_appwrite';

	export let bucketId: string;
	export let search = '';
	export let limit = 25; // 25
	export let offset = 0; // 0
	export let cursor = '';
	export let cursorDirection = '';
	export let orderType = "ASC"; // 'ASC' or 'DESC'
	const actions = {
		reload: () => (files = fetchFiles())
	};
	const fetchFiles = () => Appwrite.sdk.storage.listFiles(bucketId, search, limit, offset, cursor, cursorDirection, orderType);

	let files = fetchFiles();
</script>

{#await files}
	<slot name="loading" />
{:then response}
	<slot files={response?.files ?? []} {actions} />
{:catch error}
	<slot name="error" {error} />
{/await}

<!-- 
  @component

### `<FileList />`

#### Arguments

- bucketId - *required* `@type - {string}`
- search - *optional* `@type - {string}`
- limit - *optional* `@type - {number}`
- offset - *optional* `@type - {number}`
- cursor - *optional* `@type - {string}`
- cursorDirection - *optional* `@type - {string}`
- orderType - *optional* `@type - {string} ` => write  `"ASC"` or `"DESC"`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:files**
- **let:error**

#### Example 

```svelte
<script>
    import { FileList } from "metawrite"

    // Optional
    let bucketId = 'default';
    let search = '';
    let limit = 10;
    let offset = 0;
    let orderType = 'ASC';
</script>

<FileList {bucketId} {search} {limit} {offset} {orderType}let:actions let:files>
    {#each files as file}
        <p>File: {file.name}</p>
    {/each}
    <button on:click={actions.reload()}>Reload</button>
</FileList>
```
 -->
