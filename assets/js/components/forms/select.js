export const formSelect = (selectData = {name: "", id: "", placeholder: "", ariaLabel: "", textColor: "", fontSize: "", backgroundColor: "", options: [{optionText: "", optionValue: ""}]}) => {

    let select =
    `
    <select class="form-select form-select mb-3" name="${selectData.name}" name="${selectData.id}" style="color:${selectData.textColor}; background-color:${selectData.backgroundColor}; font-size:${selectData.fontSize}" aria-label="${selectData.ariaLabel}">
    `;

    if (selectData.placeholder) {

        select +=
        `
        <option selected disabled> ${selectData.placeholder} </option>
        `;
    }

    if (selectData.options) {

        for (const option of (selectData.options)) {
        
            select +=
            `
                <option value="${option.optionValue}"> ${option.optionText} </option>
            `;
        }
    }

    select +=
    `
    </select>
    `;

    return select;
};

