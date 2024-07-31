// Function to render a product page w/dependency injections
const renderCategoryPage = async(categoryProductsList, userData, redirectToPage, setUserDataFromSessionData, notFoundMessage, displayProducts, productCard) => {

    //container for page content
    const categoryContainer = document.getElementById("container-trending-products");

    //check if product exists
    if (!categoryProductsList) {
        //if not display 404 page and redirect
        categoryContainer.innerHTML = notFoundMessage;
        redirectToPage("", 5000);
        return;
    }else{

        //container for page content
        const categoryContainer = document.getElementById("container-trending-products");

        //display products into container
        displayProducts(categoryProductsList, categoryContainer, productCard);

        //if user is logged update user's model data from session storage data
        if (userData.isSessionSet) {
            setUserDataFromSessionData(userData);
        }
    }
}

//handler to display single product page based on category and product's name
//first array are the params, the other parameters are dependency injections
export const categoryRouteHandler = async (category, ProductUtils, userData, redirectToPage, setUserDataFromSessionData, notFoundMessage, displayProducts, productCard) => {

    //get all products in the category
    const categoryProductsList = ProductUtils.getAllProductsInCategory(category[0]);    

    //render the category's page
    await renderCategoryPage(categoryProductsList, userData, redirectToPage, setUserDataFromSessionData, notFoundMessage, displayProducts, productCard);

    //change category name to capitalize first letter and change word if needed
    let formatedCategoryName = category[0][0].toUpperCase() + category[0].slice(1);

    if(formatedCategoryName === "Casero"){
        formatedCategoryName = "Para casa";
    }

    //change title of the document's window
    document.title = `${formatedCategoryName} · Bakery `;
    //scroll to the top of the page
    window.scrollTo({ top: 0 });
}
