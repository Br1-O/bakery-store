//display content of billboard json into container
export const billboardMainPage = (billboard) => {

    //final template storage
    let billboardMainPage = "";
    
    let adList = 
    [
        {adImg: "assets/resources/images/imgs/billboard/billboard-1.jpg", adLink:"#tienda", adAlt: "imagen-promociones-1"},
        {adImg: "assets/resources/images/imgs/billboard/billboard-2.png", adLink:"#tienda", adAlt: "imagen-promociones-2"},
        {adImg: "assets/resources/images/imgs/billboard/billboard-3.jpg", adLink:"#tienda", adAlt: "imagen-promociones-3"},
        {adImg: "assets/resources/images/imgs/billboard/billboard-4.jpg", adLink:"#tienda", adAlt: "imagen-promociones-4"},
        {adImg: "assets/resources/images/imgs/billboard/billboard-5.jpg", adLink:"#tienda", adAlt: "imagen-promociones-5"}
    ]

    billboardMainPage = billboard("mainPageBillboard", adList);

    //set container's content as template
    return billboardMainPage;
}
