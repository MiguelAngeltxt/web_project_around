Alrededor de los EE.UU.

Este proyecto es una representación de una galería interactiva, creada como parte del sprint 7. En esta galería, los usuarios pueden explorar imágenes de diversos paisajes y editar su perfil. A continuación, se detalla la estructura, funcionalidad y configuración del proyecto.

Estructura del Proyecto

El proyecto está organizado en varios archivos y carpetas:

Archivos principales:

index.html: Estructura principal del proyecto.

index.css: Estilo de la página, ubicado en la carpeta pages.

index.js: Lógica y funcionalidades interactivas, ubicado en la carpeta scripts.

favicon.ico: Icono del sitio.

Imágenes:

Ubicadas en la carpeta images, incluyen:

Vector.png: Logo del sitio.

image.jpg: Imagen de perfil.

edit.png: Icono para editar.

add2.png: Icono para añadir o cerrar formularios.

Group.png: Icono de corazones para "me gusta".

Varias imágenes de paisajes representadas en la sección de elementos.

Funcionalidad

Perfil:

Edición de Perfil: Los usuarios pueden hacer clic en el botón de edición para abrir un formulario modal donde pueden actualizar su nombre y descripción.

Avatar de Usuario: Se muestra una imagen del usuario como avatar.

Galería:

Visualización de Imágenes: Se presenta una galería de paisajes, cada uno con su descripción.

Interacciones: Los usuarios pueden interactuar con las imágenes usando el botón de "me gusta".

Diseño Responsive:

El proyecto utiliza media queries para adaptarse a diferentes tamaños de pantalla.

Estructura del HTML

Encabezado (<header>):

Contiene el logo del proyecto.

Sección de Perfil (<section class="profile">):

Muestra el avatar, nombre, descripción y botones para editar el perfil o añadir nuevos elementos.

Galería (<section class="elements">):

Contiene una lista de paisajes con imágenes, nombres y botones interactivos.

Pie de Página (<footer>):

Incluye un mensaje de copyright.

Configuración del Proyecto

Instalación:

Clona el repositorio en tu máquina local.

git clone https://github.com/MiguelAngeltxt/web_project_around

Asegúrate de tener una estructura de carpetas como sigue:

/
|-- /images
|-- /pages
| |-- index.css
|-- /scripts
| |-- index.js
|-- index.html
|-- favicon.ico

Abrir el Proyecto:

Abre el archivo index.html en tu navegador.

Ediciones y Personalización:

Puedes modificar el archivo CSS para personalizar el diseño.

Para cambiar el contenido dinámico, edita index.js.

Publicación en GitHub Pages

Puedes acceder al proyecto publicado en GitHub Pages en el siguiente enlace:

https://miguelangeltxt.github.io/web_project_around

Características Técnicas

HTML5:

Uso de semántica moderna.

Metadatos bien definidos.

CSS3:

Diseño flexible y responsive.

Clases organizadas en BEM (Bloque-Elemento-Modificador).

JavaScript:

Funcionalidad dinámica para formularios y botones (implementada en index.js).

Créditos

Autor: Miguel Angel

Descripción del Proyecto: Proyecto de finalización del sprint 7 en TripleTen.
