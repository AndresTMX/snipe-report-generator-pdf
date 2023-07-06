import { Banner } from "../../sections/Banner";
import { Navigator } from "../../sections/Navigator";

function UI({children}) {
    return ( 
        <>
        <Banner/>
        <Navigator/>
        {children}
        </>
     );
}

export {UI};