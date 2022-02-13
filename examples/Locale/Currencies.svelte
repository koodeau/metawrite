<script>
    import { Currencies } from "$lib"
</script>

<Currencies let:actions let:currencies>
    <button on:click={actions.reload()}>Reload</button>
    <p>There are {currencies.sum} currencies:</p>
    {#each currencies.currencies as currency}
        <p>{currency.symbol} - {currency.name} ({currency.code})</p>
    {/each}
</Currencies>
