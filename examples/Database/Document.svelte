<script>
	import { Collection, Document } from '$lib';

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
