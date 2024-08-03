export const displaySingleProductPage = async(product, container, btnWithIcon, userData = {}) => {

    //final template storage
    let template = "";
    let tagsTemplate = "";
    let ratingTemplate = "";

    // ■■■■■ add product's info into literal template ■■■■■ //

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

        // ■■■■■ set tags template ■■■■■ //
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

        // ■■■■■ set category with mayus on first letter ■■■■■ //
        let categoryMayus = (((product.categories[0]).charAt(0)).toUpperCase()) + (product.categories[0]).slice(1);

        //set preview images template
        let previewImagesColumnTemplate = "";

        (product.image).forEach(image => {

            previewImagesColumnTemplate += 
            `
                <img src="${image}" class="preview-thumbnail">
            `;
        
        });

        // ■■■■■ template for ingredients ■■■■■ //
        let ingredients = "";

        for (const ingredient of (product.ingredients)) {
            
            ingredients += "· " + ingredient + "<br>";
        }

        // ■■■■■ template for dietary specifications ■■■■■ //
        let dietarySpecifications = "";

        if (product.isCeliacOk) {

            dietarySpecifications +=
            "<span class='d-block'> <i class='bx bx-check-square'> </i> Libre de gluten <span>";
        }

        if (product.isVegan) {

            dietarySpecifications +=
            "<span class='d-block'> <i class='bx bx bx-leaf'></i> Vegano <span>";
        }

        if (product.isNutFree) {

            dietarySpecifications +=
            "<span class='d-block'> <i class='bx bx-check-square'></i> Libre de frutos secos <span>";
        }

        // ■■■■■ template for flavour options ■■■■■ //
        let templateFlavourOptions = "";

        if ((product.flavours).length > 0) {

            templateFlavourOptions = 
            `
            <h4> Sabores/Rellenos: </h4>
            <p id="product-page-description" class="bg-glass-effect-darker text-wrap mt-0" aria-label="sabores/rellenos disponibles"> 
            `;    
            
            for (const flavour of (product.flavours)) {
                
                templateFlavourOptions +=
                `
                    ${flavour} <br>
                `;
            }

            templateFlavourOptions += 
            `
            </p>
            `;
        }

        // ■■■■■ add filled product's template into variable ■■■■■ //
        template = `
        
            <div id="product-page-container" class="row d-flex flex-column pb-2 justify-content-center align-items-center bg-glass-effect-darker mb-2 py-xxl-5" data-product="${product.id}" data-aos="fade-up" data-aos-offset="50" data-aos-duration="2000">
        
                <section id="product-page-info"  class="d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-center align-items-md-start">
                    
                    <article id="product-images" class="d-flex flex-row justify-content-center align-items-first-baseline col-10 col-md-10 col-xl-10">

                        <div id="product-images-column""> 
                            ${previewImagesColumnTemplate}
                        </div>

                        <div id="product-images-selected"> 
                        
                            <a href=${product.image[0]} target="_blank">
                                <img id="product-page-image" class="preview-image img-fluid" src= ${product.image[0]} data-src=${product.image[0]} loading="lazy" alt="${product.name}">
                            </a>

                        </div>

                    </article>

                    <article id="product-details" class="d-flex flex-column col-10 col-md-6 col-lg-5 col-xl-4 flex-wrap overflow-hidden">

                        <div class="inline-navigation-bar">
                            <p> 

                                <a href="#tienda">
                                    Tienda
                                </a>

                                <span style="color=var(--logo-bg-color)"> / <span>

                                <a href="#tienda/${product.categories[0]}">
                                    ${categoryMayus}
                                </a>

                                <span style="color=var(--logo-bg-color)"> / <span>

                                <span> ${product.name} </span>

                            </p>
                        </div>

                        <h2> ${product.name} </h2>

                        <p id="product-page-description" class="bg-glass-effect-darker text-wrap"> 
                            ${product["description-cover"]} 
                        </p>

                        <h4> Ingredientes </h4>

                        <p id="product-page-description" class="bg-glass-effect-darker text-wrap mt-0" aria-label="ingredientes empleados"> 
                            ${ingredients} 
                        </p>

                        ${templateFlavourOptions}

                        <p id="product-page-description" class="text-wrap mt-0" style="box-shadow:none;" aria-label="especificaciones de veganismo, gluten y frutos secos"> 
                            ${dietarySpecifications} 
                        </p>

                        <h4 class="align-self-end" aria-label="precio del producto"> $${product.price} </h4>

                        <div class="flex col">

                            <p id="product-add-to-cart-display-quantity"></p>

                            <div id="product-add-to-cart-container" class="w-75 w-md-50 py-1">
                                    
                                <div class="input-group d-flex flex-row justify-content-around align-items-center">
                                    <input type="number" class="form-control w-25 h-100" id="numberInput" value="0" min="0">

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

    // ■■■■■ set product page template into container ■■■■■ //
    container.innerHTML = template;


    // ■■■■■ product image toggle with thumbnail images ■■■■■ //
    let previewThumbnails = document.getElementsByClassName("preview-thumbnail");
    let previewImage = document.querySelector(".preview-image");

    for (const thumbnail of previewThumbnails) {

        let thumbnailSrc = thumbnail.src;

        //change the source of the preview image to the thumbnail's source
        thumbnail.addEventListener("click", () => {
            previewImage.src = thumbnailSrc;
            //change the href of the a so it opens the new image when clicked
            (previewImage.parentElement).href = thumbnailSrc;
        });
    }
}