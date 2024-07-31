export const dropdown = (category = {titleCategoryText: "", titleCategoryLink: "", titleCategoryAriaLabel: "", groupOptions: []}) => {

    let dropdown =
    `
    <li class="nav-item dropdown" onClick="">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="${category.titleCategoryLink}" 
        aria-label="${category.titleCategoryAriaLabel}" role="button" aria-expanded="false" ${window.innerWidth > 992 && "onClick='location.href=this.href; return false;'"}> 
            ${category.titleCategoryText} 
        </a>
        <ul class="dropdown-menu bg-glass-effect">
            <li>
    `;

    if (category.groupOptions) {

        for (const option of (category.groupOptions)) {
        
            dropdown +=
            `
                        ${option}
            `;
        }
    };

    dropdown +=
    `       
            </li>
        </li>
    </ul>
    `;

    return dropdown;
};