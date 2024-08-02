export const displaySingleProductPage = async(product, container, btnWithIcon, userData = {}) => {

    //final template storage
    let template = "";
    let tagsTemplate = "";
    let ratingTemplate = "";

    //add product's info into literal template

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

        //set category with mayus on first letter
        let categoryMayus = (((product.categories[0]).charAt(0)).toUpperCase()) + (product.categories[0]).slice(1);

        //set preview images template
        let previewImagesColumnTemplate = "";

        (product.image).forEach(image => {

            previewImagesColumnTemplate += 
            `
                <img src="${image}" class="preview-thumbnail">
            `;
        
        });

        //template for sizes options
        let templateSizesOption = "";

        //template for colors options
        let templateColorsOption = "";

        //add filled product's template into variable
        template = `
        
            <div id="product-page-container" class="row d-flex flex-column mt-5 pb-5" data-product="${product.id}" data-aos="fade-up" data-aos-offset="50" data-aos-duration="2000">
        
                <section id="product-page-info"  class="d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-center align-items-md-center">
                    
                    <article id="product-images" class="col-5">

                        <div id="product-images-column"> 
                            ${previewImagesColumnTemplate}
                        </div>

                        <div id="product-images-selected"> 
                        
                            <a href=${product.image[0]} target="_blank">
                                <img id="product-page-image" class="preview-image" src= ${product.image[0]} data-src=${product.image[0]} loading="lazy" alt="${product.name}">
                            </a>

                        </div>

                    </article>

                    <article id="product-details" class="d-flex flex-col col-7">

                        <div class="inline-navigation-bar">
                            <p> 

                                <a href="#tienda">
                                    Tienda / 
                                </a>

                                <a href="#tienda/${product.categories[0]}">
                                    ${categoryMayus} / 
                                </a>

                                <span> ${product.name} </span>

                            </p>
                        </div>

                        <h2> ${product.name} </h2>

                        <h4> $${product.price} </h4>

                        <p id="product-page-description"> ${product["description-cover"]} </p>

                        <p id="product-page-description"> Ingredientes: ${product.ingredients} </p>



                        <div class="flex col">

                            <p id="product-add-to-cart-display-quantity"></p>

                            <div id="product-add-to-cart-container">
                                    
                            <div class="input-group d-flex flex-row justify-content-around align-items-center h-content">
                                <input type="number" class="form-control w-25 h-75" id="numberInput" value="0" min="0">

                                ${btnWithIcon(
                                    {
                                        id: "btn-add-to-card",
                                        text: "Agregar a carrito"
                                    }
                                )}
                            </div>

                            </div>
                        
                        </div>

                        <!-- <div class="product-container-favs-rating">
                            <div class="product-favorite">
                                <span> Añadir a favoritos </span> ${product.favorite ? "<i class='bx bxs-heart'></i>" :  "<i class='bx bx-heart'></i>" }
                            </div>
                            
                            <div class="product-rating">
                                <span> Valoración: </span> ${ratingTemplate}
                            </div>
                        </div> -->

                    </article>

                </section>
        
            </div>
    
        `;

    //set product page template into container
    container.innerHTML = template;
}