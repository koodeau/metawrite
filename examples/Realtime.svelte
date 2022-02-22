<script>
	import { Realtime } from 'metawrite';
</script>

<Realtime let:actions>
	<button on:click={actions.subscribe('account')}>Subscribe to Account channel</button>
	<button on:click={actions.unsubscribe('account')}>Unsubscribe from Account channel</button>
</Realtime>