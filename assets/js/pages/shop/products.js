//display content of products json into container
export const displayProducts = (productList, container, productCard) => {

    //final template storage
    let template = "";
    let tagsTemplate = "";
    let ratingTemplate = "";

    //add each product's info into literal template
    productList.forEach((product) => {

        //set rating template
        switch (parseFloat(product.rating)) {
            
            case 5:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star' ></i>`
                break;
            
            case 4.5:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half' ></i>`
                break;        
            
            case 4:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>`
                break;       
            
            case 3.5:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>`
                break;        
            
            case 3:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>`
                break;

            case 2.5:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>`
                break;

            case 2:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>`
                break;

            case 1.5:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bxs-star-half'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>`
                break;

            case 1:
                ratingTemplate = 
                `<i class='bx bxs-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star-half'></i>`
                break;

            case 0.5:
                ratingTemplate = 
                `<i class='bx bxs-star-half'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>`
                break;

            default:
                ratingTemplate = 
                `<i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star'></i>
                <i class='bx bx-star-half'></i>`
                break;
        }

        let tagColor = "";

        //set tags template
        (product.tags).forEach(tag => {

            //set proper bg color of tag
            switch (tag) {
                case "Nuevo":
                    tagColor="--tag-color-new";
                    break;
                case "Oferta":
                    tagColor="--tag-color-discount";
                    break;
                case "Oferta especial":
                    tagColor="--tag-color-special";
                    break;
                default:
                    tagColor="white";
                    break;
            }

            tagsTemplate += `<a href="#tienda/productos/${(tag).toLowerCase()}">
                                <span class="product-tag" style="background-color:var(${tagColor})">
                                    <h5> ${tag} </h5>
                                </span>
                            </a>`;
        });

        //add filled product's template into variable
        template += 
        `
        ${productCard(
            {
                id: product.id,
                name: product.name,
                description: product["description-cover"],
                price: product.price,
                link: product.link,
                ariaLabel: product.name,
                img: product.image,
                imgAltText: product.name
            }
        )}
        `;

        //clean tags variable for new iteration
        tagsTemplate = "";
    });

    //set container's content as template
    container.innerHTML = template;

    //get all imgs of products
    const productImgs = document.getElementsByClassName("product-image");

    // Convert HTMLCollection to array
    const productImgsArray = Array.from(productImgs);

    //event on hover of image to change source from image1 to image2
    productImgsArray.forEach((image) => {
        
        let source1 = image.getAttribute('src');
        let source2 = image.getAttribute('src2');

        if (image.getAttribute('src2') != "none") {

            image.addEventListener("mouseover", () => { 
                setTimeout(() => {
                    image.setAttribute('src', source2);
                    image.setAttribute('src2', source1);
                }, 100);
            });

            image.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        image.setAttribute('src', source1);
                        image.setAttribute('src2', source2);
                    }, 100);
            });
        } 
    });

}
