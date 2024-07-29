export const navbar = (
    navData = {
        id: "",
        items: [],
        itemsPositionNavBar: "around",
        itemsPositionTextMenu: "center",
        gapNavBar: "gap-1",
        gapTextMenu: "gap-1",
        padding: "p-1",
        bgColor: ".bg-glass-effect",
        textColor: "var(--font-hover-color)",
        textFont: "var(--font-main)",
        textSize: "fs-5",
        logo: "",
        tabs: false,
        sticky: false
        }
) => {

    let navClass = `d-flex flex-row justify-content-${navData.itemsPositionNavBar} align-items-center ${navData.gapNavBar} ${navData.sticky ? 'position-fixed' : ''} ${navData.textSize} ${navData.padding}`;
    let navStyle = `color: ${navData.textColor}; font-family: ${navData.textFont};`;
    let navBgClass = "";
    let navBgStyle = "";

    if (navData.bgColor && navData.bgColor[0] === ".") {
        navBgClass = navData.bgColor.slice(1);
    } else {
        navBgStyle = `background-color: ${navData.bgColor};`;
    }

    let nav = 
    `
    <nav class="${navClass} ${navBgClass}" style="${navStyle} ${navBgStyle}">
    `;

    if (navData.logo) {
        nav += 
        `
            <div class="logo">
                <img src="${navData.logo}" alt="Logo">
            </div>
        `;
    }
    
    nav +=
    ` 
        <ul class="d-flex flex-row justify-content-${navData.itemsPositionTextMenu} align-items-center ${navData.gapTextMenu}">
    `;

    for (const item of (navData.items)) {

        navData.tabs ?
        nav += 
        `   
                <li class="nav-item nav-tabs">
                    ${item}
                </li>
        `
        :
        nav += 
        `   
                <li class="nav-item">
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