export const subtitle = (textData = {id: "", text: "", textColor: "", indexOfHighlightWord: -1, highlightColor: ""}) => {

    const defaultData =
    {
        id: "", text: "", textColor: "", indexOfHighlightWord: -1, highlightColor: ""
    };

    //merge default values with provided data
    textData = { ...defaultData, ...textData };

    //create container variable
    let subtitle = "";
    
    //check if highlight option is selected
    if (textData.indexOfHighlightWord != -1) {

        //add parent tag for subtitle
        subtitle = 
        `
        <h2 id="${textData.id}" class="subtitle fw-500 text-center mb-5" style="color: ${textData.textColor};">
        `;

        //split text into array
        let arrayText = textData.text.split(" ");

        //highlight word on index match
        for (const word of arrayText) {
            
            arrayText.indexOf(word) === textData.indexOfHighlightWord 
            ?
            subtitle +=
            `
            <span style="color: ${textData.highlightColor};"> ${word + " "} </span>
            `
            :
            subtitle += word + " ";
        }
    } else {

        //add parent tag with text for subtitle
        subtitle = 
        `
        <h2 class="subtitle fw-500 text-center mb-5" style="color: ${textData.textColor};"> ${textData.text} </h2>
        `;
    }

    //close parent tag for subtitle
    subtitle += 
    `
    </h2>
    `

    return subtitle;
}