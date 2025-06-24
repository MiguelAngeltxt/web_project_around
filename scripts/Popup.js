export default class Popup {
  constructor(selector) {
    this._PopupElement = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._PopupElement.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.querySelector(".overlay__image");
    document
      .querySelector(".overlay__image")
      .classList.add("overlay__image--active");
  }

  close() {
    this._PopupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document
      .querySelector(".overlay__image")
      .classList.remove("overlay__image--active");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._PopupElement
      .querySelector(".popup__button-close")
      .addEventListener("click", () => {
        this.close();
      });

    const overlay = document.querySelector(".overlay__image");

    overlay.addEventListener("click", (evt) => {
      if (evt.target === overlay) {
        this.close();
      }
    });
  }
}
