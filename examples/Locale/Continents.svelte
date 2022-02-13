<script>
    import { Continents } from "$lib"
</script>

<Continents let:actions let:continents>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {continents.sum} continents:</p>
    {#each continents.continents as continent}
        <p>{continent.name}, {continent.code}</p>
    {/each}
</Continents>
