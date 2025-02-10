// Selección de elementos del DOM
const editButton = document.querySelector(".profile__info-edit-button");
const botonAdd = document.querySelector(".profile__add-button-edit");
const formPopUp = document.querySelector(".form");
const closeButton = document.querySelector(".form__button-close");
const inputFirst = document.querySelector(".form__edit-input-first");
const inputSecond = document.querySelector(".form__edit-input-second");
const form = document.getElementById("form");
const formButton = document.querySelector(".form__edit-submit-button");
const nameProfile = document.querySelector(".profile__info-header-title");
const description = document.querySelector(".profile__info-details-text");
const cardContainer = document.querySelector(".elements");

// Estado para identificar si el formulario está en modo edición
let isEditMode = false;

// Función para abrir el formulario con título y placeholders personalizados
function abrirFormulario(
  titulo,
  placeholder1,
  placeholder2,
  modoEdicion = false
) {
  inputFirst.value = "";
  inputSecond.value = "";
  formButton.classList.remove("form__edit-submit-button--active");
  isEditMode = modoEdicion;
  formPopUp.classList.add("form__show");

  document.querySelector(".form__title-text").textContent = titulo;
  inputFirst.placeholder = placeholder1;
  inputSecond.placeholder = placeholder2;
}

// Eventos para abrir el formulario
editButton.addEventListener("click", () =>
  abrirFormulario("Editar perfil", "Nombre", "Acerca de mí", true)
);
botonAdd.addEventListener("click", () =>
  abrirFormulario("Nuevo lugar", "Título", "Enlace a la imagen")
);

// Evento para cerrar el formulario
closeButton.addEventListener("click", () =>
  formPopUp.classList.toggle("form__show")
);

// Activar el botón de envío cuando se ingresa texto
function botonActivado() {
  formButton.classList.add("form__edit-submit-button--active");
}
inputFirst.addEventListener("input", botonActivado);
inputSecond.addEventListener("input", botonActivado);

// Datos iniciales de las tarjetas
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

// Función para agregar una nueva tarjeta
function addCard(name, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);

  cardElement.querySelector(".elements__item-img").src = link;
  cardElement.querySelector(".elements__item-title").textContent = name;
  cardContainer.append(cardElement);

  // Evento para dar "like"
  const likeButton = cardElement.querySelector(".elements__item-like-button");
  likeButton.addEventListener("click", () => {
    likeButton.src = likeButton.src.includes("Group.png")
      ? "./images/Union.png"
      : "./images/Group.png";
  });

  // Evento para abrir la imagen en grande
  cardElement
    .querySelector(".elements__item-img")
    .addEventListener("click", () => {
      document
        .querySelector(".popup__image")
        .classList.add("popup__image-show");
      document.querySelector(".popup__image-img").src = link;
      document.querySelector(".popup__image-text").textContent = name;
    });

  // Evento para eliminar la tarjeta
  const deleteButton = cardElement.querySelector(
    ".elements__item-action-button"
  );
  deleteButton.addEventListener("click", () => cardElement.remove());
}

// Evento para cerrar la imagen emergente
document.querySelector(".popup__button-close").addEventListener("click", () => {
  document.querySelector(".popup__image").classList.remove("popup__image-show");
});

// Evento para manejar el envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isEditMode) {
    nameProfile.textContent = inputFirst.value;
    description.textContent = inputSecond.value;
  } else {
    addCard(inputFirst.value, inputSecond.value);
  }

  formPopUp.classList.remove("form__show");
});

// Agregar tarjetas iniciales al cargar la página
initialCards.forEach((card) => addCard(card.name, card.link));
