// Crea la clase Card, que produce una tarjeta con texto y un enlace a la imagen, siguiendo estos requisitos:

// * Toma los datos de la tarjeta (tanto el texto como un enlace a la imagen) y un selector de elemento de plantilla como parámetros en el constructor. OOOO

// * Dispone de métodos privados para trabajar con el marcado y añadir detectores de eventos.

// * Tiene métodos privados para cada controlador de eventos.

// * Tiene un método público que devuelve un elemento card completamente funcional y lleno de datos.

// * Crea una instancia de la clase Card para cada tarjeta.

const cardTemplate = document.querySelector("#card-template").content;

export default class Card {
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
    return this.card;
  }

  setEventsListeners() {
    this.cardLikeButton.addEventListener("click", this._like);
    this.cardDeleteButton.addEventListener("click", this._delete);
  }
}
