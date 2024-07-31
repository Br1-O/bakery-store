//function to handle dinamic routes
export const dinamicRouteDisplay  = async(hashPath, regularExpressionPatternForRoute, routeHandler) => {

    if (regularExpressionPatternForRoute.test(hashPath)) {
        //check and get all the dynamic paths of the URL
        const match = hashPath.match(regularExpressionPatternForRoute);
        //extract route parameters
        const routeParams = match.slice(1); 

        //define a wrapper function to invoke routeHandler with routeParams
        const handlerWrapper = async () => {
            await routeHandler(routeParams);
        };

        //call the handlerWrapper function
        await handlerWrapper();

        return true;
    }

    return false;
}