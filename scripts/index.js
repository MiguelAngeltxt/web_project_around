import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

const cardContainer = document.querySelector(".elements");
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

initialCards.forEach((card) => {
  const createdCard = new Card(card.name, card.link);
  cardContainer.append(createdCard.createCard());
});

class FormManager {
  constructor() {
    this.profilePopup = document.querySelector("#popup");
    this.profileButton = document.querySelector("#profile-button");
    this.form = document.querySelectorAll(".popup__form");
    this.overlay = document.querySelector("#overlay");
    this.cardPopup = document.querySelector("#popup-b");
    this.cardButton = document.querySelector("#add-button");
    this.closeProfileFormButton = document.querySelector(
      "#close-button-profile"
    );
    this.closeCardFormButton = document.querySelector("#close-button-card");
    this.nameInput = document.querySelector("#input-name");
    this.descriptionInput = document.querySelector("#input-description");
    this.profileSubmitButton = document.querySelector("#save-button");
    this.placeInput = document.querySelector("#input-text");
    this.linkInput = document.querySelector("#input-url");
    this.cardSubmitButton = document.querySelector("#save-button-card");

    this.init();
  }

  init() {
    this.openForm(this.profileButton, this.profilePopup);
    this.openForm(this.cardButton, this.cardPopup);
    this.setupEventListeners();
  }

  openForm(button, popup) {
    button.addEventListener("click", () => {
      openPopup(popup, this.overlay);
    });
  }

  closeForm() {
    closePopup(this.profilePopup, this.overlay);
    closePopup(this.cardPopup, this.overlay);
    this.form.forEach((form) => form.reset());
  }

  setupEventListeners() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeForm();
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target === this.overlay) {
        this.closeForm();
      }
    });

    this.closeProfileFormButton.addEventListener("click", () =>
      this.closeForm()
    );
    this.closeCardFormButton.addEventListener("click", () => this.closeForm());

    this.profilePopup.addEventListener("submit", (e) =>
      this.submitProfileForm(e)
    );
    this.cardPopup.addEventListener("submit", (e) => this.submitCardForm(e));
  }

  submitProfileForm(e) {
    e.preventDefault();
    document.querySelector("#name").textContent = this.nameInput.value;
    document.querySelector("#description").textContent =
      this.descriptionInput.value;
    this.closeForm();
  }

  submitCardForm(e) {
    e.preventDefault();
    const newCard = new Card(this.placeInput.value, this.linkInput.value);
    cardContainer.prepend(newCard.createCard());
    this.closeForm();
  }
}

const formManager = new FormManager();

const validationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  activeButtonClass: "form__button--active",
};

const profileForm = document.querySelector("#inputs");
const cardForm = document.querySelector("#inputs-b");

if (profileForm) {
  const profileValidator = new FormValidator(validationConfig, profileForm);
  profileValidator.enableValidation();
}

if (cardForm) {
  const cardValidator = new FormValidator(validationConfig, cardForm);
  cardValidator.enableValidation();
}
