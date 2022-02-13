<script>
    import { Update } from "$lib"

    let name, email, password, newPassword, oldPassword = ""
</script>

<Update let:actions>
    <button on:click={actions.name(name)}>This updates name</button>
    <button on:click={actions.email(email, password)}>This updates email</button>
    <button on:click={actions.password(newPassword, oldPassword)}>This updates password</button>
</Update>
