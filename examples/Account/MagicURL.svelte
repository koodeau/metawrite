<script>
    import { MagicURL } from "metawrite";

    const userId = "32h2hj24h2"
    let email = ""
    const url = "http://localhost:3000/page-to-complete"

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
</script>

<MagicURL let:actions on:successCreate on:successComplete on:failureCreate on:failureComplete>
		<input type="email" name="email" placeholder="Email" bind:value={email} />
		<button on:click={actions.create(userId, email, url)}>Send login link</button>
		<button on:click={actions.complete()}>Confirm Login</button>
</MagicURL>
