import { subtitle } from "../../components/text/titles.js";


export const homeContent = (ProductUtils, billboard, billboardMainPage, carrousel, carrouselMostPopularProducts) => {

    let homeContent =

    `
    <section id="billboard" class="position-relative d-flex flex-column justify-content-center align-items-center my-3">

        ${billboardMainPage(billboard)}

    </section>

    <section id="prod-destacados" class="position-relative d-flex flex-column justify-content-center align-items-center pb-5" style="background-color: var(--main-bg-color);">

        ${subtitle( "Nuestros productos más populares", "var(--font-hover-color)", 3, "var(--logo-bg-color)" )}
        
        ${carrouselMostPopularProducts(ProductUtils, carrousel)}
        </section>
    `;

    return homeContent
}

