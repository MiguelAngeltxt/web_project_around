export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._isLiked = false;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);
    return cardElement;
  }

  _handleLikeClick() {
    const likeButton = this._element.querySelector(
      ".elements__item-like-button"
    );
    if (this._isLiked) {
      likeButton.src = "./images/Group.png";
    } else {
      likeButton.src = "./images/Union.png";
    }
    this._isLiked = !this._isLiked;
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector(".elements__item-img");
    imageElement.src = this._link;
    imageElement.alt = this._name;
    this._element.querySelector(".elements__item-title").textContent =
      this._name;

    imageElement.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    const deleteButton = this._element.querySelector(
      ".elements__item-action-button"
    );
    deleteButton.addEventListener("click", () => {
      this._element.remove();
    });

    const likeButton = this._element.querySelector(
      ".elements__item-like-button"
    );
    likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    return this._element;
  }
}
