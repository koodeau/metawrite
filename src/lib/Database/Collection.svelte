<script lang="ts">
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
	import { cacheKey } from '../_keys';
	import { SDK as Appwrite } from '../_appwrite';
	import { currentUser, documents } from '../_stores';

	/**
	 * @name Collection ID
	 * @type {string}
	 */
	export let collectionId: string;

	/**
	 * @name Queries 
	 * Array of query strings.
	 */
	export let queries = [""];

	/**
	 * @name Limit
	 * Maximum number of documents to return in response. By default will return maximum 25 results. Maximum of 100 results allowed per request.
	 */
	export let limit = 25;

	/**
	 * @name offset
	 * Default: 0
	 */
	export let offset = 0;

	/**
	 * @name Cursor
	 * ID of the document used as the starting point for the query, excluding the document itself. 
	 */
	export let cursor = '';

	/**
	 * @name cursorDirection
	 */
	export let cursorDirection = '';

	/**
	 * @name orderAttributes
	 * Array of attributes used to sort results.
	 */
	export let orderAttributes = [""];

	/**
	 * @name orderTypes
	 * Array of order directions for sorting attribtues. Possible values are DESC for descending order, or ASC for ascending order.
	 */
	export let orderTypes = ['ASC'];

	/**
	 * @description Enables document caching. Call `actions.reload()` to get fresh document(s)
	 */
	export let cache = false;
	setContext(cacheKey, cache);

	const fetchDocuments = async () => {
		return await documents.fetchDocuments(
			collectionId,
			cache,
			queries,
			limit,
			offset,
			cursor,
			cursorDirection,
			orderAttributes,
			orderTypes
		);
	};

	const actions = {
		reload: () => {
			documents.clear();
			getDocuments = fetchDocuments();
		},
		create: async (
			documentId = 'unique()',
			data = {},
			read = [`user:${$currentUser.$id}`],
			 write = [`user:${$currentUser.$id}`]
		) => {
			const response = await Appwrite.sdk.database.createDocument(
				collectionId,
				documentId,
				data,
				read,
				write
			);
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

- cache - *optional*, by default set to false `@type - {boolean}`

  **query: `@type - {object}`**

- queries - *optional* `@type - {string[]}`

- limit - *optional* `@type - {number}`

- offset - *optional* `@type - {number}`

- cursor - *optional* `@type - {string}`

- cursorDirection - *optional* `@type - {string}`

- orderAttributes - *optional* `@type - {string[]}`

- orderTypes - *optional* `@type - {string[]}`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `create(documentId, data, read, write)` | Creates a Document. `data` - `@type - {string}`.<br /> `read`/`write` is optional `@type - {string[]}`.<br />`documentId` is optional, by default generates unique `@type - {string}`. |

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
