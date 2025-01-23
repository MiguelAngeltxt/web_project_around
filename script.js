// Creo las variables que necesito para seleccionar los elementos del DOM que me interesan.
const botonEditar = document.querySelector(".profile_info_edit-button");
const botonAdd = document.querySelector(".profille_add-button_edit");
const formPopUp = document.querySelector(".form");
const botonCierre = document.querySelector(".form__button-close");
const inputNombre = document.querySelector(".form-info-input--name");
const inputDescripcion = document.querySelector(
  ".form-info-input--description"
);
const Nombre = document.querySelector(".profile_info_name");
const Descripcion = document.querySelector(".profile_info_description");
const form = document.querySelector(".form-info");
const imgCorazon = document.querySelectorAll(".content__corazon");
const botonForm = document.querySelector(".form-info-button");

// Añado un event listener al botón de editar para que cuando se haga click se ejecute la función abrirFormulario.
botonEditar.addEventListener("click", abrirFormulario);
// Creo la función abrirFormulario que añade la clase form__show al formulario.
function abrirFormulario() {
  formPopUp.classList.add("form__show");
}
// Añado un event listener al botón de cerrar para que cuando se haga click se ejecute la función cerrarFormulario.
botonCierre.addEventListener("click", cerrarFormulario);
// Creo la función cerrarFormulario que elimina la clase form__show al formulario.
function cerrarFormulario() {
  formPopUp.classList.remove("form__show");
}

form.addEventListener("submit", guardarDatos);
function guardarDatos(e) {
  e.preventDefault();
  Nombre.textContent = inputNombre.value;
  Descripcion.textContent = inputDescripcion.value;
}

inputNombre.addEventListener("input", botonActivado);
inputDescripcion.addEventListener("input", botonActivado);
function botonActivado() {
  botonForm.classList.add("form-info-button--active");
}

// Cambiar color del corazón
imgCorazon.forEach((corazon) => {
  corazon.addEventListener("click", () => {
    if (corazon.src.includes("Group.png")) {
      corazon.src = "./images/Union.png";
    } else {
      corazon.src = "./images/Group.png";
    }
  });
});
