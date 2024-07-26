//default navBar
const defaultNavBar = 
`
<nav class="navbar navbar-expand-lg bg-body-tertiary w-100 h-auto fixed-top z-index-5 d-flex flex-row justify-content-between align-items-center bg-glass-effect smooth-transition">
    <div class="container-fluid">
        <a aria-label="Logo de la pagina" class="navbar-brand w-25" href="#"> 
            <img class="logo" id="logo" src="assets/resources/images/imgs/logo.jpeg" alt="logo">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around align-items-center p-2 w-75">

                <li class="nav-item">
                    <a aria-label="Sobre mi" class="nav-link" href="#sobre-mi"> Sobre mí </a>
                </li>

                <li class="nav-item">
                    <a aria-label="Formacion" class="nav-link" href="#formacion"> Formación </a>
                </li>

                <li class="nav-item">
                    <a aria-label="Formacion" class="nav-link" href="#proyectos" aria-label="Proyectos"> Proyectos </a>
                </li>

                <!--
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Mis proyectos">
                            Proyectos
                        </a>
                        <ul class="dropdown-menu bg-glass-effect">
                            <li>
                                <a class="dropdown-item" href="#"> Oshare Designs </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> Nextflix </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> PokeDex </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> Pagina Portfolio </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> Batch </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"> CRM </a>
                            </li>
                        </ul>
                    </li>
                -->

                <li class="nav-item">
                    <a class="nav-link" href="#contacto" aria-label="Contacto"> Contacto </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`

//session navBar
const sessionNavBar = `
`

//header tag
const header = document.getElementById('navContainer');

export const navBar = (isConnected = false) => {

    //change content of navBar
    header.innerHTML = defaultNavBar;

    //scroll behavior

        //elements
        const navBar = document.querySelector("nav");
        const logo = document.getElementById("logo");

        //toggle on or off compact design for navbar when scrolling
        window.addEventListener("scroll", () => {
            navBar.classList.toggle("compact-view", window.scrollY > 0);
            logo.classList.toggle("compact-view", window.scrollY > 0);
        });
}

