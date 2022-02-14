<script>
	/**
	 * @slot {{
	 * documents: any[];
	 * actions: {
	 *  reload: () => Promise<object>;
	 *  create: (data: any, read?: string[], write?: string[]) => Promise<object>;
	 * }
	 * }}
	 * @slot {{ error: object }} error
	 */
	import { setContext } from 'svelte';
	import { cacheKey } from '../keys';
	import { currentUser, documents } from '../stores';
	import { Appwrite as SDK } from 'appwrite';

	export const Appwrite = {
		sdk: new SDK(),
		setConfig: (/** @type {{ endpoint: string; project: string; locale?: string; }} */ config) => {
			Appwrite.sdk.setEndpoint(config.endpoint).setProject(config.project).setLocale(config.locale);
		}
	};

	/**
	 * @name Collection ID
	 * @type {string}
	 */
	export let collectionId;

	/** @type {string[]} */
	export let filters = [];

	export let offset = 0;
	export let limit = 25;
	export let orderField = '';
	export let orderType = '';
	export let orderCast = [];
	export let search = [];

	/**
	 * @description Enables document caching. Call `actions.reload()` to get fresh document(s)
	 * @type {boolean}
	 */
	export let cache = false;
	setContext(cacheKey, cache);

	const fetchDocuments = async () => {
		return await documents.fetchDocuments(collectionId, cache, {
			filters,
			limit,
			offset,
			orderField,
			orderType,
			orderCast,
			search
		});
	};

	const actions = {
		reload: () => {
			documents.clear();
			getDocuments = fetchDocuments();
		},
		create: async (
			/**@type {string}*/ data = '',
			/**@type {string[]}*/ read = [`user:${$currentUser.$id}`],
			/**@type {string[]}*/ write = [`user:${$currentUser.$id}`]
		) => {
			const response = await Appwrite.sdk.database.createDocument(collectionId, data, read, write);
			actions.reload();
			return response;
		}
	};

	let getDocuments = fetchDocuments();
</script>

{#await getDocuments}
	<slot name="loading" />
{:then current}
	<slot documents={current?.documents ?? []} {actions} />
{:catch error}
	<slot name="error" {error} />
{/await}

<!-- 
	@component

### `<Collection />`

#### Arguments

- collectionId - *required* `@type - {string}`

- Cache - *optional*, by default set to false `@type - {boolean}`

  **query: `@type - {object}`**

- filters - *optional* `@type - {string[]}`

- offset - *optional* `@type - {number}`

- limit - *optional* `@type - {number}`

- orderField - *optional* `@type - {string}`

- orderType - *optional* `@type - {string}`

- orderCast - *optional* `@type - {string[]}`

- search - *optional* `@type - {string[]}`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `create(data, read, write)` | Creates a Document. `data` - `@type - {string}`.<br /> `read`/`write` is optional `@type - {string[]}` |

- **let:documents**
- **let:error**

#### Example 

```svelte
<script>
  import { Collection } from "metawrite";
</script>

<Collection collectionId="5f56a3035a01f" let:documents>
  You have {documents.length} documents.
</Collection>
```

 -->
