<script>
	import { Preferences } from '$lib';

	let prefs = {
		// You can pass only the specific settings you wish to update.
	};
</script>

<Preferences let:actions>
	<button
		on:click={() => {
			actions.update(prefs);
			actions.reload();
		}}>Update Preferences</button>
</Preferences>
