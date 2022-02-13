<script>
    import { Verification } from "$lib"

    const url = window.location.href;
</script>

<Verification let:actions>
    <button on:click={actions.create(url)}></button>
    <button on:click={actions.update()}>Update email verification status</button>
</Verification>
