//utils import
import { fetchData, fetchInternalData, deleteFetch, postFetch } from "../utils/fetch.js";
import { redirectToPage } from "../utils/redirectToPage.js";
//navBar content
import { navBarBakery } from "../components/navBarBakery.js";
//footer content
import { footer } from "../components/footers/footer.js";
//validations
import { maxLengthValidation, minLengthValidation, phoneNumberValidation, emailValidation, isAlpha, isNum, areValuesEqual, passwordValidation, nameValidation } from "../validation/utils.js";
//page not found content
import { notFoundMessage } from "../pages/notFound404.js";
//user model to control state
import { userData } from "../models/classes/user.js";
import { dinamicRouteDisplay } from "./dinamicRouting.js";
//home page content
import { homeContent } from "../pages/home/MAIN.js";
import { displaySingleProductPage } from "../pages/product/MAIN.js";
import { displayProducts } from "../pages/shop/products.js";
import { shopContent } from "../pages/shop/MAIN.js";
import { subtitle } from "../components/text/titles.js";
import { anchor } from "../components/navs/anchor.js";
import { dropdown, dropdownEventListeners } from "../components/navs/dropDown.js";
import { productCard } from "../components/cards/productCard.js";
import { formSelect } from "../components/forms/select.js";
import { btnsGroupPagination } from "../components/btns/btnsGroupPagination.js";
import { navBarCatalogueProducts } from "../components/navBarCatalogueProducts.js";
import { ProductUtils } from "../models/utils/productUtils.js";
import { productRouteHandler } from "../pages/product/utils.js";
import { setUserDataFromSessionData } from "../utils/sessionStorage.js";
import { categoryRouteHandler } from "../pages/shop/utils.js";
import { carrouselMostPopularProducts } from "../components/carrouselMostPopularProducts.js";

import { carrousel } from "../components/dataDisplayers/carrousel.js";
import { billboard } from "../components/dataDisplayers/billboard.js";
import { billboardMainPage } from "../components/billboardMainPage.js";
import { btnWithIcon } from "../components/btns/btnWithIcon.js";
import { footerBakery } from "../components/footerBakery.js";
import { imgsSwitchEffectOnHover } from "../utils/effects.js";

//define company name to use in ti
const companyName = "Bakery";

//I'm not implementing this until finishing the project, since local server is unable to redirect all petitions to my index.html without using backend server utilities

// Define your routes and corresponding templates
// const routes = {
//     "/": "<h2>Home</h2><p>Welcome to our website!</p>",
//     "/#trending-now": "<h2>Trending Products</h2><p>This is the trending products section.</p>",
//     "/#contacto": "<h2>Contact Us</h2><p>Feel free to reach out to us!</p>"
//   };
  
  // Function to update content based on current URL
//   const updateContent = () => {
//     const path = window.location.pathname;
//     const content = routes[path] || "<h2>¡ Pagina no encontrada!</h2><p>La página que buscas no existe :(</p>";
//     document.getElementById("page-container").innerHTML = content;
//   }

//provitional hash based routing system until finishing project, then we switch to the routing based on raw URL paths

//Update content based on hash
export const updateContent = async() => {

    //get the url
    const hash = window.location.hash.substring(1); // Remove leading "#"

    //get the section ID from the hash
    const sectionId = window.location.hash.substring(1); // Remove the leading '#'

    //container for page content
    const content = document.getElementById("main");
    //section with the corresponding ID
    const section = document.getElementById(sectionId);

    //route parameters
    const routeParams = hash.split('/').filter(param => param);

    //default footer for all pages
    const defaultFooter = footerBakery(footer);

    //■■■■■■■■■■■■■■■■■■■■ hash system routing ■■■■■■■■■■■■■■■■■■■■//

    if (section) {
        //scroll to the section with that id if it exist
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section

    }else{
        // Change page content based on hash
        switch(hash) {

            //home page
            case '':

                //update title attribute of page
                document.title =  ` ${companyName} · Panaderia artesanal `;

                //include proper navbar
                navBarBakery(userData.isSessionSet);

                //update home content
                content.innerHTML = homeContent(ProductUtils, billboard, billboardMainPage, carrousel, carrouselMostPopularProducts);

                //include footer
                defaultFooter;

            break;

            //store page
            case 'tienda':
            {
                //update title attribute of page
                document.title =  ` ${companyName} · Tienda Online `;

                //include proper navbar
                navBarBakery(userData.isSessionSet);

                //fetch to shop data
                let products= ProductUtils.allProductsList; 

                //display products template
                let productsTemplate =                 
                displayProducts(products, productCard);

                //update page content
                content.innerHTML = shopContent(
                    subtitle,
                    anchor,
                    dropdown,
                    navBarCatalogueProducts,
                    formSelect,
                    productsTemplate,
                    btnsGroupPagination
                );

                // //products container
                // let productsContainer = document.createElement("div");
                // productsContainer.id = "productsContainer";
                // productsContainer.className = "row d-flex justify-content-center align-items-center overflow-hidden gap-3 gap-md-5 w-75 m-auto py-5";
                // //append into main container
                // content.appendChild(productsContainer);

                //include footer
                defaultFooter;
            }
            break;
            
            //products page
            //case 'menu':

                //update title attribute of page
                //document.title =  ` ${companyName} · Catalogo`;

                //include proper navbar
                //navBarBakery(userData.isSessionSet);

                //content.innerHTML = "";

                //include footer
                //footerBakery(footer);
            //break;

            //dinamic routes and not found page
            default:

                //■■■■■■■■■■■■■■■■■■■■ Category page dinamic URL rendering ■■■■■■■■■■■■■■■■■■■■//

                // Dynamic URL matching with regular expression

                    const tiendaCategoriaPattern = /^tienda\/([^\/]+)$/;

                // Get category name from path
                    let category = routeParams[1];

                //URL has to be in the form: tienda/category

                // Check if pattern for dinamic route of category page is match (w/ injected dependencies into productRouteHandler)

                const categoryPageRouteHandler = await dinamicRouteDisplay(hash, tiendaCategoriaPattern, async (category) => {

                    await categoryRouteHandler(
                        category,
                        ProductUtils,
                        userData,
                        redirectToPage,
                        setUserDataFromSessionData,
                        notFoundMessage,
                        shopContent,
                        subtitle,
                        anchor,
                        dropdown,
                        navBarCatalogueProducts,
                        formSelect,
                        displayProducts,
                        btnsGroupPagination,
                        productCard
                    );
                });

                //■■■■■■■■■■■■■■■■■■■■ Product page dinamic URL rendering ■■■■■■■■■■■■■■■■■■■■//

                // Dynamic URL matching with regular expression

                    const tiendaCategoriaProductoPattern = /^tienda\/([^\/]+)\/([^\/]+)$/;

                //URL has to be in the form: tienda/category/name-of-product

                // Check if pattern for dinamic route of product's page is match (w/ injected dependencies into productRouteHandler)

                    const singleProductPageRouteHandler = await dinamicRouteDisplay(hash, tiendaCategoriaProductoPattern, async (routeParams) => {

                        await productRouteHandler(
                            routeParams,
                            ProductUtils,
                            userData,
                            redirectToPage,
                            setUserDataFromSessionData,
                            notFoundMessage,
                            displaySingleProductPage,
                            btnWithIcon
                        );
                    });

                //■■■■■■■■■■■■■■■■■■■■ if dinamic routes are not matched display not found page ■■■■■■■■■■■■■■■■■■■■//

                if (singleProductPageRouteHandler) {

                }else if(categoryPageRouteHandler){

                }else{
                    
                    //update title attribute of page
                    document.title =  ` ${companyName} · Not Found 404`;

                    //display not found default page
                    content.innerHTML = notFoundMessage;
                    redirectToPage("", 3000);
                }

                //include proper navbar
                navBarBakery(userData.isSessionSet);

                //include footer
                defaultFooter;
                
            break;
        }

        // Scroll to the top of the page once content is changed
        window.scrollTo({ top: 0});

        //init Animation on Scroll library
        AOS.init();

        //manually initialize bootstrap elements to avoid conflict on dinamic rendering of elements

        //carousels
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            new bootstrap.Carousel(carousel);
        });

        //Event Listeners for dinamic elements
        dropdownEventListeners();

        //Effects for elements
        imgsSwitchEffectOnHover();
    }
}

//handle popstate event (back/forward navigation)
window.addEventListener("popstate", updateContent);

//update content when the page loads or hash changes
window.addEventListener('hashchange', updateContent);

//update content when the page loads or hash changes
document.addEventListener("DOMContentLoaded", () => {

    //update title attribute of loading page
    document.title =  ` ${companyName} · Loading...`;

    const loadingScreen = document.getElementById("loading-overlay");
    const body = document.querySelector("body");

    //display loading screen on DOM loading start
    loadingScreen.classList.add("flex");
    body.style.overflowY = "hidden";

    window.onload = async() => {
        
        //display content when the window if fully loaded
        loadingScreen.classList.remove("flex");
        loadingScreen.classList.add("d-none");
        body.style.overflowY = "scroll";
            
        //initialize productUtils to manage global state of products list
        await ProductUtils.initialize(); 

        //update content based on the URL
        updateContent();
    }
});