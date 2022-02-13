<script>
    import { Storage } from "$lib"

    // Required
    /**@type {File}*/ let file;
    /**@type {string}*/ let fileId = "unique()"; // this will generate random unique id, but you can use custom

    // Optional
    /**@type {string[]}*/ let read;
    /**@type {string[]}*/ let write;
</script>

<Storage {file} let:actions>
    <button on:click={actions.create(fileId, file, read, write)}>Upload File</button>
</Storage>
