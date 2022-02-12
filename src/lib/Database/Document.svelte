<script>
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
	import { cacheKey } from '../keys';
	import { createEventDispatcher } from 'svelte';
	import { documents } from '../stores';
	import { SDK as Appwrite } from '../appwrite';

	const dispatch = createEventDispatcher();
	/**
	 * @name Document ID
	 * @type {string}
	 */
	export let documentId;

	/**
	 * @name Collection ID
	 * @type {string}
	 */
	export let collectionId;

	/**
	 * @name Document Object
	 * @type {any}
	 */
	export let document;

	/**
	 * @description Enables document caching. Call `actions.reload()` to get fresh document(s)
	 * @type {boolean}
	 */
	export let cache = getContext(cacheKey) ?? false;

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
		update: async (/** @type {object} */ data) => {
			const response = await Appwrite.sdk.database.updateDocument(
				document.$collection,
				document.$id,
				data,
				document.$permissions.read,
				document.$permissions.write
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
