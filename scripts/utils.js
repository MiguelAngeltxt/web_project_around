export function openPopup(popupElement, overlayElement) {
  popupElement.classList.add("form__show");
  overlayElement.classList.add("overlay--active");
}

export function closePopup(popupElement, overlayElement) {
  popupElement.classList.remove("form__show");
  overlayElement.classList.remove("overlay--active");
}
