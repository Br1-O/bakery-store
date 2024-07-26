export const cardHorizontal = (cardData = {img: "", alt: "", title: "", text: "", textColor: "", backgroundColor: "", links: [{anchorText: "", anchorLink: ""}]}) => {

    let card =
    `
    <div class="card mb-3 col-sm-12 col-md-10 col-xl-8" style = "background-color: ${cardData.backgroundColor}; color: ${cardData.textColor};" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${cardData.img}" class="img-fluid rounded-start" alt="${cardData.alt}">
            </div>

            <div class="col-md-8">
                <div class="card-body d-flex flex-column justify-content-center align-items-center pt-xl-5">
                    <h5 class="card-title h1"> ${cardData.title} </h5>
                    <p class="card-text fs-5">  ${cardData.text}  </p>
    `;

    if (cardData.links) {

        for (const link of (cardData.links)) {
        
            card +=
            `
                            <a href="${link.anchorLink}" class="card-text fs-5 mt-4 form-btn" target="_blank" rel="noopener noreferrer">${link.anchorText}</a>
            `;
        }
    }

    card +=
    `

                </div>
            </div>
        </div>
    </div>
    `;

    return card;
};
