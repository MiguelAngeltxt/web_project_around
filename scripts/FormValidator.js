// Crea la clase FormValidator, que establece la configuración para validar los campos del formulario de acuerdo con los siguientes requisitos:

// Tu constructor tiene dos parámetros.
// El primer parámetro es un objeto de configuración que almacena los selectores y las clases del formulario,
// y el segundo toma un elemento del formulario a validar.

// Tiene métodos privados para procesar el formulario, que incluyen:
// comprobar la validez del campo, cambiar el estado del botón Submit, y agregar todos los controladores necesarios.

// Tiene un método público enableValidation(), que activa la validación del formulario.

// Crea una instancia de la clase FormValidator para cada formulario que deba ser validado.

const firstForm = document.querySelector("#inputs");
const secondForm = document.querySelector("#inputs-b");

const nameInput = document.querySelector("#first");
const nameSpan = document.querySelector("#first-span");
const descriptionInput = document.querySelector("#second");
const descriptionSpan = document.querySelector("#second-span");

const titleInput = document.querySelector("#first-b");
const titleSpan = document.querySelector("third-span");
const linkInput = document.querySelector("#second-b");
const linkSpan = document.querySelector("#fourth-span");

export default class FormValidator {
  constructor(
    {
      formSelector,
      firstInputSelector,
      secondInputSelector,
      firstSpanSelector,
      secondSpanSelector,
      submitButtonSelector,
    },
    form
  ) {
    this._form = form;
    this._formSelector = formSelector;
    this._firstInputSelector = firstInputSelector;
    this._secondInputSelector = secondInputSelector;
    this._firstSpanSelector = firstSpanSelector;
    this._secondSpanSelector = secondSpanSelector;
    this._submitButtonSelector = submitButtonSelector;
  }

  _ComprobarValidezDelCampo() {
    this._firstSpanSelector.textContent =
      this._firstInputSelector.validationMessage;
    this._secondSpanSelector.textContent =
      this._secondInputSelector.validationMessage;
  }
  _CambiarBotonSubmit() {
    this._form.addEventListener("input", () => {
      const isValidFirst = this._firstInputSelector.validity.valid;
      const isValidSecond = this._secondInputSelector.validity.valid;

      if (isValidFirst && isValidSecond) {
        this._submitButtonSelector.classList.add(
          "form__edit-submit-button--active"
        );
      } else {
        this._submitButtonSelector.classList.remove(
          "form__edit-submit-button--active"
        );
      }
    });
  }

  EnableValidation() {
    this._form.addEventListener("input", () => {
      this._ComprobarValidezDelCampo();
    });
  }
}
