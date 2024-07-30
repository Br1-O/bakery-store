export const anchor = (anchorData = {anchorText: "", anchorLink: "#", ariaLabel: "", anchorImage: ""}) => {

    let anchorTag =
    `
        <a href="${anchorData.anchorLink}" class="nav-link" aria-label="${anchorData.ariaLabel}">
            ${anchorData.anchorText}
            ${anchorData.anchorImage ? `<img src="${anchorData.anchorImage}" alt="${anchorData.ariaLabel}">` : ""}
        </a>
    `;

    return anchorTag;
};
