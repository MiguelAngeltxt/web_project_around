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

//elementos de cada card
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
//tomo la seccion donde se almacenaran las cards
const cardContainer = document.querySelector(".elements");
//agrega aqui la informacion de las cards.
function addCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);
  cardElement.querySelector(".elements__item-img").src = link;
  cardElement.querySelector(".elements__item-title").textContent = name;
  cardContainer.append(cardElement);
}

initialCards.forEach((card) => addCard(card.name, card.link));

const imgCorazon = document.querySelectorAll(".elements__item-like-button");

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
