export const btnWithIcon = (btnData = 
    {id: "", text: "", iconClass:"", textColorAttr: "", textColorClass: "", fontSizeAttr: "", fontSizeClass: "", 
        backgroundColorAttr: "", backgroundColorClass: "", action: ""}) => {
                                
    //default values for the select tag
    const defaultData = {
        id: "", 
        text: "", 
        iconClass: "bx bx-cart",
        textColorAttr: "var(--font-hover-color)", 
        fontSize: "", 
        backgroundColorClass: "btn btn-dark", 
        action: ""
    };

    //merge default values with provided data
    btnData = { ...defaultData, ...btnData };
           
    let btn = 
    `
    <button class="${btnData.backgroundColorClass} w-75 h-100 form-btn text-wrap overflow-hidden" id="${btnData.id}">
        <i class='${btnData.iconClass} mx-1'></i>
        ${btnData.text}
    </button>
    `;

    return btn;
}