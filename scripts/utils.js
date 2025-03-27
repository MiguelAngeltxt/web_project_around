import { Card, cardTemplate } from "./Card.js";

export class FormManager {
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
    this.openProfileForm(this.profileButton, this.profilePopup);
    this.openProfileForm(this.cardButton, this.cardPopup);
    this.setupEventListeners();
  }

  openProfileForm(button, popup) {
    button.addEventListener("click", () => {
      popup.classList.add("form__show");
      this.overlay.classList.add("overlay--active");
    });
  }

  closeForm() {
    this.profilePopup.classList.remove("form__show");
    this.cardPopup.classList.remove("form__show");
    this.overlay.classList.remove("overlay--active");
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
