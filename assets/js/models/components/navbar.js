export class Navbar {

    //constructor function with object parameter
    constructor(
        {
        id = "",
        items = [],
        itemsPositionNavBar = "around",
        itemsPositionTextMenu = "center",
        gapNavBar = "gap-1",
        gapTextMenu = "gap-1",
        padding = "p-1",
        bgColor = ".bg-glass-effect",
        textColor = "var(--font-hover-color)",
        textFont = "var(--font-main)",
        textSize = "fs-5",
        logo = "",
        sticky = false
        } = {}
    ) {
        this.items = items;
        this.itemsPositionNavBar = itemsPositionNavBar;
        this.itemsPositionTextMenu = itemsPositionTextMenu;
        this.gapNavBar = gapNavBar;
        this.gapTextMenu = gapTextMenu;
        this.padding = padding;
        this.bgColor = bgColor;
        this.textColor = textColor;
        this.textFont = textFont;
        this.textSize = textSize;
        this.logo = logo;
        this.sticky = sticky;
    }

    generateNav() {

        let navClass = `d-flex flex-row justify-content-${this.itemsPositionNavBar} align-items-center ${this.gapNavBar} ${this.sticky ? 'position-fixed' : ''} ${this.textSize} ${this.padding}`;
        let navStyle = `color: ${this.textColor}; font-family: ${this.textFont};`;
        let navBgClass = "";
        let navBgStyle = "";

        if (this.bgColor[0] === ".") {
            navBgClass = (this.bgColor).slice(1);
        } else {
            navBgStyle = `background-color: ${this.bgColor};`;
        }

        let nav = 
        `
        <nav class="${navClass} ${navBgClass}" style="${navStyle} ${navBgStyle}">
        `;

        if (this.logo) {
            nav += 
            `
                <div class="logo">
                    <img src="${this.logo}" alt="Logo">
                </div>
            `;
        }
        
        nav +=
        ` 
            <ul class="d-flex flex-row justify-content-${this.itemsPositionTextMenu} align-items-center ${this.gapTextMenu}">
        `;

        for (const item of (this.items)) {

            nav += 
            `   
                    <li class="nav-item nav nav-tabs">">
                        ${item}
                    </li>
            `;
        }

        nav += 
        `
            </ul>
        </nav>
        `;

        return nav;
    }

    addItem(anchorItem) {
        this.items.push(anchorItem);
    }

    removeItem(anchorLink) {
        this.items = this.items.filter(item => item.anchorLink !== anchorLink);
    }
}