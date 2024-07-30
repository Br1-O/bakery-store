export const formSelect = (selectData = {name: "", id: "", placeholder: "", ariaLabel: "", textColor: "", fontSize: "", backgroundColor: "", options: [{optionText: "", optionValue: ""}]}) => {

    //default values for the select tag
    const defaultData = {
        name: "", 
        id: "", 
        placeholder: "", 
        ariaLabel: "", 
        textColor: "var(--font-hover-color)", 
        fontSize: "", 
        backgroundColor: ".bg-glass-effect", 
        options: [{ optionText: "", optionValue: "" }]
    };

    //merge default values with provided data
    selectData = { ...defaultData, ...selectData };

    //create select tag variable
    let select = "";

    //check if background color is a class or a color
    ((selectData.backgroundColor) && (selectData.backgroundColor[0] === ".")) ?

    select =
    `
    <select class="form-select form-select mb-3 ${(selectData.backgroundColor).slice(1)}" name="${selectData.name}" id="${selectData.id}" style="color:${selectData.textColor}; font-size:${selectData.fontSize}" aria-label="${selectData.ariaLabel}">
    `
    :
    select =
    `
    <select class="form-select form-select mb-3" name="${selectData.name}" id="${selectData.id}" style="color:${selectData.textColor}; background-color:${selectData.backgroundColor}; font-size:${selectData.fontSize}" aria-label="${selectData.ariaLabel}">
    `;

    //add placeholder
    if (selectData.placeholder) {

        select +=
        `
        <option selected disabled> ${selectData.placeholder} </option>
        `;
    }

    //add options
    if (selectData.options) {

        for (const option of (selectData.options)) {
        
            select +=
            `
                <option value="${option.optionValue}"> ${option.optionText} </option>
            `;
        }
    }

    //closing of select tag
    select +=
    `
    </select>
    `;

    //return tag
    return select;
};

