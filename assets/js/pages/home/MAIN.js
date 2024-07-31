import { carrousel } from "../../components/dataDisplayers/carrousel.js"
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

    <section id="prod-destacados" class="position-relative d-flex flex-column justify-content-center align-items-center" style="background-color: var(--logo-bg-color);">

        ${subtitle( "Productos destacados", "var(--main-bg-color)", 2, "var(--font-hover-color)" )}
        
        ${carrousel( "carousel-projects", [
            {
            
                image: "assets/resources/images/imgs/billboard/1.avif",
                tags: "¡Nuevo Producto!",
                title: "Panadería Artesanal",
                description: "¡Descubre nuestra nueva selección de panadería artesanal recién horneada! Explora las últimas creaciones, desde panes rústicos hasta bollos esponjosos. Encuentra el sabor perfecto para cada ocasión y disfruta de la frescura y calidad de nuestros productos. ¡No te pierdas nuestros nuevos lanzamientos y prepárate para deleitarte con el mejor pan artesanal!",
                link: "#"
              },
              {
               
                image: "assets/resources/images/imgs/billboard/2.avif",
                tags: "¡Nuevo Producto!",
                title: "Pasteles de Verano",
                description: "Descubre nuestra nueva colección de pasteles para este verano. Encuentra opciones ligeras y frescas para disfrutar en días soleados. Desde tartas frutales hasta pasteles helados, tenemos todo lo que necesitas para endulzar tu verano.",
                link: "#"
              },
              {
                
                image: "assets/resources/images/imgs/billboard/3.avif",
                tags: "¡Descubre las novedades!",
                title: "Galletas Artesanales",
                description: "Explora nuestra selección de galletas artesanales para complementar tus meriendas. Desde galletas de chocolate hasta galletas con frutos secos, encuentra los detalles perfectos para endulzar tus momentos especiales.",
                link: "#"
              },
              {
              
                image: "assets/resources/images/imgs/billboard/4.avif",
                tags: "¡Nuevos sabores llegaron!",
                title: "Pan Dulce de Otoño",
                description: "Descubre nuestra nueva línea de pan dulce para el otoño. Desde rollos de canela hasta pan de especias, encuentra el dulce perfecto para cada ocasión esta temporada.",
                link: "#"
              },
              {
               
                image: "assets/resources/images/imgs/billboard/5.avif",
                tags: "¡Nueva colección!",
                title: "Pan Integral y Saludable",
                description: "Prepárate para cuidar tu salud con nuestra nueva colección de pan integral y saludable. Desde panes de cereales hasta opciones sin gluten, encuentra el pan nutritivo y delicioso que necesitas para una dieta balanceada.",
                link: "#"
              }
        ])}
        </section>

`;