import { goto } from "$app/navigation";
import { setUser } from "$lib/firebase/firebase.clent";

export async function afterLogin(url, userId) {
  const route = url.searchParams.get('redirect') || '/';
  await setUser(userId)
  await goto(route);
}