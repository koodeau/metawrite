<script>
    import { CreateJWT } from "$lib";
</script>

<CreateJWT let:actions>
    <button on:click={actions.create}>Create JWT token</button>
</CreateJWT>
