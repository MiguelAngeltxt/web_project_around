// Selección de elementos del DOM
const editButton = document.querySelector("#edit-profile-button");
const botonAdd = document.querySelector("#add-button");
const formPopUp = document.querySelector("#popup");
const formAdd = document.querySelector("#popup-b");
const closeButton = document.querySelector("#close-button");
const closeButtonAdd = document.querySelector(".form__button-b");
const inputFirst = document.querySelector("#first");
const inputFirstAdd = document.querySelector("#first-b");
const inputSecond = document.querySelector("#second");
const inputSecondAdd = document.querySelector("#second-b");
const form = document.querySelector("#inputs");
const formButton = document.querySelector("#save-button");
const formButtonAdd = document.querySelector("#save-button-b");
const nameProfile = document.querySelector("#name");
const description = document.querySelector("#description");
const cardContainer = document.querySelector(".elements");
const overlay = document.querySelector("#overlay");
const overlayImage = document.querySelector(".overlay__image");
const errorMesageFirst = document.querySelector(".error__message-first");
const errorMesageFirstAdd = document.querySelector(".error__message-first-b");
const errorMesageSecond = document.querySelector(".error__message-second");
const errorMesageSecondAdd = document.querySelector(".error__message-second-b");

// Estado para identificar si el formulario está en modo edición
// let isEditMode = false;

// // Función para abrir el formulario con título y placeholders personalizados
// function abrirFormulario(
//   titulo,
//   placeholder1,
//   placeholder2,
//   modoEdicion = false
// ) {
//   inputFirst.value = "";
//   inputSecond.value = "";
//   errorMesageFirst.textContent = "";
//   errorMesageSecond.textContent = "";
//   formButton.classList.remove("form__edit-submit-button--active");
//   isEditMode = modoEdicion;
//   formPopUp.classList.add("form__show");
//   overlay.classList.add("overlay--active");
//   document.querySelector(".form__title-text").textContent = titulo;
//   inputFirst.placeholder = placeholder1;
//   inputSecond.placeholder = placeholder2;
//   errorMesageFirst.textContent = "";
//   errorMesageSecond.textContent = "";
//   inputFirst.addEventListener("input", () => {
//     if (isEditMode) {
//       inputFirst.setAttribute("minlength", "2");
//       inputFirst.setAttribute("maxlength", "40");
//       errorMesageFirst.textContent = inputFirst.validationMessage;
//     } else {
//       inputFirst.setAttribute("minlength", "2");
//       inputFirst.setAttribute("maxlength", "30");
//       errorMesageFirst.textContent = inputFirst.validationMessage;
//     }
//   });
//   inputSecond.addEventListener("input", () => {
//     if (isEditMode) {
//       inputSecond.setAttribute("minlength", "2");
//       inputSecond.setAttribute("maxlength", "200");
//       inputSecond.type = "text";
//       errorMesageSecond.textContent = inputSecond.validationMessage;
//     } else {
//       inputSecond.type = "url";
//       errorMesageSecond.textContent = inputSecond.validationMessage;
//     }
//   });
// }

// // Eventos para abrir el formulario
// editButton.addEventListener("click", () =>
//   abrirFormulario("Editar perfil", "Nombre", "Acerca de mí", true)
// );

// botonAdd.addEventListener("click", () =>
//   abrirFormulario("Nuevo lugar", "Título", "Enlace a la imagen")
// );

// abrir formulario para editar perfil
editButton.addEventListener("click", () => {
  formPopUp.classList.add("form__show");
  overlay.classList.add("overlay--active");
});

// abrir formulario para agregar tarjeta
botonAdd.addEventListener("click", () => {
  formAdd.classList.add("form__show");
  overlay.classList.add("overlay--active");
});

//escuchar el primer imput del formulario edit para validarlo
inputFirst.addEventListener("input", () => {
  inputFirst.setAttribute("minlength", "2");
  inputFirst.setAttribute("maxlength", "40");
  errorMesageFirst.textContent = inputFirst.validationMessage;
});

// escuchar el primer input del formulario add para validarlo
inputFirstAdd.addEventListener("input", () => {
  inputFirstAdd.setAttribute("minlength", "2");
  inputFirstAdd.setAttribute("maxlength", "30");
  errorMesageFirstAdd.textContent = inputFirstAdd.validationMessage;
});

// escuchar el segundo input del formulario edit para validarlo
inputSecond.addEventListener("input", () => {
  inputSecond.setAttribute("minlength", "2");
  inputSecond.setAttribute("maxlength", "200");
  errorMesageSecond.textContent = inputSecond.validationMessage;
});

// escuchar el segundo input del formulario add para validarlo
inputSecondAdd.addEventListener("input", () => {
  errorMesageSecondAdd.textContent = inputSecondAdd.validationMessage;
});

// Función para cerrar el formulario
function cerrarFormulario() {
  formPopUp.classList.remove("form__show");
  formAdd.classList.remove("form__show");
  overlay.classList.remove("overlay--active");
  inputFirst.value = "";
  inputSecond.value = "";
  inputFirstAdd.value = "";
  inputSecondAdd.value = "";
}

// Evento para cerrar el formulario
closeButton.addEventListener("click", () => {
  cerrarFormulario();
});

// Evento para cerrar el segundo formulario
closeButtonAdd.addEventListener("click", () => {
  cerrarFormulario();
});

// Evento para cerrar el formulario con tecla "Escape"
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cerrarFormulario();
  }
});

// Evento para cerrar el formulario al hacer clic fuera de él
document.addEventListener("click", (e) => {
  if (e.target === overlay) {
    cerrarFormulario();
  }
});

// Escuchar cambios en los inputs para validar el formulario dinámicamente
inputFirst.addEventListener("input", validarFormulario);
inputSecond.addEventListener("input", validarFormulario);
inputFirstAdd.addEventListener("input", validarFormulario);
inputSecondAdd.addEventListener("input", validarFormulario);

//funcion para activar el boton submir luego de validar los inputs
function validarFormulario() {
  const isValidFirst = inputFirst.validity.valid;
  const isValidSecond = inputSecond.validity.valid;
  const isValidFirstAdd = inputFirstAdd.validity.valid;
  const isValidSecondAdd = inputSecondAdd.validity.valid;

  if (isValidFirst && isValidSecond) {
    formButton.classList.add("form__edit-submit-button--active");
  } else {
    formButton.classList.remove("form__edit-submit-button--active");
  }

  if (isValidFirstAdd && isValidSecondAdd) {
    formButtonAdd.classList.add("form__edit-submit-button-b--active");
  } else {
    formButtonAdd.classList.remove(".form__edit-submit-button-b--active");
  }
}

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
function addCard(name, link, isNewCard = false) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".elements__item")
    .cloneNode(true);

  cardElement.querySelector(".elements__item-img").src = link;
  cardElement.querySelector(".elements__item-title").textContent = name;

  if (isNewCard) {
    // Solo si es una tarjeta nueva, se coloca al principio
    cardContainer.prepend(cardElement);
  } else {
    // Si no es una tarjeta nueva, se coloca al final (como estaba antes)
    cardContainer.append(cardElement);
  }

  // Evento para dar "like"
  const likeButton = cardElement.querySelector(".elements__item-like-button");
  likeButton.addEventListener("click", () => {
    likeButton.src = likeButton.src.includes("Group.png")
      ? "./images/Union.png"
      : "./images/Group.png";
  });

  // Evento para abrir la imagen emergente
  cardElement
    .querySelector(".elements__item-img")
    .addEventListener("click", () => {
      document
        .querySelector(".popup__image")
        .classList.add("popup__image-show");
      document.querySelector(".popup__image-img").src = link;
      document.querySelector(".popup__image-text").textContent = name;
      overlayImage.classList.add("overlay__image--active");
    });

  // Evento para cerrar la imagen emergente
  document
    .querySelector(".popup__button-close")
    .addEventListener("click", () => {
      document
        .querySelector(".popup__image")
        .classList.remove("popup__image-show");
      overlayImage.classList.remove("overlay__image--active");
    });

  // Evento para cerrar la imagen emergente mediante la tecla "Escape"
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelector(".popup__image")
        .classList.remove("popup__image-show");
      overlayImage.classList.remove("overlay__image--active");
    }
  });

  // Evento para cerrar la imagen emergente al hacer clic fuera de ella
  document.addEventListener("click", (e) => {
    if (e.target === overlayImage) {
      document
        .querySelector(".popup__image")
        .classList.remove("popup__image-show");
      overlayImage.classList.remove("overlay__image--active");
    }
  });

  // Evento para eliminar la tarjeta
  const deleteButton = cardElement.querySelector(
    ".elements__item-action-button"
  );
  deleteButton.addEventListener("click", () => cardElement.remove());
}

// Evento para manejar el envío del formulario de editar perfil
form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameProfile.textContent = inputFirst.value;
  description.textContent = inputSecond.value;
  cerrarFormulario();
});

// Evento para manejar el envío del formulario de agregar tarjeta
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  addCard(inputFirstAdd.value, inputSecondAdd.value, true);
  cerrarFormulario();
});

// Agregar tarjetas iniciales al cargar la página
initialCards.forEach((card) => addCard(card.name, card.link));
