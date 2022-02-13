<script>
	import { PhoneCodes } from '$lib';
</script>

<PhoneCodes let:actions let:codes>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {codes.sum} phone codes:</p>
	{#each codes.phones as phone}
		<p>{phone.code} - {phone.countyName}></p>
	{/each}
</PhoneCodes>
