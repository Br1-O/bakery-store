export const carrousel = (id = "carousel", slideArray = [{imgs:[], alt:"", h:"", p:"", tags: [""], links: [{anchorText: "", anchorLink: ""}]}]) => {

    let container = 
    `
    <div id="${id}" class="carousel slide col-sm-12 col-md-8 col-xl-6 d-flex justify-content-center align-center" 
    data-bs-ride="carousel" data-bs-interval="5000" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">
    `;
        
    let i = 0;
    i = 0;
    for (const slide of slideArray) {

        if (i === 0) {

            container += 
            `    
            <div class="carousel-inner">

                <div class="carousel-item  active">
            `
            if (slide.links) {
                
                for (const link of (slide.links)) {

                    container += 
                    `
                    <a href="${link.anchorLink}" target="_blank" rel="noopener noreferrer">
                        ${link.anchorText}
                    </a>
                    `;
                }
            }

            container +=
            `
                <div id="${slide.h}" class="card product-card col-12 p-0 bg-glass-effect" style="height:max(20vmax, 20rem);" aria-label="${slide.h}">

                    <div class="card-body container-product-card-title d-flex flex-column justify-content-center align-items-start flex-wrap">
                        <a class="text-decoration-none card-title align-self-center fw-bold fs-5" href="${slide.links[0].anchorLink}">
                            <h5> ${slide.h} </h5>
                        </a>
                    </div>

                    <div class="card-image-container h-75 w-100 overflow-hidden">
                        <a href="${slide.links[0].anchorLink}">
                            <img id="product-img-${slide.h}" class="card-img-top img-fluid product-image" alt="${slide.h}" src= ${slide.imgs[0]}  
                            src2= ${slide.imgs[1] ? slide.imgs[1] : "none"} data-src=${slide.imgs[0]}
                            loading="lazy">
                        </a>
                    </div>

                    <div class="card-body d-flex flex-column justify-content-center align-items-center gap-2 flex-wrap">

                        <p class="card-text"> ${slide.p} </p>

                    </div>
                </div>

            </div>
            `;

            i++;
        } else {

            container += 
            `
                <div class="carousel-item">
            `
            if (slide.links) {
                
                for (const link of (slide.links)) {

                    container += 
                    `
                    <a href="${link.anchorLink}" target="_blank" rel="noopener noreferrer">
                        ${link.anchorText}
                    </a>
                    `;
                }
            }

            container +=
            `
                    <div id="${slide.h}" class="card product-card col-12 p-0 bg-glass-effect" style="height:max(20vmax, 20rem);" aria-label="${slide.h}">

                        <div class="card-body container-product-card-title d-flex flex-column justify-content-center align-items-start flex-wrap">
                            <a class="text-decoration-none card-title align-self-center fw-bold fs-5" href="${slide.links[0].anchorLink}">
                                <h5> ${slide.h} </h5>
                            </a>
                        </div>

                        <div class="card-image-container h-75 w-100 overflow-hidden">
                            <a href="${slide.links[0].anchorLink}">
                                <img id="product-img-${slide.h}" class="card-img-top img-fluid product-image" alt="${slide.h}" src= ${slide.imgs[0]}  
                                src2= ${slide.imgs[1] ? slide.imgs[1] : "none"} data-src=${slide.imgs[0]}
                                loading="lazy">
                            </a>
                        </div>

                        <div class="card-body d-flex flex-column justify-content-center align-items-center gap-2 flex-wrap">

                            <p class="card-text"> ${slide.p} </p>

                        </div>
                    </div>

                </div>
            `;

            i++;
        }
    }

    container += 
    `
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"> Anterior </span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"> Siguiente </span>
        </button>

    </div>
    `;

    return container;
};
