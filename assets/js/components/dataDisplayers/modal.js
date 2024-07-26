export const modalWindow = (id = "", itemList = [{title: "", text: [""], anchorText: "", anchorLink: "", img: "", alt: ""}]) => {

    let modal = "";

    for (const item of itemList) {
        
        //include parent container and header
        modal +=
        `
            <div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="${id}">${item.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
        `;

        //include image if there is one
        if (item.img) {
            
            modal +=
            `
            <div class="row">
                <div class="col-12">
                    <img src="${item.img}" class="img-fluid img-thumbnail w-100" alt="${item.alt}">
                </div>
            </div>
            `
        }
       
        //add footer if needed
        modal +=
        `
                        </div>
                    </div>

                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    return modal;
}

export const modalLink = (text = "", modalTargetId = "") => {

    let modalLink =
    `
        <a href data-bs-toggle="modal" data-bs-target="#${modalTargetId}">
            ${text}
        </a>
    `;

    return modalLink;
}

export const modalBtn = (text = "", modalTargetId = "") => {

    let modalBtn =
    `
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalTargetId}">
            ${text}
        </button>
    `;

    return modalBtn;
}