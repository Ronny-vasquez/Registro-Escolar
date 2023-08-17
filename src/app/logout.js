import { signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { Auth } from "../app/Firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async () => {
  await signOut(Auth);
  console.log("el usuario a cerrado sesion");
});
