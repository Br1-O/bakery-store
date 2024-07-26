export const subtitle = (text = "", textColor = "", indexOfHighlightWord = -1, highlightColor= "") => {

    let subtitle = "";
    
    //check if highlight option is selected
    if (indexOfHighlightWord != -1) {

        //add parent tag for subtitle
        subtitle = 
        `
        <h2 class="subtitle fw-500 text-center mb-5" style="color: ${textColor};">
        `;

        //split text into array
        let arrayText = text.split(" ");

        //highlight word on index match
        for (const word of arrayText) {
            
            arrayText.indexOf(word) === indexOfHighlightWord 
            ?
            subtitle +=
            `
            <span style="color: ${highlightColor};"> ${word + " "} </span>
            `
            :
            subtitle += word + " ";
        }
    } else {

        //add parent tag with text for subtitle
        subtitle = 
        `
        <h2 class="subtitle fw-500 text-center mb-5" style="color: ${textColor};"> ${text} </h2>
        `;
    }

    //close parent tag for subtitle
    subtitle += 
    `
    </h2>
    `

    return subtitle;
}