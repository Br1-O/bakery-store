//default navBar
const defaultNavBar =
    `
<nav class="navbar navbar-expand-lg bg-body-tertiary w-100 h-auto fixed-top z-index-5 d-flex flex-row justify-content-center align-items-center pb-1 bg-glass-effect smooth-transition">
    <div class="container-fluid">

       <a id="logoMenu" aria-label="Logo de la pagina" class="navbar-brand w-25 d-none" href="#"> 
            <img class="logo" id="logo" src="assets/resources/images/imgs/logo.png" alt="logo">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-around align-items-center p-2 w-75 mx-auto">
            
                <li class="nav-item">
                    <a aria-label="inicio" class="nav-link" href="#"> Inicio </a>
                </li>

                <li class="nav-item">
                    <a aria-label="tienda" class="nav-link" href="#tienda"> Tienda </a>
                </li>
            
                <li class="nav-item">
                    <a aria-label="Menu" class="nav-link" href="#menu" aria-label="menu"> Menú </a>
                </li>

                <li id="logoMenu1" class="nav-item">
                    <a aria-label="Logo de la pagina" class="navbar-brand" href="#"> 
                        <img class="logo" id="main-logo" src="assets/resources/images/imgs/logo.png" alt="logo">
                    </a>
                </li>      

                <li class="nav-item">
                    <a class="nav-link" href="#recetas" aria-label="recetas"> Recetas </a>
                </li> 
                
                <li class="nav-item">
                    <a class="nav-link" href="#nosotros" aria-label="recetas"> Nosotros </a>
                </li>     
                
                <li class="nav-item">
                    <a class="nav-link" href="#contacto" aria-label="contacto"> Contacto </a>
                </li>

            </ul>
        </div>
    </div>
</nav>
<style>
    @media (min-width: 767px) {
        #logoMenu{
        display: none;
        }
        #logoMenu1{
        display: flex !important;
        }
    }
    @media (max-width: 769px){
        #logoMenu{
        display: flex !important;
        }
        #logoMenu1{
        display: none;
        }
    }
</style>
`

//session navBar
const sessionNavBar = `
`

//header tag
const header = document.getElementById( 'navContainer' );

export const navBarBakery = ( isConnected = false ) =>
{

    //change content of navBar
    header.innerHTML = defaultNavBar;

    //scroll behavior

    //elements
    const navBar = document.querySelector( "nav" );
    const logo = document.getElementById( "logo" );
    const navButton = document.querySelector( "navbar-toggler" )
    const logoMenu = document.getElementById("logoMenu")

    //toggle on or off compact design for navbar when scrolling
    window.addEventListener( "scroll", () =>
    {
        navBar.classList.toggle( "compact-view", window.scrollY > 0 );
        logo.classList.toggle( "compact-view", window.scrollY > 0 );
    } );

}

