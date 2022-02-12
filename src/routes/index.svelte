<script lang="ts">
	import { Appwrite, Collection } from '$lib';

	const collectionId: string = 'faqs';
	const config = {
		endpoint: 'http://localhost/v1',
		project: 'demo'
	};
</script>

<Appwrite {...config}>
	<h1>Welcome to Metawrite SvelteKit Demo</h1>
	<p>
		Visit <a href="https://github.com/koodeau/metawrite#readme">Github repository</a> to read the documentation
	</p>

	<h1>Using Metawrite with {`<Collection />`}</h1>

	<Collection {collectionId} let:documents>
		{#if documents}
			<h1>FAQs</h1>
			{#each documents as faq}
				<h2>{faq.question}</h2>
				<p>{faq.answer}</p>
			{/each}
		{/if}
	</Collection>
</Appwrite>
