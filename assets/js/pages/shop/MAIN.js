export const shopContent = (subtitle, anchor, dropDown, navbar, formSelect, products, btnsGroupPagination) => {

let pageContent = 
`        
<!-- Shop container -->
<section class="position-relative py-3" style="margin-top:max(10vmax,10rem);">

  ${subtitle(
    {
    id:"shopMainTitle",
    text: "¡Conocé todos nuestros productos!", 
    textColor: "var(--logo-bg-color)", 
    indexOfHighlightWord: 1, 
    highlightColor: "var(--font-hover-color)"
    }
  )}

  ${navbar(anchor, dropDown)}

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

  <!-- List of products in shop -->
  <div class="row d-flex justify-content-center align-items-center overflow-hidden gap-3 gap-md-5 w-75 m-auto py-5" id="container-trending-products">
      ${products}
  </div>

  ${btnsGroupPagination(
    {
      totalPages: 5,
      currentPage: 1
    }
  )}

</section>
`;

return pageContent

} 
