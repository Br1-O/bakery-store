import { anchor } from "./navs/anchor.js";
import { dropdown } from "./navs/dropDown.js";
import { navbar } from "./navs/navBar.js";

export const navBarCatalogueProducts = () => {

    //anchors for dropdowns and navBar
    let anchor1 = anchor({anchorText: "Pebetes", anchorLink: "#tienda/panaderia/pebetes"});
    let anchor2 = anchor({anchorText: "Sacramentos", anchorLink: "#tienda/panaderia/sacramentos"});
    let anchor3 = anchor({anchorText: "Bizcochitos de grasa", anchorLink: "#tienda/panaderia/bizcochitos"});
    let anchor4 = anchor({anchorText: "Pan blanco", anchorLink: "#tienda/panaderia/pan-blanco"});
    let anchor5 = anchor({anchorText: "Pan integral", anchorLink: "#tienda/panaderia/pan-integral"});
    let anchor6 = anchor({anchorText: "Pan integral con semillas", anchorLink: "#tienda/panaderia/pan-integral-con-semillas"});
    let anchor7 = anchor({anchorText: "Fugazzas", anchorLink: "#tienda/panaderia/fugazzas"});

    //array for anchors
    let items = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];

    let item2 = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6, anchor7];


    let dropdown1 = 
    dropdown(
        {
          titleCategoryText: "Panaderia",
          titleCategoryLink: "#tienda/panaderia",
          groupOptions: items
        }
    );

    let dropdown2 = 
    dropdown(
        {
          titleCategoryText: "Pasteleria",
          titleCategoryLink: "#tienda/pasteleria",
          groupOptions: item2
        }
    );


    let menu = [dropdown1, dropdown2];

    let nav =
    navbar(
        {
            items: menu,
            tabs: true,
            itemsPositionNavBar: "around",
            itemsPositionTextMenu: "center",
            gapNavBar: "gap-1",
            gapTextMenu: "gap-1",
            padding: "p-1",
            bgColor: ".bg-glass-effect",
            textColor: "var(--font-hover-color)",
            textFont: "var(--font-main)",
            textSize: "fs-5",
            logo: "",
            sticky: false
        }
    );

    return nav;
}