<script>
    import { RecoverPassword } from "metawrite";

    const url = "http://localhost:3000/reset-password"; // URL that will point to the next step.
    let email = '';

    const successRecover = e => {
    //success callback
    // `e` contains the user object
  };

  const failureRecover = e => {
    //failure callback
  }
</script>

<!-- localhost/forgot-password -->
<RecoverPassword let:actions on:successRecover on:failureRecover>
    <input name="email" type="text" bind:value={email, url} placeholder="Email" />
    <button on:click{actions.recover(email)}>Recover Password</button>
</RecoverPassword>

<!-- Then on localhost/reset-password  -->
<script>
    import { RecoverPassword } from "$lib";

    let password, passwordAgain = '';

    const successComplete = e => {
    //success callback
    // `e` contains the user object
  };

  const failureComplete = e => {
    //failure callback
  }
</script>

<RecoverPassword let:actions on:successComplete on:failureComplete>
    <input type="password" name="password" bind:value{password} placeholder="Password" />
    <input type="password" name="password" bind:value{passwordAgain} placeholder="Confirm Password" />
    <button on:click{actions.complete(password, passwordAgain)}>Set New Password</button>
</RecoverPassword>
