<script>
    import { Countries } from "$lib"

    let eu = true; // if you want to list only EU countries
</script>

<Countries let:actions let:countries>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {countries.sum} countries in the world:</p>
    {#each countries.countries as country}
        <p>{country.name}, {country.code}</p>
    {/each}
</Countries>

<Countries {eu} let:actions let:countries>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {countries.sum} countries in EU:</p>
    {#each countries.countries as country}
        <p>{country.name}, {country.code}</p>
    {/each}
</Countries>
