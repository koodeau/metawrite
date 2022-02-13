<script>
	import { Locale } from '$lib';
</script>

<Locale let:actions let:code>
	<h1>Active Session</h1>
	<button on:click={actions.reload()}>Reload</button>
	<p>Location: {code.country}, {code.continentCode}</p>
	<p>IP: {code.ip}</p>
</Locale>
