//utils import
import { fetchData, fetchInternalData, deleteFetch, postFetch } from "../utils/fetch.js";
import { redirectToPage } from "../utils/redirectToPage.js";
//navBar content
import { navBar } from "../components/navBar.js";
//footer content
import { footer } from "../components/footer.js";
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
import { findProductByCategoryAndName } from "../utils/products.js";
import { shopContent } from "../pages/shop/MAIN.js";
import { subtitle } from "../components/text/titles.js";
import { anchor } from "../components/navs/anchor.js";
import { dropdown } from "../components/navs/dropDown.js";
import { navbar } from "../components/navs/navBar.js";
import { productCard } from "../components/cards/productCard.js";
import { formSelect } from "../components/forms/select.js";


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
    
    //fetch product data
    let productsList = await fetchInternalData("assets/js/json/products-list.json", "products");


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
                document.title =  ` Bakery · Panaderia artesanal `;

                //include proper navbar
                navBar(userData.isSessionSet);

                //update home content
                content.innerHTML = homeContent;

                //include footer
                footer(
                    true,
                    {
                        logo: "",
                        logoAltText: "",
                        socialMediaLinks: [
                            {
                                iconClass: "bx bxl-facebook",
                                link: "https://www.linkedin.com/in/bortuno",
                                ariaLabel: "LinkedIn"
                            },
                            {
                                iconClass: "bx bxl-instagram",
                                link: "https://github.com/Br1-O?tab=repositories",
                                ariaLabel: "Github"
                            },
                            {
                                iconClass: "bx bxl-twitter",
                                link: "https://wa.me/5491112345678",
                                ariaLabel: "Whatsapp"
                            }
                        ],
                        columns:
                        [
                            {
                                title: "",
                                links:
                                [
                                    {
                                        anchorLink: "",
                                        anchorText: "Privace Policy"
                                    },
                                    {
                                        anchorLink: "",
                                        anchorText: "Items & Conditions"
                                    },
                                    {
                                        anchorLink: "",
                                        anchorText: "Cookie Policy"
                                    }
                                ]
                            },
                            {
                                title: "",
                                links:
                                [
                                    {
                                        anchorLink: "",
                                        anchorText: "About"
                                    },
                                    {
                                        anchorLink: "",
                                        anchorText: "Menu"
                                    },
                                    {
                                        anchorLink: "",
                                        anchorText: "Delivery"
                                    }
                                ]
                            },
                            {
                                title: "",
                                links:
                                [
                                    {
                                        anchorLink: "",
                                        anchorText: "Gallery"
                                    },
                                    {
                                        anchorLink: "",
                                        anchorText: "Contact"
                                    }
                                ]
                            }
                        ]
                    
                    }                    
                );

            break;

            //store page
            case 'tienda':

                //update title attribute of page
                document.title =  ` Bakery · Shop Online `;

                //include proper navbar
                navBar(userData.isSessionSet);

                //update page content
                content.innerHTML = shopContent(
                    subtitle,
                    anchor,
                    dropdown,
                    navbar,
                    formSelect
                );

                //products container
                const shopContainerTrendingProducts = document.getElementById("container-trending-products");

                //fetch to shop data
                const shopFetchUtils = async () => {
                    let products= await fetchInternalData("assets/js/json/products-list.json", "products"); 

                    displayProducts(products, shopContainerTrendingProducts, productCard);
                }

                //apply fetch to shop data
                shopFetchUtils();
              
            break;
            
            //products page
            case 'productos':

                //update title attribute of page
                document.title =  ` Bakery · Catalogo`;

                //include proper navbar
                navBar(userData.isSessionSet);

                content.innerHTML = "";

                //include footer
                footer();
            break;

            //dinamic routes and not found page
            default:

                //■■■■■■■■■■■■■■■■■■■■ Product page dinamic URL rendering ■■■■■■■■■■■■■■■■■■■■//

                // Dynamic URL matching with regular expression

                    const tiendaProductoPattern = /^tienda\/producto\/([^\/]+)\/([^\/]+)$/;

                //URL has to be in the form: tienda/producto/category/name-of-product

                // Check if pattern for dinamic route of product's page is match (w/ injected dependencies into productRouteHandler)

                    const singleProductPageRouteHandler = await dinamicRouteDisplay(hash, tiendaProductoPattern, async (routeParams) => {
                        await productRouteHandler(
                            routeParams,
                            findProductByCategoryAndName,
                            userData,
                            redirectToPage,
                            setUserDataFromSessionData,
                            notFoundMessage,
                            displaySingleProductPage
                        );
                    });

                //■■■■■■■■■■■■■■■■■■■■ if dinamic routes are not matched display not found page ■■■■■■■■■■■■■■■■■■■■//

                if (singleProductPageRouteHandler) {

                }else{
                    //update title attribute of page
                    document.title =  `Oshare Designs · Not Found 404`;

                    //display not found default page
                    content.innerHTML = notFoundMessage;
                    redirectToPage("", 3000);
                }

                //include proper navbar
                navBar(userData.isSessionSet);
                
            break;
        }

        // Scroll to the top of the page once content is changed
        window.scrollTo({ top: 0});

        //init Animation on Scroll library
        AOS.init();
    }
}

//handle popstate event (back/forward navigation)
window.addEventListener("popstate", updateContent);

//update content when the page loads or hash changes
window.addEventListener('hashchange', updateContent);

//update content when the page loads or hash changes
document.addEventListener("DOMContentLoaded", () => {

    //update title attribute of loading page
    document.title =  ` · Loading...`;

    const loadingScreen = document.getElementById("loading-overlay");
    const body = document.querySelector("body");

    //display loading screen on DOM loading start
    loadingScreen.classList.add("flex");
    body.style.overflowY = "hidden";

    window.onload = () => {
        
        //display content when the window if fully loaded
        loadingScreen.classList.remove("flex");
        loadingScreen.classList.add("d-none");
        body.style.overflowY = "scroll";

        //update content based on the URL
        updateContent();
    }
});