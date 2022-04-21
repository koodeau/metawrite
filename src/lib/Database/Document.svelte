<script lang="ts">
	/**
	 * @slot {{
	 * document: any;
	 * actions: {
	 *  reload: () => Promise<object>;
	 *  update: (data: any) => Promise<object>;
	 *  remove: () => Promise<object>;
	 * }
	 * }}
	 */
	import { getContext } from 'svelte';
	import { cacheKey } from '../_keys';
	import { createEventDispatcher } from 'svelte';
	import { documents } from '../_stores';
	import { SDK as Appwrite } from '../_appwrite';

	const dispatch = createEventDispatcher();
	/**
	 * @name Document ID
	 * @type {string}
	 */
	export let documentId: string;

	/**
	 * @name Collection ID
	 * @type {string}
	 */
	export let collectionId: string;

	/**
	 * @description Enables document caching. Call `actions.reload()` to get fresh document(s)
	 * @type {boolean}
	 */
	export let cache: boolean = getContext(cacheKey) ?? false;

	let document: any;

	const fetchDocument = async () => {
		const response = await documents.fetchDocument(collectionId, documentId, cache);
		document = response;
		return response;
	};

	if (documentId && collectionId && !document) {
		document = fetchDocument();
	} else {
		collectionId = document.$collection;
		documentId = document.$id;
	}

	const actions = {
		reload: () => {
			documents.clear();
			document = fetchDocument();
		},
		update: async (/** @type {object} */ data: object) => {
			const response = await Appwrite.sdk.database.updateDocument(
				document.$collection,
				document.$id,
				data,
				document.$read,
				document.$write
			);
			actions.reload();
			dispatch('change');
			return response;
		},
		remove: async () => {
			const response = await Appwrite.sdk.database.deleteDocument(
				document.$collection,
				document.$id
			);
			actions.reload();
			dispatch('change');
			return response;
		}
	};
</script>

{#if documentId && collectionId}
	{#await document}
		<slot name="loading" />
	{:then current}
		<slot document={current} {actions} />
	{:catch error}
		<slot name="error" {error} />
	{/await}
{:else}
	<slot {actions} />
{/if}

<!-- 
	@component
	
### `<Document />`

#### Arguments

- documentId - *required* `@type - {string}`
- collectionId - *required* `@type - {string}`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `update(data)` | Updates a Document. `data` - `@type - {object}` |
| `remove()` | Removes a Document. |

- **let:document**
- **let:error**

#### Example

```svelte
<script>
	import { Collection, Document } from 'metawrite';

	const collectionId = '5f56a3035a01f';
</script>

<Collection {collectionId} let:documents>
	You have {documents.length} documents:
	{#each documents as document}
		<Document {collectionId} documentId={document.$id} let:document let:actions>
			Title: {document.title}
			Text: {document.text}
			<button on:click={() => {actions.remove()}}>Delete</button>
		</Document>
	{/each}
</Collection>
```
	
 -->
