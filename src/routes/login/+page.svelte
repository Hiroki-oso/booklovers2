<script>
  import LoginWithGoogle from "$lib/components/Auth/LoginWithGoogle.svelte";
  import AuthForm from "$lib/components/Auth/AuthForm.svelte";
  import { loginWithEmailandPassword } from "$lib/firebase/auth.client";
  import messagesStore from "$lib/stores/messages.store";
  async function onLogin(event) {
    try {
      const formData = new FormData(event.target);
      const email = formData.get('email');
      const password = formData.get('password');
      const user = await loginWithEmailandPassword(email, password);
    } catch (err) {
      if(['auth/invalid-email', 
      'auth/user-not-found', 
      'auth/wrong-password'].includes(error.code)) {
        messagesStore.showError('Invalid email or password');
        return;
      }
      messagesStore.showError();
    }
  }
</script>

<div class="row">
  <div class="col">
    <h1>Login</h1>
  </div>
</div>
<hr />
<AuthForm on:submit={onLogin} btnName="Login" />
<hr />
<LoginWithGoogle />
<svelte:head>
  <title>
    Book Lovers - Login Page
  </title>
</svelte:head>