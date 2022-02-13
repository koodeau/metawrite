<script>
    import { MagicURL } from "$lib";

    const userId = "32h2hj24h2"
    const email = "user@example.com"
    const url = "http://example.com" // optional
</script>

<MagicURL let:actions>
    <button on:click={actions.create(userId, email, url)}>Create MagicURL</button>
</MagicURL>
