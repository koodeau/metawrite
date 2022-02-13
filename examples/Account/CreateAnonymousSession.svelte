<script>
    import { CreateAnonymousSession } from "$lib";
</script>

<CreateAnonymousSession let:actions>
    <button on:click={actions.create}>Create Anonymous Session</button>
</CreateAnonymousSession>
