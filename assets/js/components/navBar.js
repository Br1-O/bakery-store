//default navBar
const defaultNavBar =
    `
<nav class="navbar navbar-expand-lg bg-body-tertiary w-100 h-auto fixed-top z-index-5 d-flex flex-row justify-content-center align-items-center bg-glass-effect smooth-transition">
    <div class="container-fluid">

       <a id="logoMenu" aria-label="Logo de la pagina" class="navbar-brand w-25 d-none" href="#"> 
            <img class="logo" id="logo" src="assets/resources/images/imgs/logo.jpeg" alt="logo">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-around align-items-center p-2 w-75 mx-auto">
            
                <li class="nav-item">
                    <a aria-label="home" class="nav-link" href="#"> Inicio </a>
                </li>

                <li class="nav-item">
                    <a aria-label="bakery" class="nav-link" href="#tienda"> Tienda </a>
                </li>
            
                <li class="nav-item">
                    <a aria-label="Menu" class="nav-link" href="#menu" aria-label="menu"> Menú </a>
                </li>

                <li id="logoMenu1" class="nav-item">
                    <a aria-label="Logo de la pagina" class="navbar-brand w-25" href="#"> 
                        <img class="logo" id="logo" src="assets/resources/images/imgs/logo.jpeg" alt="logo">
                    </a>
                </li>      

                <li class="nav-item">
                    <a class="nav-link" href="#recetas" aria-label="recetas"> Recetas </a>
                </li>     
                
                <li class="nav-item">
                    <a class="nav-link" href="#contacto" aria-label="Contacto"> Contacto </a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="/" aria-label="facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path>
                        </svg>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" aria-label="instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                        <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                        </svg> 
                    </a>
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

export const navBar = ( isConnected = false ) =>
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

