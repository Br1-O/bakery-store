export class Anchor  {

    //attributes
    anchorText = "";
    anchorLink = "";
    ariaLabel = "";
    anchorImage = "";

    //constructor
    constructor(anchorText, anchorLink, ariaLabel = "", anchorImage = "") {
        this.anchorText = anchorText;
        this.anchorLink = anchorLink;
        this.ariaLabel = ariaLabel;
        this.anchorImage = anchorImage;
    }

    //generate element function
    generateAnchor(){

        let anchorTag =
        `
        <a href="${this.anchorLink}" class="nav-link" aria-label="${this.ariaLabel}">
            ${this.anchorText}
            ${this.anchorImage ? `<img src="${this.anchorImage}" alt="${this.ariaLabel}">` : ""}
        </a>
        `;

        return anchorTag;
    }
}

export let anchor = new Anchor("", "", "", "");