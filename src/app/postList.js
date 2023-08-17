import {
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "../app/Firebase.js";
import { showMessage } from "./showMessage.js";

const postList = document.querySelector(".final");

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  const foto = form.querySelector("#foto").value;
  const id = form.querySelector("#id").value;
  const nombre = form.querySelector("#nombre").value;
  const correo = form.querySelector("#correo").value;
  const telefono = form.querySelector("#telefono").value;

  try {
    await addDoc(collection(db, "final"), {
      foto: foto,
      id: id,
      nombre: nombre,
      correo: correo,
      telefono: telefono,
    });
    showMessage("Datos enviados correctamente");
    form.reset();
  } catch (error) {
    showMessage("Error al enviar los datos", error);
  }
};

const formContent = `
  <li class="list-group-item list-group-item-action">
    <center><h1 class="h1-form" >Formulario</h1></center>
    <form id="userForm">
      <div class="mb-3">
        <label for="foto" class="form-label">Foto</label>
        <input type="file" class="form-control" id="foto" name="foto">
      </div>
      <div class="mb-3">
        <label for="id" class="form-label">ID</label>
        <input type="text" class="form-control" id="id" name="id" required>
      </div>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" name="nombre" required>
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo</label>
        <input type="email" class="form-control" id="correo" name="correo" required>
      </div>
      <div class="mb-3">
        <label for="telefono" class="form-label">Teléfono</label>
        <input type="tel" class="form-control" id="telefono" name="telefono"required>
      </div>
      <button id="btnsave" type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </li>
`;

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = ` `;
      html += li;
    });

    html += formContent;

    postList.innerHTML = html;

    const form = document.getElementById("userForm");
    form.addEventListener("submit", handleFormSubmit);
  } else {
    postList.innerHTML = `
      <div class="no-data">
        <img src="./assets/portada.png" alt="portada">
      </div>
    `;
  }
};
