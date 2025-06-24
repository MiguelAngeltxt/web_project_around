import Card from "./Card.js";
import { Section } from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import FormValidator from "./FormValidator.js";

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

const validationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  activeButtonClass: "form__button--active",
};

const List = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#card-template", handleCardClick);
      const cardElement = card.generateCard();
      List.addItem(cardElement);
    },
  },
  ".elements"
);

const popupImage = new PopupWithImage(".popup__image");

popupImage.setEventListeners();

const handleCardClick = (name, link) => {
  popupImage.open(name, link);
};

const profilePopup = new PopupWithForm(".form", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    description: formData.description,
  });
  profilePopup.close();
});
profilePopup.setEventListeners();

document.querySelector("#profile-button").addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  document.querySelector("#input-name").value = currentUser.name;
  document.querySelector("#input-description").value = currentUser.about;
  profilePopup.open();
});

const addCardPopup = new PopupWithForm(".form-b", (formData) => {
  const newCard = new Card(
    { name: formData.title, link: formData.link },
    "#card-template",
    handleCardClick
  );
  const cardElement = newCard.generateCard();
  List.addItem(cardElement);
  addCardPopup.close();
});
addCardPopup.setEventListeners();

document.querySelector("#add-button").addEventListener("click", () => {
  addCardPopup.open();
});

const userInfo = new UserInfo({
  nameSelector: "#name",
  aboutSelector: "#description",
});

document.querySelector("#profile-button").addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();
  document.querySelector("#input-name").value = currentUser.name;
  document.querySelector("#input-description").value = currentUser.description;
  profilePopup.open();
});

const formEditProfile = document.querySelector("#inputs");
const formAddCard = document.querySelector("#inputs-b");

const profileFormValidator = new FormValidator(
  validationConfig,
  formEditProfile
);

const addCardFormValidator = new FormValidator(validationConfig, formAddCard);

profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

List.renderItems();
