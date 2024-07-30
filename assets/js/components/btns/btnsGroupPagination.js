export const btnsGroupPagination = (paginationData = 
    {totalPages: 0, currentPage: 1, ariaLabel: "", textColorClass: "", textColorAttr: "", fontSizeClass: "", fontSizeAttr: "", backgroundColorClass: "", backgroundColorAttr: ""}) => {

    //default values for the pagination nav tag
    const defaultData = {
        totalPages: 0, 
        currentPage: 1,
        textColorAttr: "var(--font-hover-color)", 
        fontSizeAttr: "1rem", 
        backgroundColorClass: "bg-glass-effect",
        ariaLabel: "botones de paginacion"
    };

    //merge default values with provided data
    paginationData = { ...defaultData, ...paginationData };

    //declare variable for pagination group
    let btnsGroup = "";

    //check if there are any pages to display
    if (paginationData.totalPages > 0){

        //pagination container and previous icon
        btnsGroup +=
        `
        <nav class="container-fluid d-flex justify-content-center align-items-center flex-wrap" aria-label="${paginationData.ariaLabel}">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link ${paginationData.backgroundColorClass} ${paginationData.textColorClass} ${paginationData.fontSizeClass}" 
                    style="background-color: ${paginationData.backgroundColorClass}; color: ${paginationData.textColorAttr}; font-size: ${paginationData.fontSizeAttr};" 
                    href="#" aria-label="anterior">
                        <span aria-hidden="true">
                            <i class='bx bx-chevron-left'></i>
                        </span>
                    </a>
                </li>
        `;

        //add a number per page in totalPages
        for (let index = 1; index <= paginationData.totalPages; index++) {
            
            index === paginationData.currentPage ?
                btnsGroup +=
                `
                <li class="page-item active">
                    <a class="page-link ${paginationData.backgroundColorClass} ${paginationData.textColorClass} ${paginationData.fontSizeClass}" 
                    style="background-color: ${paginationData.backgroundColorClass}; color: ${paginationData.textColorAttr}; font-size: ${paginationData.fontSizeAttr};"
                    href="#"> ${index} </a>
                </li>
                `
            :
                btnsGroup +=
                `
                <li class="page-item">
                    <a class="page-link ${paginationData.backgroundColorClass} ${paginationData.textColorClass} ${paginationData.fontSizeClass}" 
                    style="background-color: ${paginationData.backgroundColorClass}; color: ${paginationData.textColorAttr}; font-size: ${paginationData.fontSizeAttr};"
                    href="#"> ${index} </a>
                </li>
                `;
        }

        //add btn for next page and closing tag
        btnsGroup += 
        `
                <li class="page-item">
                    <a class="page-link ${paginationData.backgroundColorClass} ${paginationData.textColorClass} ${paginationData.fontSizeClass}" 
                    style="background-color: ${paginationData.backgroundColorClass}; color: ${paginationData.textColorAttr}; font-size: ${paginationData.fontSizeAttr};" 
                    href="#" aria-label="siguiente">
                        <span aria-hidden="true">
                            <i class='bx bx-chevron-right'></i>
                        </span>
                    </a>
                </li>

            </ul>
        </nav>
        `;
    }
    
    //return pagination btn group
    return btnsGroup;
}