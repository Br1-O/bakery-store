import { fetchInternalData } from "../../utils/fetch.js";

export class ProductUtils {

    //attributes
    static allProductsList = [];
    static totalProducts = 0;
    static mainCategoriesNameList = [];
    static allCategoriesNameList = [];

    //initialize data
    static async initialize() {
        try {
            // Fetch and store the products list
            ProductUtils.allProductsList = await ProductUtils.getAllProductsListFromDB();
            ProductUtils.totalProducts = (ProductUtils.allProductsList).length;
            ProductUtils.mainCategoriesNameList = ProductUtils.getMainCategoriesNameList();
            ProductUtils.allCategoriesNameList = ProductUtils.getAllCategoriesNameList();
        } catch (error) {
            console.error('Failed to initialize product data:', error);
        }
    }

    static getAllProductsListFromDB = async() => {

        let products = "";

        try {
            //fetch products data
            products = await fetchInternalData("assets/js/json/products-list.json", "products");
        } catch (error) {
            console.error('Failed to fetch products data:', error);
        }

        return products;
    }

    static getMainCategoriesNameList = () => {

        let categoriesList = [];

        for (const product of (ProductUtils.allProductsList)) {

            if (!(categoriesList.includes((product.categories[0])))) {
                
                categoriesList.push((product.categories[0]));
            }
        }

        return categoriesList;
    }

    static getAllCategoriesNameList = () => {

        let categoriesList = [];

        for (const product of (ProductUtils.allProductsList)) {

            for (const category of product.categories) {

                if (!(categoriesList.includes(category))) {
                    
                    categoriesList.push(category);
                }
            }
        }

        return categoriesList;
    }

    static getAllProductsInCategory = (category) => {

        //get products list from global state
        let products = ProductUtils.allProductsList;
    
        //filter products by category
        let filteredProducts = products.filter(product => product.categories.some(productCategory => productCategory === category));
    
        return filteredProducts;
    };

    static getNameLinkOfAllProductsInCategory = (category) => {

        //get products list from global state
        let products = ProductUtils.allProductsList;
    
        //filter products by category
        let filteredProducts = products.filter(product => product.categories.some(productCategory => productCategory === category));
    
        //map filtered products to array with their data
        let result = filteredProducts.map(product => {
            return {
                name: product.name,
                link: product.link
            };
        });

        return result;
    };
    
    //find product by category and name (name separated with "-" instead of blank spaces)
    static findProductByCategoryAndName = (category, name) => {

        //get products list from global state
        let products = ProductUtils.allProductsList;

        //check if any of the categories or the name matches 
        return products.find((product) => {
            return product.categories.some(productCategory => productCategory === category) 
                && product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, '-') === name;
        });
        //(normalize first to wipe special characters -> change to lowercase version -> replace the spaces with "-")
    }

    //get the X more popular products
    static getMostPopularProducts = (topX = 1) => {

        //get products list from global state
        let products = ProductUtils.allProductsList;
        
        //sort by rating
        let sortedProducts = products.sort((a, b) => b.rating - a.rating);

        //get the top X items
        const topProducts = sortedProducts.slice(0, topX);

        //return list of products ordered
        return topProducts;
    }
}