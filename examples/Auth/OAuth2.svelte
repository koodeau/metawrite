<script>
    import { AuthOAuth2 } from "$lib";
  </script>
  
  <AuthOAuth2
    authProvider="google"
    success="http://localhost:3000?success"
    failure="http://localhost:3000?failure"
    let:authorize>
    <button on:click={authorize}>Login Google</button>
  </AuthOAuth2>
