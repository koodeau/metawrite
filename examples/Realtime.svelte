<script>
	import { Realtime } from 'metawrite';
</script>

<Realtime channels="account" let:actions>
	<button on:click={actions.subscribe()}>Subscribe to Account channel</button>
	<button on:click={actions.unsubscribe()}>Unsubscribe from Account channel</button>
</Realtime>
