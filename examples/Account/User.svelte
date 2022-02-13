<script>
    import { User } from "$lib"
</script>

<User let:actions let:user>
    <button on:click={actions.reload()}>Reload user data</button>
    <button on:click={actions.get()}>Get logged in user data</button>
    <button on:click={actions.logout()}>Log out from current session</button>
    <button on:click={actions.logoutFrom("sessionId")}>Log out from specific session</button>
    <button on:click={actions.logoutAll()}>Log out from all sessions</button>

    <!-- If logged in -->
    <p>Hi, {user.name}</p>
</User>
