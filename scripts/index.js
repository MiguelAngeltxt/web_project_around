// Creo las variables que necesito para seleccionar los elements__itemos del DOM que me interesan.
//esta selecciona el boton para editar los datos del usuario
const botonEditar = document.querySelector(".profile__info-edit-button");
//esta selecciona el boton para agregar cards
const botonAdd = document.querySelector(".profile__add-button-edit");
//selecciona el formulario
const formPopUp = document.querySelector(".form");
//selecciona el boton de cierre del formulario
const botonCierre = document.querySelector(".form__button-close");
//selecciona el primer input de texto del formulario
const inputFirst = document.querySelector(".form__edit-input-first");
//selecciona el segundo input de texto del formulario
const inputSecond = document.querySelector(".form__edit-input-second");
//selecciono el formulario
const form = document.getElementById("form");
//selecciono el boton para enviar el formulario
const botonForm = document.querySelector(".form__edit-submit-button");
//nombre del usuario
const Nombre = document.querySelector(".profile__info-header-title");
//descripcion del usuario
const Descripción = document.querySelector(".profile__info-details-text");

// Variable de estado para saber si estamos en modo de edición
let isEditMode = false;

// Función para abrir el formulario y modificar los textos y placeholders según el tipo de formulario
function abrirFormulario(
  titulo,
  placeholder1,
  placeholder2,
  modoEdicion = false
) {
  // Limpia los campos antes de abrir el formulario
  inputFirst.value = ""; // Limpia el primer input
  inputSecond.value = ""; // Limpia el segundo input
  botonForm.classList.remove("form__edit-submit-button--active"); // "apaga" el boton guardar
  isEditMode = modoEdicion; // Actualizamos el estado
  formPopUp.classList.add("form__show");
  document.querySelector(".form__title-text").textContent = titulo;
  document.querySelector(".form__edit-input-first").placeholder = placeholder1;
  document.querySelector(".form__edit-input-second").placeholder = placeholder2;
}

// Añado un event listener al botón de editar
botonEditar.addEventListener("click", () =>
  abrirFormulario("Editar perfil", "Nombre", "Acerca de mí", true)
);

// Añado un event listener al botón de añadir
botonAdd.addEventListener("click", () =>
  abrirFormulario("Nuevo lugar", "Título", "Enlace a la imagen", false)
);

//boton de cierre del formulario
botonCierre.addEventListener("click", () =>
  formPopUp.classList.toggle("form__show")
);

//hago que se active el boton submit
inputFirst.addEventListener("input", botonActivado);
inputSecond.addEventListener("input", botonActivado);
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
  const cardTemplate = document.querySelector("#card-template").content; //selecciono el template
  const cardElement = cardTemplate //clono el template
    .querySelector(".elements__item")
    .cloneNode(true);
  //establezco los datos que iran en cada input
  cardElement.querySelector(".elements__item-img").src = link;
  cardElement.querySelector(".elements__item-title").textContent = name;
  //incorporo cada card
  cardContainer.append(cardElement);

  //variable del boton like
  const likeButton = cardElement.querySelector(".elements__item-like-button");
  // le doy funcionalidad al boton like
  likeButton.addEventListener("click", () => {
    if (likeButton.src.includes("Group.png")) {
      likeButton.src = "./images/Union.png";
    } else {
      likeButton.src = "./images/Group.png";
    }
  });
  //establezco la apertura de la imagen mediante su click
  cardElement
    .querySelector(".elements__item-img")
    .addEventListener("click", () => {
      document
        .querySelector(".popup__image")
        .classList.add("popup__image-show");
      document.querySelector(".popup__image-img").src = link;
      document.querySelector(".popup__image-text").textContent = name;
    });
  //selecciono el boton eliminar
  const deleteButton = cardElement.querySelector(
    ".elements__item-action-button"
  );
  //funcionalidad del boton eliminar
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
}

//selecciono el boton para cerrar el popup de imagen
const cerrarImagen = document.querySelector(".popup__button-close");
//doy funcionalidad al boton para que se cierre la imagen
cerrarImagen.addEventListener("click", () => {
  document.querySelector(".popup__image").classList.remove("popup__image-show");
});

// Se añade un event listener al formulario para manejar el evento submit
form.addEventListener("submit", (e) => {
  // Se previene la acción predeterminada del formulario (recargar la página)
  e.preventDefault();
  //distingo las dos formas de abrir el formulario
  if (isEditMode) {
    Nombre.textContent = inputFirst.value;
    Descripción.textContent = inputSecond.value;
  } else {
    addCard(inputFirst.value, inputSecond.value);
  }
  formPopUp.classList.remove("form__show");
});

initialCards.forEach((card) => addCard(card.name, card.link));
