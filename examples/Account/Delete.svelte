<script>
    import { Delete } from "$lib";

    const success = e => {
    //success callback
    // `e` contains the user object
  };

  const failure = e => {
    //failure callback
  }
</script>

<Delete let:actions on:success on:failure>
    <button on:click={actions.delete}>Delete my account</button>
</Delete>
