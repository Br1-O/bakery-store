// Function to render a product page w/dependency injections
const renderProductPage = async(product, userData, redirectToPage, setUserDataFromSessionData, notFoundMessage, displaySingleProductPage, btnWithIcon) => {

    //container for page content
    const content = document.getElementById("main");

    //check if product exists
    if (!product) {
        //if not display 404 page and redirect
        content.innerHTML = notFoundMessage;
        redirectToPage("", 5000);
        return;
    }else{

        //display page product's content
        await displaySingleProductPage(product, content, btnWithIcon, userData);

        //if user is logged update user's model data from session storage data
        if (userData.isSessionSet) {
            setUserDataFromSessionData(userData);
        }
    }
}

//handler to display single product page based on category and product's name
//first array are the params, the other parameters are dependency injections
export const productRouteHandler = async ([category, productName], ProductUtils, userData, redirectToPage, setUserDataFromSessionData, notFoundMessage, displaySingleProductPage, btnWithIcon) => {

    //search the product by category and name
    const product = ProductUtils.findProductByCategoryAndName(category, productName);

    //render the product's page
    await renderProductPage(product, userData, redirectToPage, setUserDataFromSessionData, notFoundMessage, displaySingleProductPage, btnWithIcon);
    //change title of the document's window
    document.title = `${product.name} · Bakery `;
    //scroll to the top of the page
    window.scrollTo({ top: 0 });
}
