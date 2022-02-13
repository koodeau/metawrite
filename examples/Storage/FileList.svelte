<script>
    import { FileList } from "$lib"

    // Optional
    let search = '';
    let limit = 10;
    let offset = 0;
    let orderType = 'ASC';
</script>

<FileList {search} {limit} {offset} {orderType}let:actions let:files>
    {#each files as file}
        <p>File: {file.name}</p>
    {/each}
    <button on:click={actions.reload()}>Reload</button>
</FileList>
