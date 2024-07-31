import { subtitle } from "../../components/text/titles.js";

export const homeContent = 
`
    <section id="about-me" class="position-relative d-flex flex-column justify-content-center align-items-center">

        ${subtitle("", "var(--logo-bg-color)", 1, "var(--font-hover-color)")}

    </section>

    <section id="formation" class="position-relative d-flex flex-column justify-content-center align-items-center gap-2" style="background-color: var(--logo-bg-color);">

        ${subtitle("", "var(--main-bg-color)", 2, "var(--font-hover-color)")}

    </section>

    <section id="projects" class="position-relative d-flex flex-column justify-content-center align-items-center">

        ${subtitle("", "var(--logo-bg-color)", 2, "var(--font-hover-color)")}

    </section>

    <section id="contact" class="position-relative d-flex flex-column justify-content-center align-items-center" style="background-color: var(--logo-bg-color);">

        ${subtitle("", "var(--main-bg-color)", 2, "var(--font-hover-color)")}

    </section>

`;