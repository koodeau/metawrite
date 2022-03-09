<script lang="ts">
	import { Appwrite, User, MagicURL, FileList, Collection } from '$lib';

	const config = {
		endpoint: 'http://localhost/v1',
		project: 'metawrite'
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
	let title = '';
	let description = '';
</script>

<Appwrite {...config}>
	<h1>Welcome to Metawrite SvelteKit Demo</h1>
	<p>
		Visit <a href="https://github.com/koodeau/metawrite#readme">Github repository</a> to read the documentation
	</p>

	<Collection collectionId="demo" let:actions let:documents>
		<h1>Create Note</h1>
		<input type="text" name="title" bind:value={title} placeholder="Title" />
		<textarea type="text" name="description" bind:value={description} placeholder="Desctiption" />
		<button on:click={() => actions.create("unique()", { title, description }, ["role:all"], ["role:all"])}>Create</button>
		{#if documents}
			<h1>Notes</h1>
			{#each documents as note}
				<h2>{note.title}</h2>
				<p>{note.description}</p>
			{/each}
		{/if}
	</Collection>
	<User let:user>
		<h1>User ID: {user.$id}</h1>

		<h1>Using Metawrite with {`<MagicURL />`}</h1>
		<MagicURL let:actions on:successCreate on:successComplete on:failureCreate on:failureComplete>
			<input type="email" name="email" placeholder="Email" bind:value={email} />
			<button on:click={() => actions.create("someuserid", email, "http://localhost:3000/")}>Send login link</button>
			<button on:click={() => actions.complete()}>Confirm Login</button>
		</MagicURL>
	</User>

	<FileList bucketId="default" let:files>
		{#each files as file}
			<p>{file.$id}</p>
		{/each}
	</FileList>
</Appwrite>
