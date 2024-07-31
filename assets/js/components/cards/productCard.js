import { btnWithIcon } from "../btns/btnWithIcon.js";

export const productCard = (
    product = 
    {
        id:"",
        name: "",
        description: "",
        price: "",
        link: "",
        ariaLabel: "",
        img: [],
        imgAltText: ""
    }
) => {

    let card = 
    `
    <div id="${product.id}" class="card product-card col-11 col-md-4 col-lg-3 p-0 bg-glass-effect" aria-label="${product.ariaLabel}" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">

        <div class="card-body container-product-card-title d-flex flex-column justify-content-center align-items-start flex-wrap">
            <a class="text-decoration-none card-title align-self-center fw-bold fs-5" href="${product.link}">
                <h5> ${product.name} </h5>
            </a>
        </div>

        <div class="card-image-container h-75 w-100">
            <a href="${product.link}">
                <img id="product-img-${product.id}" class="card-img-top img-fluid product-image" alt="${product.imgAltText}" src= ${product.img[0]} src2= ${product.img[1] ? product.img[1] : "none"} data-src=${product.img[0]} loading="lazy" alt="${product.name}">
            </a>
        </div>

        <div class="card-body d-flex flex-column justify-content-center align-items-start gap-2 flex-wrap">

            <p class="card-text"> ${product.description} </p>

            <h5 class="card-title align-self-center fw-bold mt-2"> $ ${product.price} </h5>

            <div class="input-group d-flex flex-row justify-content-around align-items-center h-content">
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
    `;

    return card;
};