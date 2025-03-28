const cardTemplate = document.querySelector("#card-template").content;

export class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  cloneTemplate() {
    return cardTemplate.querySelector(".elements__item").cloneNode(true);
  }

  createCard() {
    this.card = this.cloneTemplate();
    this.cardImage = this.card.querySelector(".elements__item-img");
    this.cardTitle = this.card.querySelector(".elements__item-title");
    this.cardLikeButton = this.card.querySelector(
      ".elements__item-like-button"
    );
    this.cardDeleteButton = this.card.querySelector(
      ".elements__item-action-button"
    );
    this.cardImage.src = this.link;
    this.cardTitle.textContent = this.name;
    this._setEventsListeners();
    return this.card;
  }

  _setEventsListeners() {
    this.cardLikeButton.addEventListener("click", this._like);
    this.cardDeleteButton.addEventListener("click", this._delete);
    this.cardImage.addEventListener("click", (evt) => this._openImage(evt));
    document
      .querySelector(".popup__button-image-close")
      .addEventListener("click", this._closeImage);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this._closeImage();
      }
    });
    document.addEventListener("click", (e) => {
      if (e.target === document.querySelector(".overlay__image")) {
        this._closeImage();
      }
    });
  }

  _like(evt) {
    const likeButton = evt.target;
    const currentSrc = likeButton.src;
    if (currentSrc.includes("./images/Union.png")) {
      likeButton.src = "./images/Group.png";
    } else {
      likeButton.src = "./images/Union.png";
    }
  }

  _delete(evt) {
    evt.target.closest(".elements__item").remove();
  }

  _openImage() {
    document.querySelector(".popup__image").classList.add("popup__image-show");
    document.querySelector(".popup__image-img").src = this.link;
    document.querySelector(".popup__image-text").textContent = this.name;
    document
      .querySelector(".overlay__image")
      .classList.add("overlay__image--active");
  }

  _closeImage() {
    document
      .querySelector(".popup__image")
      .classList.remove("popup__image-show");
    document
      .querySelector(".overlay__image")
      .classList.remove("overlay__image--active");
  }
}
