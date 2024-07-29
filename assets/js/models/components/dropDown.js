export class DropDown {

    //attributes
    titleCategoryText = "";
    titleCategoryLink = "";
    titleCategoryAriaLabel = "";
    groupOptions = [];

    //constructor
    constructor({titleCategoryText, titleCategoryLink, titleCategoryAriaLabel, groupOptions} = {}) {
        this.titleCategoryText = titleCategoryText;
        this.titleCategoryLink = titleCategoryLink;
        this.titleCategoryAriaLabel = titleCategoryAriaLabel;
        this.groupOptions = groupOptions;
    }

    //generate element function
    generateDropDown(){

        let dropDownTag = 
        `
        <li class="nav-item dropdown">
            
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="${this.titleCategoryLink}" role="button" aria-expanded="false">${this.titleCategoryText}</a>
            <ul class="dropdown-menu">
        `;

        for (const option of (this.groupOptions)) {
            dropDownTag += 
            `
                    <li>
                        <a class="dropdown-item" href="${option.anchorLink}" aria-label="${option.ariaLabel}"> ${option.anchorText} </a>
                    </li>
            `;
        }

        dropDownTag +=
        `
            </ul>
        </li>
        `

        return dropDownTag;
    }
}