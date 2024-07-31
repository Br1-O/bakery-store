
export const carrouselMostPopularProducts = (ProductUtils, carrousel) => {

    //list of most popular products
    let mostPopularProducts = ProductUtils.getMostPopularProducts(5);

    let objectForCarrousel = {};
    let arrayForCarrousel = [];

    console.log(mostPopularProducts);

    //create body for carrousel
    for (const product of mostPopularProducts) {
        
        objectForCarrousel = {
            img: product.image[0],
            tags: [product.categories],
            h: product.name,
            p: product["description-cover"],
            links: [{anchorLink: product.link, anchorText: ""}]
        }

        arrayForCarrousel.push(objectForCarrousel);
    }

    let carrouselmostPopularProducts = 
    carrousel( "carousel-projects", arrayForCarrousel);
    
    return carrouselmostPopularProducts;
}

