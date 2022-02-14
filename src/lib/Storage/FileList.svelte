<script>
	/**
	 * @slot {{
	 * files: any[];
	 * actions: {
	 *   reload: () => Promise<object>;
	 * }}}
	 * @slot {{ error: object }} error
	 */
	import { Appwrite as SDK } from 'appwrite';

	export const Appwrite = {
		sdk: new SDK(),
		setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
			Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
		}
	};

	export let search = '';
	export let limit = 25;
	export let offset = 0;
	export let orderType = 'ASC';
	const actions = {
		reload: () => (files = fetchFiles())
	};
	const fetchFiles = () => Appwrite.sdk.storage.listFiles(search, limit, offset, orderType);

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

- search - *optional* `@type - {string}`
- limit - *optional* `@type - {number}`
- offset - *optional* `@type - {number}`
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
    let search = '';
    let limit = 10;
    let offset = 0;
    let orderType = 'ASC';
</script>

<FileList {search} {limit} {offset} {orderType}let:actions let:files>
    {#each files as file}
        <p>File: {file.name}</p>
    {/each}
    <button on:click={actions.reload()}>Reload</button>
</FileList>
```
 -->
