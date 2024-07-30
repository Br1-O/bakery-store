import { navbar } from "./navs/navBar.js";
import { ProductUtils } from "../models/utils/productUtils.js";

export const navBarCatalogueProducts = (anchor, dropdown) => {

    // ■■■■■■■■■■■■■■ Data for categories navbar ■■■■■■■■■■■■■■ //

    //menu array
    let menu = [];

    //get all main categories name for menu of categories navbar
    for (let category of (ProductUtils.mainCategoriesNameList)) {
        
        //get all products inside each main category
        let allProductsInCategory = (ProductUtils.getAllProductsInCategory(category));

        //array for anchor components of each product
        let anchorItemsForCategory = [];

        //for each product in the category push its anchor component in the array
        for (const product of allProductsInCategory) {
        
            anchorItemsForCategory.push(anchor({anchorText: product.name, anchorLink: product.link}));
        }

        //change name of category to proper category name if needed
        if (category === "casero") {
            
            category = "para hacer en casa";
        }

        //capitalize first letter of the category name
        category = category.charAt(0).toUpperCase() + category.slice(1);

        //push into the menu array the dropdown component with all the anchors for the category, the category name and the category link
        menu.push(
            dropdown(
                {
                titleCategoryText: category,
                titleCategoryLink: "#tienda/" + category,
                groupOptions: anchorItemsForCategory
                }
            )
        );
    }

    //create the navbar component with the menu array as parameter
    let nav =
    navbar(
        {
            id: "navBarCategories",
            items: menu,
            tabs: true,
            itemsPositionNavBar: "around",
            itemsPositionTextMenu: "center",
            gapNavBar: "gap-1",
            gapTextMenu: "gap-1",
            padding: "p-1",
            bgColor: "",
            textColor: "var(--font-hover-color)",
            textFont: "var(--font-main)",
            textSize: "fs-5",
            logo: "",
            sticky: false
        }
    );

    //add proper container for this specific navbar
    nav =
    `
    <nav id="navBarCategories" class="navbar navbar-expand-lg bg-body-tertiary d-flex flex-row justify-content-center align-items-center gap-2 fs-2 p-3 my-5 z-3 bg-glass-effect w-100">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarCategoriesMenu" aria-controls="navBarCategoriesMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="navBarCategoriesMenu">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    ${nav}
                </ul>
            </div>
        </div>
    </nav>
    `;

    //return navbar component
    return nav;
}