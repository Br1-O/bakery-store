import { subtitle } from "../../components/text/titles.js";

export const homeContent = (ProductUtils, billboard, billboardMainPage, carrousel, carrouselMostPopularProducts) => {

    let homeContent =

    `
    <section id="billboard" class="position-relative d-flex flex-column justify-content-center align-items-center my-3">

        ${billboardMainPage(billboard)}

    </section>

    <section id="mostPopularProducts" class="position-relative d-flex flex-column justify-content-center align-items-center pb-5" style="background-color: var(--main-bg-color);">

        ${subtitle(
            {
            id:"shopMainTitle",
            text: "Nuestros productos más populares", 
            textColor: "var(--logo-bg-color)", 
            indexOfHighlightWord: 3, 
            highlightColor: "var(--font-hover-color)"
            }
        )}

        ${carrouselMostPopularProducts(ProductUtils, carrousel)}
        </section>
    `;

    return homeContent
}

