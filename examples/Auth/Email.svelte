<script>
    import { AuthEmail } from "$lib";
  
    let email = "";
    let password = "";
  
    const success = e => {
      //success callback
      // `e` contains the user object
    };
  
    const failure = e => {
      //failure callback
    }
  </script>
  
  <AuthEmail let:authorize on:success on:failure>
    <input type="text" bind:value={email}>
    <input type="text" bind:value={password}>
    <button on:click={authorize(email,password)}>Login</button>
  </AuthEmail>
