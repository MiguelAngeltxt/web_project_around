// class FormValidator {
//   constructor() {
//     this.formList = Array.from(document.querySelectorAll(".popup__form"));
//     this.init();
//   }

//   init() {
//     this.formList.forEach((formElement) => {
//       formElement.addEventListener("submit", (evt) => evt.preventDefault());
//       this.setEventListeners(formElement);
//     });
//   }

//   setEventListeners(formElement) {
//     const inputList = Array.from(formElement.querySelectorAll(".form__input"));
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener("input", () => {
//         this.isValid(formElement, inputElement);
//         this.toggleButtonState(
//           inputList,
//           formElement.querySelector(".form__button")
//         );
//       });
//     });
//   }

//   isValid(formElement, inputElement) {
//     if (!inputElement.validity.valid) {
//       this.showInputError(
//         formElement,
//         inputElement,
//         inputElement.validationMessage
//       );
//     } else {
//       this.hideInputError(formElement, inputElement);
//     }
//   }

//   showInputError(formElement, inputElement, errorMessage) {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add("form__input_type_error");
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add("form__input-error_active");
//   }

//   hideInputError(formElement, inputElement) {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove("form__input_type_error");
//     errorElement.classList.remove("form__input-error_active");
//     errorElement.textContent = "";
//   }

//   hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => !inputElement.validity.valid);
//   }

//   toggleButtonState(inputList, buttonElement) {
//     if (this.hasInvalidInput(inputList)) {
//       buttonElement.setAttribute("disabled", true);
//     } else {
//       buttonElement.classList.add("form__button--active");
//       buttonElement.removeAttribute("disabled");
//     }
//   }
// }

// // Inicializar la validación de formularios
// new FormValidator();

export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => evt.preventDefault());
    this._setEventListeners();
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.setAttribute("disabled", true);
      this._submitButton.classList.remove(this._config.activeButtonClass);
    } else {
      this._submitButton.removeAttribute("disabled");
      this._submitButton.classList.add(this._config.activeButtonClass);
    }
  }
}

// Configuración para la validación
export const validationConfig = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  activeButtonClass: "form__button--active",
};

// Aplicar validación a todos los formularios
export const forms = document.querySelectorAll(".popup__form");
forms.forEach((form) => {
  const validator = new FormValidator(validationConfig, form);
  validator.enableValidation();
});
