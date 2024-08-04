<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--[![LinkedIn][linkedin-shield]][linkedin-url]-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://raw.githubusercontent.com/Br1-O/bakery-store/main/assets/resources/images/imgs/logo.jpg">
    <img src="https://raw.githubusercontent.com/Br1-O/bakery-store/main/assets/resources/images/imgs/logo.png" alt="Logo" width="200" height="150" style="border-radius:15px;">
  </a>

  <h3 align="center"> Bakery Store · Panaderia artesanal </h3>

  <p align="center">
    Tienda online para una panaderia artesanal
    <br />
    <a href="https://br1-o.github.io/bakery-store"><strong> Ver sitio en producción »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenido </summary>
  <ol>
    <li>
      <a href="#about-the-project"> Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with"> Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started"> Cómo instalarlo</a>
      <ul>
        <li><a href="#prerequisites"> Pre requisitos</a></li>
        <li><a href="#installation"> Instalación </a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre este proyecto

Este proyecto se trata de un Ecommerce para una panaderia, donde el comercio objetivo pueda posicionar y vender de forma online sus productos, contactar con posibles clientes, y hacer saber sobre ellos, su labor e historia. <br><br>
Al desarrollarlo se puso el foco más que nada en la reutilización de código por medio de componentes e intentando hacerlo lo más intuitivo posible, para que todo pueda ser fácilmente modificable en el futuro. De esta forma es posible adaptar diferentes estilos, separadores y componentes a las diferentes páginas en base a los requerimientos del comercio, sin tener que realizar mayores cambios que la integración de los componentes o datos de variables fácilmente identificables.
<br><br>
Originalmente se desarrolló este proyecto bajo el marco de un trabajo integrador para el curso de Desarrollador Fullstack, brindado por [CILSA](https://www.cilsa.org/).

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>


## Desarrollado con:

Para este proyecto se usaron las siguientes técnologias, lenguajes y librerias:

#### Desarrollo en general:

* [![JavaScript][JavaScript.com]][JavaScript-url]
* [![CSS][CSS.com]][CSS-url]
* [![HTML][HTML.com]][HTML-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

#### Librerias para funcionalidades:

[![AOS][AOS.com]][AOS-url]
[![SweetAlert][SweetAlert.com]][SweetAlert-url]

#### Control de versionado y deploy de demo:

[![GitHub][GitHub.com]][GitHub-url]
[![Git][Git.com]][Git-url]
[![GitHub Pages][GitHubPages.com]][GitHubPages-url]

#### Personalmente se optó para el desarrollo de este proyecto el uso de:

[![VSCode][VSCode.com]][VSCode-url]
[![LiveServer][LiveServer.com]][LiveServer-url]

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>


## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```plaintext
Bakery/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── components/
│   │   ├── json/
│   │   ├── models/
│   │   ├── pages/
│   │   ├── routing/
│   │   ├── utils/
│   │   └── validation/
│   └── resources/
│       ├── documents/
│       └── images/
│           ├── icons/
│           └── imgs/
│               ├── billboard/
│               └── products/
└── README.md
```

* **Index.html** : 
Archivo principal de ingreso a la página. Posee openg graph y SEO meta tags en el head, así como los contenedores principales para la navbar en el header, main en el body y footer.
Tiene además los tags del CDN para librerias adicionales y un tag de script conectando al archivo de routing.js, que se encargará de la carga dinamica del contenido de la página.

* **Routing.js / dinamicRouting.js** :
Es el siguiente archivo en ser ejecutado, una vez ingresado al index.html. Se encargará de modificar los contenedores principales del index.html en base al path de la URL, siempre ignorando el #, que se le agrega para evitar conflictos en el desarrollo. Así se mostrará el contenido dinamicamente, siendo la ejecución para los paths de la siguiente forma:

```plaintext
Github Pages URL
└── index.html
    └── routing.js
        └── assets/js/pages
            ├── home (para '/')
            |    └── MAIN.js (para '/')
            ├── Product 
            |      └── MAIN.js (para '#tienda/[nombre de categoria]/[producto]')
            ├── Shop (para '#tienda')
            |  └── MAIN.js (para '#tienda/[nombre de categoria]')
            |
            ├── notAuthorized401.js (en caso de un ingreso no autorizado en un area con autentificación)
            └── notFound404.js (en caso de ingresar un path no incluido en el sistema de routing)
```

Antes de mostrar dinámicamente el contenido de las páginas, routing.js se encargará de mostrar la pantalla de carga mientras la ventana siga "on load". 
Y una vez que se haya cargado el DOM, traerá desde:
assets/js/models/utils/ProductsUtils.js

La clase utilitaria de **ProductsUtils**, y ejecutará el método **initialize()**, que se encargará de traer los datos de los productos desde el archivo de json interno y luego cargarlos en los atributos internos de la clase.
De esta forma se evita realizar una nueva petición cada vez que se requieran los datos de los productos, ya que todas las páginas traeran el contenido de productos y marquesinas desde **ProductsUtils.AllProductsList**, que anteriormente habrá realizado la petición a los json emulando la petición inicial a la API.

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>

<!-- GETTING STARTED -->
## Cómo comenzar a utilizarlo

Si se desea, se puede descargar este proyecto y usarlo de forma local siguiendo los siguientes pasos:

### Pre requisitos

No se requiere tener ningún tipo de software especial instalado, bastando con un simple navegador web. 
<br>
Aunque sí se recomienda el uso de algún IDE, programa especializado para facilitar el desarrollo y visualización de código.
<br>

### Instalación

A continuación se muestran los pasos a seguir para instalar este proyecto.

#### Usando Git

> 1. Navegar al directorio donde deseas instalar el proyecto
   ```sh
   cd /ruta/donde/deseas/instalar
   ```

> 2. Clonar el repositorio
   ```sh
   git clone https://github.com/Br1-O/bakery-store
   ```

 > 3. Navegar al directorio del proyecto
   ```sh
  cd bakery-store
   ```

> 4. Abrir el archivo index.html en tu navegador web preferido

#### Descarga manual desde Github

> 1. Descargar el archivo .zip desde GitHub: [Link de descarga](https://github.com/Br1-O/bakery-store/archive/refs/heads/main.zip)

> 2. Descomprimir el archivo .zip
   ```sh
   unzip bakery-store-main.zip
   ```

 > 3. Navegar al directorio donde fue descomprimido
   ```sh
  cd bakery-store-main
   ```
> 4. Abrir el archivo index.html en tu navegador web preferido

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

[JavaScript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

[CSS.com]: https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white&style=for-the-badge
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS

[HTML.com]: https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white&style=for-the-badge
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white&style=for-the-badge
[Bootstrap-url]: https://getbootstrap.com

[AOS.com]: https://img.shields.io/badge/AOS-000000?logo=aos&logoColor=white&style=for-the-badge
[AOS-url]: https://michalsnik.github.io/aos/

[SweetAlert.com]: https://img.shields.io/badge/SweetAlert-0078D7?logo=sweetalert&logoColor=white&style=for-the-badge
[SweetAlert-url]: https://sweetalert.js.org/

[GitHub.com]: https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge
[GitHub-url]: https://github.com/

[Git.com]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge
[Git-url]: https://git-scm.com/

[GitHubPages.com]: https://img.shields.io/badge/GitHub_Pages-222?logo=github&logoColor=white&style=for-the-badge
[GitHubPages-url]: https://pages.github.com/

[VSCode.com]: https://img.shields.io/badge/VSCode-007ACC?logo=visual-studio-code&logoColor=white&style=for-the-badge
[VSCode-url]: https://code.visualstudio.com/

[LiveServer.com]: https://img.shields.io/badge/LiveServer-4993CD?logo=visual-studio-code&logoColor=white&style=for-the-badge
[LiveServer-url]: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
