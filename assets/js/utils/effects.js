export const imgsSwitchEffectOnHover = (productImgsClassName = "product-image") => {

    //get all imgs of products
    const productImgs = document.getElementsByClassName(productImgsClassName);

    // Convert HTMLCollection to array
    const productImgsArray = Array.from(productImgs);

    //event on hover of image to change source from image1 to image2
    productImgsArray.forEach((image) => {
        
        let source1 = image.getAttribute('src');
        let source2 = image.getAttribute('src2');

        if (image.getAttribute('src2') != "none") {

            image.addEventListener("mouseover", () => { 
                setTimeout(() => {
                    image.setAttribute('src', source2);
                    image.setAttribute('src2', source1);
                }, 100);
            });

            image.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        image.setAttribute('src', source1);
                        image.setAttribute('src2', source2);
                    }, 100);
            });
        } 
    });

}
