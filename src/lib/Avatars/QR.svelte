<script>
  import { SDK as Appwrite } from "../appwrite";

  export let text;
  export let size = 400;
  export let margin = 1;
  export let download = false;

  let src = Appwrite.sdk.avatars.getQR(text, size, margin, download ? true : false);
</script>

<slot {src} />
