<script>
    import { Create } from "$lib";

    let name, email, password = "";

    const success = e => {
    //success callback
    // `e` contains the user object
  };

  const failure = e => {
    //failure callback
  }
</script>

<Create let:actions on:success on:failure>
    <input type="text" name="name" placeholder="name" bind:value={name} />
    <input type="text" name="email" placeholder="email" bind:value={email} />
    <input type="password" name="password" placeholder="password" bind:value={password} />
    <button on:click={actions.create(name, email, password)}>Create Account</button>
</Create>
