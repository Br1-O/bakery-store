export const accordion = (id = "", itemList = [{title: "", text: [""], anchorText: "", anchorLink: "", img: "", alt: ""}]) => {

    //add parent container of component
    let accordion =
    `
    <div class="accordion accordion-flush col-sm-12 col-md-10 col-xl-6" id="${id}" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">
    `;

    //counter for ids
    let i = 0;

    for (const item of itemList) {

        //add title
        accordion +=             
        `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item-${i}" aria-expanded="false" aria-controls="item-${i}" aria-label="acordion">
                        ${item.title}
                    </button>
                </h2>
                <div id="item-${i}" class="accordion-collapse collapse" data-bs-parent="#${id}">
                    <div class="accordion-body d-flex flex-column gap-3">
        `;

        //add each of the text content
        for(const text of item.text) {
            
            accordion += 
            `  
                <p>
                    ${text}
                </P>
            `
        }

        //add link to content
        if (item.anchorLink) {
            
            accordion += 
            `  
                <a href="${item.anchorLink}" target="_blank" rel="noopener noreferrer">
                    ${item.anchorText}
                </a>
            `;
        }

        //if image is included
        if (item.img) {

            //add modal window
            accordion +=
            `
                <img class="w-50 rounded m-auto" src="${item.img}" alt="${item.alt}">
            `;
        }

        //close html tags            
        accordion += 
        `
                    </div>
                </div>
            </div>
        `;

        //update counter
        i++;
    };

    //close container parent           
    accordion +=
    `
        </div>
    `;

    //return component
    return accordion;
}