# Alrededor de los EE.UU.

## Descripción del Proyecto y su Funcionalidad

"Alrededor de los EE.UU." es una aplicación web interactiva que simula una red social de intercambio de imágenes. Permite a los usuarios visualizar una galería de imágenes preexistente, así como añadir nuevas tarjetas con sus propias imágenes y descripciones. Además, los usuarios pueden interactuar con las imágenes existentes dándoles "me gusta" y eliminándolas. La aplicación también incluye la funcionalidad de edición de perfil, permitiendo a los usuarios actualizar su nombre y descripción.

Las características principales incluyen:

* **Visualización de Galería**: Muestra una colección inicial de tarjetas con imágenes y títulos.
* **Añadir Nuevas Tarjetas**: Un formulario intuitivo permite a los usuarios subir nuevas imágenes a la galería, especificando un título y un enlace a la imagen.
* **Funcionalidad "Me gusta"**: Cada tarjeta cuenta con un botón de "me gusta" que permite a los usuarios indicar su aprobación por una imagen. Al hacer clic, el ícono del corazón cambia para reflejar el estado de "me gusta" (o "no me gusta").
* **Eliminar Tarjetas**: Los usuarios pueden eliminar tarjetas de la galería si así lo desean.
* **Edición de Perfil**: Un formulario de edición de perfil permite a los usuarios actualizar su nombre y su descripción en la página.
* **Validación de Formularios**: Todos los formularios de la aplicación (añadir tarjeta, editar perfil) cuentan con validación en tiempo real para asegurar que los datos ingresados sean correctos antes de ser enviados.
* **Popups Modales**: La interacción con la aplicación se realiza a través de ventanas emergentes modales para la edición de perfil, la adición de nuevas tarjetas y la visualización ampliada de imágenes.
* **Navegación Intuitiva**: Cerrar los popups es posible haciendo clic en el botón de cerrar, presionando la tecla `Escape` o haciendo clic en el overlay.

## Tecnologías y Técnicas Utilizadas

Este proyecto está construido principalmente con las siguientes tecnologías y técnicas:

* **HTML5**: Para la estructura semántica y el contenido de la página web.
* **CSS3**: Para el diseño, estilo y responsividad de la interfaz de usuario, incluyendo el uso de Flexbox y Grid para un diseño adaptable a diferentes tamaños de pantalla.
* **JavaScript ES6+**: Para toda la lógica interactiva del lado del cliente. Se ha hecho un fuerte énfasis en la **Programación Orientada a Objetos (POO)** y en el uso de **Clases** para estructurar el código de manera modular y reutilizable.

### Principios de Diseño de Software

Se ha implementado un enfoque de **Acoplamiento Débil** en el diseño del código JavaScript. Esto se logra mediante:

* **Separación de Responsabilidades**: Cada clase (ej. `Card`, `Popup`, `FormValidator`, `UserInfo`, `Section`) tiene una única responsabilidad bien definida, lo que facilita su mantenimiento y comprensión.
* **Inyección de Dependencias**: Las clases reciben las dependencias que necesitan (por ejemplo, funciones de callback o selectores de CSS) a través de sus constructores, en lugar de crearlas internamente o depender de variables globales. Esto permite que las clases sean más independientes y reutilizables.
* **Manejo de Eventos Delegado**: En lugar de que una clase conozca los detalles internos de otra, se utilizan funciones de devolución de llamada (`callbacks`) para comunicar eventos entre ellas. Por ejemplo, la clase `Card` notifica a un manejador externo (definido en `index.js`) cuando se hace clic en una imagen o en el botón de "Me gusta", en lugar de abrir directamente un popup o modificar elementos de otras partes de la interfaz.

### Estructura del Proyecto

El código JavaScript está organizado en módulos para una mejor gestión y escalabilidad:

* `index.js`: El archivo principal que inicializa la aplicación, coordina las instancias de las diferentes clases y maneja los event listeners globales.
* `Card.js`: Clase encargada de crear y gestionar la lógica de cada tarjeta individual de la galería, incluyendo la funcionalidad de "Me gusta" y eliminar.
* `FormValidator.js`: Clase responsable de la lógica de validación de los formularios.
* `Popup.js`: Clase base para todos los popups modales, manejando la apertura, cierre y los event listeners comunes (escape, clic en cerrar).
* `PopupWithForm.js`: Extiende `Popup` para manejar popups que contienen formularios, incluyendo la recolección de datos de entrada y el envío del formulario.
* `PopupWithImage.js`: Extiende `Popup` para mostrar imágenes ampliadas en un popup.
* `Section.js`: Clase para renderizar y gestionar secciones de elementos dinámicos (como las tarjetas de la galería).
* `UserInfo.js`: Clase que gestiona la información del usuario mostrada en el perfil.
* `utils.js`: Contiene variables y funciones de utilidad globales, como la configuración de validación.

Este enfoque modular y el uso de principios de acoplamiento débil aseguran que el código sea robusto, fácil de depurar y escalable para futuras mejoras.
