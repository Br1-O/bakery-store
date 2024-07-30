export const shopContent = (subtitle, anchor, dropDown, navbar, formSelect) => {

// ■■■■■■■■■■■■■■ Data for categories navbar ■■■■■■■■■■■■■■ //
  
//anchors for dropdowns and navBar
let anchor1 = anchor({anchorText: "Pebetes", anchorLink: "#tienda/panaderia/pebetes"});
let anchor2 = anchor({anchorText: "Sacramentos", anchorLink: "#tienda/panaderia/sacramentos"});
let anchor3 = anchor({anchorText: "Bizcochitos de grasa", anchorLink: "#tienda/panaderia/bizcochitos"});
let anchor4 = anchor({anchorText: "Pan blanco", anchorLink: "#tienda/panaderia/pan-blanco"});
let anchor5 = anchor({anchorText: "Pan integral", anchorLink: "#tienda/panaderia/pan-integral"});
let anchor6 = anchor({anchorText: "Pan integral con semillas", anchorLink: "#tienda/panaderia/pan-integral-con-semillas"});
let anchor7 = anchor({anchorText: "Fugazzas", anchorLink: "#tienda/panaderia/fugazzas"});

//array for anchors
let itemsPanaderia = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];
let itemsPasteleria = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];
let itemsSalado = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];
let itemsEspecial = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];
let itemsCasero = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];

// ■■■■■■■■■■■■■■ categories navBar ■■■■■■■■■■■■■■ //

let categoriesNavBar =
`
<nav id="navBarCategories" class="navbar nav-tabs navbar-expand-lg bg-body-tertiary d-flex flex-row justify-content-center align-items-center gap-2 fs-2 p-3 my-5 z-3 bg-glass-effect w-100">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarCategoriesMenu" aria-controls="navBarCategoriesMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navBarCategoriesMenu">
      <ul class="navbar-nav mb-2 mb-lg-0">

      ${dropDown(
        {
          titleCategoryText: "Panaderia",
          titleCategoryLink: "#tienda/panaderia",
          groupOptions: itemsPanaderia
        }
      )}
    
      ${dropDown(
        {
          titleCategoryText: "Pasteleria",
          titleCategoryLink: "#tienda/pasteleria",
          groupOptions: itemsPasteleria
        }
      )}
    
      ${dropDown(
        {
          titleCategoryText: "Salado",
          titleCategoryLink: "#tienda/salado",
          groupOptions: itemsSalado
        }
      )}
    
      ${dropDown(
        {
          titleCategoryText: "Especial",
          titleCategoryLink: "#tienda/especial",
          groupOptions: itemsEspecial
        }
      )}
    
      ${dropDown(
        {
          titleCategoryText: "Para hacer en casa",
          titleCategoryLink: "#tienda/casero",
          groupOptions: itemsCasero
        }
      )}

      </ul>

    </div>
  </div>
</nav>
`;

// ■■■■■■■■■■■■■■ return page ■■■■■■■■■■■■■■ //

let pageContent = 
`        
<!-- Trending Products -->
<section class="position-relative" style="margin-top:max(10vmax,10rem);">

  ${subtitle("¡Conocé todos nuestros productos!", "var(--logo-bg-color)", 1, "var(--font-hover-color)")}

  ${categoriesNavBar}

  <!-- Search and filter bar -->
  <div class="container-filter-bar container-fluid row d-flex flex-row justify-content-around align-items-center">

    <div class="col-12 col-md-4 col-lg-3">

      <h3 class="h4 text-white"> Filtrar por: </h3>

      <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-2">

        ${formSelect(
          {
            name: "ingredients",
            placeholder: "Ingredientes", 
            textColor: "var(--font-hover-color)",
            options: 
            [
              {
                optionText: "Apto p/ celiacos", optionValue: "NoWheet"
              },
              {
                optionText: "Vegetariano", optionValue: "Veget"
              },
              {
                optionText: "Vegano", optionValue: "Vegan"
              }
            ]
          }
        )}

        ${formSelect(
          {
            name: "price",
            placeholder: "Precio", 
            options: 
            [
              {
                optionText: "menor a $2000", optionValue: "<2000"
              },
              {
                optionText: "$2000 - $5000", optionValue: "2000-5000"
              },
              {
                optionText: "mayor a $5000", optionValue: ">5000"
              }
            ]
          }
        )}
      </div>
    </div>

    <div class="col-12 col-md-4 col-lg-2">

      <h3 class="h4 text-white"> Ordenar por: </h3>

      <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-2">

        ${formSelect(
          {
            name: "orderBy",
            options: 
            [
              {
                optionText: "Nombre asc.", optionValue: "Vegan"
              },
              {
                optionText: "Nombre desc.", optionValue: "Vegan"
              },
              {
                optionText: "Precio asc.", optionValue: "NoWheet"
              },
              {
                optionText: "Precio desc.", optionValue: "Veget"
              }
            ]
          }
        )}
      </div>
    </div>

  </div>

  <!-- List of trending products -->
  <div class="row d-flex justify-content-center align-items-center overflow-scroll gap-3 gap-md-5 w-75 m-auto py-5" id="container-trending-products">
  </div>



</section>
`;

return pageContent

} 
