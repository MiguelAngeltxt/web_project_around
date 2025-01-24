// Creo las variables que necesito para seleccionar los elements__itemos del DOM que me interesan.
const botonEditar = document.querySelector(".profile__info-edit-button");
const botonAdd = document.querySelector(".profile__add-button-edit");
const formPopUp = document.querySelector(".form");
const botonCierre = document.querySelector(".form__button-close");
const inputNombre = document.querySelector(".form__edit-input-name");
const inputDescripcion = document.querySelector(
  ".form__edit-input-description"
);

const form = document.getElementById("form");
const imgCorazon = document.querySelectorAll(
  ".elements__item-like-button"
);
const botonForm = document.querySelector(".form__edit-submit-button");
const Nombre = document.querySelector(".profile__info-header-title");
const Descripción = document.querySelector(".profile__info-details-text");

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
  Descripción.textContent = inputDescripcion.value;
  formPopUp.classList.remove("form__show");
}

inputNombre.addEventListener("input", botonActivado);
inputDescripcion.addEventListener("input", botonActivado);
function botonActivado() {
  botonForm.classList.add("form__edit-submit-button--active");
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
