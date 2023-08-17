import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { Auth } from "./Firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#sigunp-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupForm["registre-email"].value;
  const password = signupForm["registre-password"].value;

  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      Auth,
      email,
      password
    );
    console.log(userCredentials);

    const sigupModal = document.querySelector("#sigupModal");
    const modal = bootstrap.Modal.getInstance(sigupModal);
    modal.hide();

    showMessage("Bienvenido " + userCredentials.user.email);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showMessage("El correo ya esta en uso", "error");
    } else if (error.code === "auth/invalid-email") {
      showMessage("Correo Invalido", "error");
    } else if (error.code === "auth/weak-password") {
      showMessage("La contranseña debe tener almenos 6 digitos ", "error");
    } else if (error.code) {
      showMessage(error.message, "error");
    }
  }
});
