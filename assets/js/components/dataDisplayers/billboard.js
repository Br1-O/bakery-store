//display content of billboard json into container
export const billboard = (id, adList = {adImg: "", adAlt: ""}) => {

    //final template storage
    let billboard = "";
    let slides = ""

    //add each ad's info into literal template
    adList.forEach((ad, index) => {

        //add filled ad's template into variable
        slides += 
        `
            <div class="carousel-item ${index === 0 ? "active" : ""} billboard-container"  data-bs-interval="3800">
                <a href="${ad.adLink}">
                    <img class="card-img-top img-fluid billboard-image" alt="${ad.adImg}" src= ${ad.adImg} loading="lazy">
                </a>
            </div>

        `;
    });

    billboard = 
    `        
    <div id="${id}" class="carousel slide w-100 billboardCarrousel" data-bs-ride="carousel">

        <div class="carousel-inner">
            ${slides}
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
    `

    //set container's content as template
    return billboard;
}

//display content of billboard json into container
// export const displayBillboard = (adList, container) => {

//     //final template storage
//     let template = "";

//     //add each ad's info into literal template
//     adList.forEach((ad, index) => {

//         //add filled ad's template into variable
//         template += `<li id=${"ad-"+ ad.id} class="slide" ${index === 0 ? "data-active" : ""}>
    
//                         <img src=${ad.image} alt=${"image of ad: " + ad.title}>

//                         <div class="ad-content">
//                             <h5 class="ad-tag"> ${ad.tag}</h5>
//                             <h1 class="ad-title"> ${ad.title} </h1>
//                             <p class="ad-description"> 
//                                 ${ad.description}
//                             </p>
//                             <a href=${ad.link} class="ad-btn"> ¡Ir al catalogo!<i class='bx bx-right-arrow-alt'></i> </a>
//                         </div>

//                     </li>`;
//     });

//     //set container's content as template
//     container.innerHTML = template;
// }

