<script>
  import {loginWithGoogle} from '$lib/firebase/auth.client';
  import messagesStore from '$lib/stores/messages.store';

  async function loginGoogle() {
    try {
      const user = await loginWithGoogle();
      console.log(user);
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        return;
      }
      console.log(error)
      messagesStore.showError();
    }
  }
</script>
<div class="row">
  <div class="col" on:click={loginGoogle}>
    <button class="btn btn-primary w-100">
      Login with Google
    </button>
  </div>
</div>