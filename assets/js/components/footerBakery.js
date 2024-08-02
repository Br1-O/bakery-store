export const footerBakery = (footer) => {

    let footerBakery =
    footer(
        true,
        {
            logo: "/assets/resources/images/imgs/logo.jpeg",
            logoAltText: "",
            socialMediaLinks: [
                {
                    iconClass: "bx bxl-facebook",
                    link: "https://www.linkedin.com/in/bortuno",
                    ariaLabel: "facebook"
                },
                {
                    iconClass: "bx bxl-instagram",
                    link: "https://github.com/Br1-O?tab=repositories",
                    ariaLabel: "instagram"
                },
                {
                    iconClass: "bx bxl-twitter",
                    link: "https://wa.me/5491112345678",
                    ariaLabel: "twitter"
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
                            anchorText: "Sobre nosotros"
                        },
                        {
                            anchorLink: "",
                            anchorText: "Tienda"
                        },
                        {
                            anchorLink: "",
                            anchorText: "Menú"
                        }
                    ]
                },
                {
                    title: "",
                    links:
                    [
                        {
                            anchorLink: "",
                            anchorText: "Recetas"
                        },
                        {
                            anchorLink: "",
                            anchorText: "Galeria"
                        },
                        {
                            anchorLink: "",
                            anchorText: "Contacto"
                        }
                    ]
                },
                {
                    title: "",
                    links:
                    [
                        {
                            anchorLink: "",
                            anchorText: "Politica de privacidad"
                        },
                        {
                            anchorLink: "",
                            anchorText: "Términos y condiciones"
                        },
                        {
                            anchorLink: "",
                            anchorText: "Politica de Cookies"
                        }
                    ]
                }
            ]
        
        }                    
    );

    return footerBakery;
}