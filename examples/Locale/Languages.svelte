<script>
	import { Languages } from '$lib';
</script>

<Languages let:actions let:languages>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {languages.sum} languages:</p>
	{#each languages.languages as language}
		<p>{language.name}, {language.code}></p>
    {/each}
</Languages>
