<script lang="ts">
	import { Appwrite, User, MagicURL } from '$lib';

	// const collectionId: string = 'faqs';
	const config = {
		endpoint: 'http://localhost/v1',
		project: 'demo'
	};

	const successCreate = (e) => {
		console.log(e)
	}
	const failureCreate = (e) => {
		console.log(e)
	}
	const successComplete = (e) => {
		console.log(e)
	}
	const failureComplete = (e) => {
		console.log(e)
	}

	let email: string;
</script>

<Appwrite {...config}>
	<h1>Welcome to Metawrite SvelteKit Demo</h1>
	<p>
		Visit <a href="https://github.com/koodeau/metawrite#readme">Github repository</a> to read the documentation
	</p>

	<h1>Using Metawrite with {`<MagicURL />`}</h1>

	<!-- <Collection {collectionId} let:documents>
		{#if documents}
			<h1>FAQs</h1>
			{#each documents as faq}
				<h2>{faq.question}</h2>
				<p>{faq.answer}</p>
			{/each}
		{/if}
	</Collection> -->

	<MagicURL let:actions on:successCreate on:successComplete on:failureCreate on:failureComplete>
		<input type="email" name="email" placeholder="Email" bind:value={email} />
		<button on:click={actions.create("someuserid", email, "http://localhost:3000/")}>Send login link</button>
		<button on:click={actions.complete()}>Confirm Login</button>
	</MagicURL>
	<User let:user>
		<h1>User ID: {user.$id}</h1>
	</User>
</Appwrite>
