import { subtitle } from "../../components/text/titles.js";
import { form } from "../../components/forms/form.js";


export const contactPageContent = () => {

    let contactPageContent =

    `
    <section id="contact" class="row position-relative d-flex flex-column justify-content-center align-items-center p-3 gap-3 w-100">

        <div class="row col-12 d-flex flex-column justify-content-start align-items-center" style="min-height:80dvh;">

            ${subtitle({text: "¡Vení a conocernos!", textColor: "var(--logo-bg-color)", indexOfHighlightWord: 2, highlightColor: "var(--font-hover-color)"})}

            <div class="row col-12 d-flex flex-row justify-content-center align-items-center flex-grow-1 p-2">
                
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start p-1 h-100 gap-3" 
                    data-aos="fade-right" data-aos-duration="2000">
                    
                    <img class="inpage-logo mx-auto" id="main-logo" src="assets/resources/images/imgs/logo.png" alt="logo">

                    <div id="contact-data" class="d-flex flex-column justify-content-center align-items-start mx-auto text-decoration">
                        
                        <a href="">
                        Almte. Brown 3466 
                        </a>
                        <a href="">
                        Mar del Plata, Provincia de Buenos Aires B7600
                        </a>
                        <a href="">
                        +5492235012345
                        </a>
                        <a href="">
                        bruno.ortuno2@gmail.com
                        </a>

                        <div id="contact-social-media" class="d-flex flex-row justify-content-center align-items-center gap-3 fs-1 mt-5 mx-auto">
                            <a href="">
                                <i class='bx bxl-facebook'></i>
                            </a>
                            <a href="">
                                <i class='bx bxl-twitter'></i>
                            </a>
                            <a href="">
                                <i class='bx bxl-instagram' ></i>
                            </a>
                            <a href="">
                                <i class='bx bxl-youtube' ></i>
                            </a>
                            <a href="">
                                <i class='bx bxl-linkedin' ></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6 d-flex flex-column justify-content-start align-items-center container-fluid"
                data-aos="fade-left" data-aos-duration="2000">
                    <iframe class="h-100 w-100 map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25151.045195524453!2d-57.54717170684627!3d-38.0032442455705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc1bf3badb63%3A0xfe50fb182c914d75!2sCILSA!5e0!3m2!1sen!2sar!4v1722838368753!5m2!1sen!2sar" 
                    style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
            </div>
        </div>

        <div class="col-12">
            ${subtitle({text: "No dudes en escribirnos", textColor: "var(--logo-bg-color)", indexOfHighlightWord: 3, highlightColor: "var(--font-hover-color)"})}

            ${form("form-contact")}
        </div>

    </section>
    `;

    return contactPageContent;
}