export const carrousel = (id = "carousel", slideArray = [{img:"", alt:"", h:"", p:"", tags: [""], links: [{anchorText: "", anchorLink: ""}]}]) => {

    let container = 
    `
    <div id="${id}" class="carousel slide col-sm-12 col-md-8 col-xl-6 d-flex justify-content-center align-center" 
    data-bs-ride="carousel" data-bs-interval="5000" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">

        <div class="carousel-indicators">
    `;
        
    let i = 0;
    for (const slide of slideArray) {
        
        if (i === 0) {

            container += 
            `
            <button type="button" data-bs-target="#${id}" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i+1}"></button>
            `;

            i++;
        } else {
            container += 
            `
            <button type="button" data-bs-target="#${id}" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>
            `;

            i++;
        }
    }

    i = 0;
    for (const slide of slideArray) {

        let tagsString = "";
        let j = 0;

        for (const tag of slide.tags) {

            j === (slide.tags).length ? tagsString += tag + ", " : tagsString += tag;
            
            j++;
        }

        if (i === 0) {

            container += 
            `
            </div>
    
            <div class="carousel-inner">

                <div class="carousel-item  active">

                    <div class="card-header p-2 rounded text-center bg-glass-effect d-flex flex-row justify-content-center align-items-center gap-2"> 
                        <h2 class="h2"> ${slide.h} </h2> 
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
                </div>

                <div class="card mb-3 bg-glass-effect">
                    <img src="${slide.img}" class="card-img-top img-thumbnail" alt="${slide.alt}">
                    <div class="card-body">
                        <p class="card-text h5"> ${slide.p} </p>
                        <div class="mt-3">
                            <span> Usando: </span> <small class="text-body-secondary"> ${tagsString} </small>
                        </div>
                    </div>
                </div>
            </div>
            `;

            i++;
        } else {

            tagsString = "";
            let j = 0;

            for (const tag of slide.tags) {
    
                j === (slide.tags).length ? tagsString += tag + ", " : tagsString += tag;
    
                j++;
            }

            container += 
            `
                <div class="carousel-item">

                    <div class="card-header bg-light p-2 rounded text-center bg-glass-effect d-flex flex-row justify-content-center align-items-center gap-2"> 
                        <h2 class="h2"> ${slide.h} </h2> 
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
                    </div>

                    <div class="card mb-3 bg-glass-effect">
                        <img src="${slide.img}" class="card-img-top img-thumbnail" alt="${slide.alt}">
                        <div class="card-body">
                            <p class="card-text h5"> ${slide.p} </p>
                            <div class="mt-3">
                                <span> Usando: </span> <small class="text-body-secondary"> ${tagsString} </small>
                            </div>
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
