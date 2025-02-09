// Se añade un event listener al formulario para manejar el evento submit
form.addEventListener("submit", (e) => {
    // Se previene la acción predeterminada del formulario (recargar la página)
    e.preventDefault();
    
    if (isEditMode) {
        Nombre.textContent = inputFirst.value;
        Descripción.textContent = inputSecond.value;
    } else {
        
    }formPopUp.classList.remove("form__show");
});






    // Si estamos en modo de edición, actualizamos los valores de Nombre y Descripción
    isEditMode &&
      // Asigna el valor del inputFirst a Nombre
      ((Nombre.textContent = inputFirst.value),
      // Asigna el valor de inputSecond a Descripción
      (Descripción.textContent = inputSecond.value));
  
    // Se cierra el formulario (eliminando la clase que lo hace visible)
    formPopUp.classList.remove("form__show");
  });