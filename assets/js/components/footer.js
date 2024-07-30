const footerContent = (
    content = {
        logo: "",
        logoAltText: "",
        basicContactInfo: 
        [
            {
                anchorLink: "",
                anchorText: ""
            }
        ],
        socialMediaLinks: 
        [
            {
                iconClass: "",
                link: "",
                ariaLabel: ""
            }
        ],
        columns:
        [
            {
                title: "",
                links:
                [
                    {
                        anchorLink: "",
                        anchorText: ""
                    }
                ]
            }
        ],
        newsLetter:
        {
            title: "",
            link: "",
            text: ""
        },
        copyright:
        {
            pageName: "",
            date: "",
            authorName: "",
            authorLink: ""
        }
    }

) => {

    //add footer tag
    let footer = 
    `      
    <!-- Footer -->
    <footer class="d-flex flex-row justify-content-star" id="contact">
    `;

    //check if there are extra columns
    const thereIsExtraColumns = content.columns;
    //check if there is basic contact info
    const thereIsBasicContactInfo = content.basicContactInfo;

    if (thereIsExtraColumns) {

       

        //add extra contact data and navigation columns
        for (const column of content.columns) {

            footer += 
            `       <div class="w-50 d-flex  ms-4 mb-4 flex-column p-1 gap-4 flex-wrap">
                        <h4 class="h4 mb-2  fw-bold"> ${column.title} </h4>
            `;

            for (const link of column.links) {
                
                footer += 
                `
                        <a href="${link.anchorLink}" class="footer-social-media"> ${link.anchorText} </a>
                `;
            }

            footer +=
            `
                    </div>
            `;
        }
    } else if(thereIsBasicContactInfo) {

        //select footer parent container for columns based on the presence of extra columns
        footer += 
        `      
            <div class="w-100 p-2 d-flex flex-column justify-content-center flex-md-row align-items-baseline gap-5">
        `;

        //add logo to footer
        if(content.logo) {

            footer += 
            `
                <img src="${content.logo}" alt="${content.logoAltText}">
            `;
        }

        //add basic contact data to footer
        footer += 
        `
            <div class="d-flex flex-column justify-content-center align-items-start p-1 gap-3 flex-wrap" id="contact-info">
        `

        for (const contactData of content.basicContactInfo) {

            footer += 
            `
                    <a href="${contactData.anchorLink}" class="fs-5">
                        ${contactData.anchorText}
                    </a>
            `;
        }

        //add social media icons with links and arial labels
        if (content.socialMediaLinks) {

            footer += 
            `
                    <div class="d-flex flex-row justify-content-start align-items-center gap-3 flex-wrap mt-1">
            `;
            
            for (const socialMediaData of content.socialMediaLinks) {
                
                footer += 
                `
                            <a href="${socialMediaData.link}" aria-label="${socialMediaData.ariaLabel}">
                                <i class="${socialMediaData.iconClass} fs-1"></i>
                            </a>
                `;
            }

            footer +=
            `
                        </div>

                    </div>
            `;
        }
    }else{

        //select footer parent container for columns based on the presence of extra columns
        footer += 
        `      
            <div class="w-100 p-3 d-flex flex-column justify-content-center align-items-center gap-3">
        `;

        //add logo to footer
        if(content.logo) {

            footer += 
            `
                <img src="${content.logo}" alt="${content.logoAltText}">
            `;
        }

        //add social media icons

       

        footer += 
        `
                <div class="d-flex flex-row justify-content-start align-items-center gap-3 flex-wrap">
        `;
        
        for (const socialMediaData of content.socialMediaLinks) {
            
            footer += 
            `
                        <a href="${socialMediaData.link}" aria-label="${socialMediaData.ariaLabel}">
                            <i class="${socialMediaData.iconClass}" style="font-size:max(3vmax, 3rem);"></i>
                        </a>
            `;
        }

        footer +=
        `
                    </div>

                </div>
        `;
    }
     //select footer parent container for columns based on the presence of extra columns
     footer += 
     `      
         <div class="w-100 mt-4 p-2 d-flex flex-column justify-content-centerflex-md-row align-items-center gap-4">
     `;

    

     //add social media icons with links and arial labels
     if (content.socialMediaLinks) {

         footer += 
         `
                 <div class="d-flex flex-row justify-content-start align-items-center gap-3 flex-wrap mt-1">
         `;
         
         for (const socialMediaData of content.socialMediaLinks) {
             
             footer += 
             `
                         <a href="${socialMediaData.link}" aria-label="${socialMediaData.ariaLabel}">
                             <i class="${socialMediaData.iconClass}"></i>
                         </a>
             `;
         }

         footer +=
         `
                     </div>
                 </div>
         `;
     }
    //add newsletter column

    if (content.newsLetter) {

        footer +=
        `
            <div class="d-flex flex-column p-1 gap-3 flex-wrap" id="newsletter">
                <p class="fs-3 fw-bold bt-1"> ${(content.newsLetter).title} </p>
                <a href="${(content.newsLetter).link}">
                    Newsletter
                </a>
                <p> ${(content.newsLetter).text} </p>
            </div>
        `;
    }

    //closing of internal columns container tag
    footer +=
    `
        </div>
    `;

    //add copyright container
    if (content.copyright) {

        footer +=
        `
            <div class="footer-copyright w-100">
                <p style= "color: var(--font-hover-color)"> ${(content.copyright).pageName} © ${(content.copyright).date} · All rights reserved · Designed by <a href="${(content.copyright).authorLink}"> ${(content.copyright).authorName} </a></p>
            </div>
        `;
    }

    //closing tag of footer

    footer +=
    `
    </footer>
    `;

    return footer;
}

export const footer = (
    show = true,
    content = {
        logo: "",
        logoAltText: "",
        basicContactInfo: 
        [
            {
                anchorLink: "Contact",
                anchorText: "Contact"
            }
        ],
        socialMediaLinks: 
        [
            {
                iconClass: "",
                link: "",
                ariaLabel: ""
            }
        ],
        columns:
        [
            {
                title: "",
                links:
                [
                    {
                        anchorLink: "",
                        anchorText: ""
                    }
                ]
            }
        ],
        newsLetter:
        {
            title: "",
            link: "",
            text: ""
        },
        copyright:
        {
            pageName: "",
            date: "",
            authorName: "",
            authorLink: ""
        }
    }
) => {

    let footerSection = document.getElementById("footer-section");

    let contentData = content;

    //display footer is show option is true
    if (show) {
        footerSection.innerHTML = 

        footerContent(contentData);
    }else{
        footerSection.innerHTML = "";
    }
};