export const btnGroupAddtoCart = (btnWithIcon) => {

    const btnGroupAddtoCart =
    `
        <div class="input-group d-flex flex-row justify-content-around align-items-center h-content w-100" style="max-height:max(3vmax,3rem);">
            <input type="number" class="form-control w-25 h-100" id="numberInput" value="0" min="0">

            ${btnWithIcon(
                {
                    id: "btn-add-to-card",
                    text: "Agregar al carrito"
                }
            )}
        </div>
    `;

    return btnGroupAddtoCart;
}