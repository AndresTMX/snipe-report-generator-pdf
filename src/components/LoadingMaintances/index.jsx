import { useEffect } from "react";
import { Button, Alert } from "@mui/material";
import { ScrollContainer } from "../../Containers/ScrollContainer";

function LoadingMaintances({ maintances, action }) {

    return ( 
        <ScrollContainer>
        { maintances.length > 0 && 
           maintances.map((maintance) => (

            <Alert
            key={maintance.assetId}
            action={
                <Button color="inherit" size="small" onClick={() => action(maintance.assetId)}>
                    X
                </Button>
            }>

                <span>{maintance.message}  <strong>{maintance.assetId}</strong> </span>

            </Alert>
            
        ))}
        </ScrollContainer>
     );
}

export {LoadingMaintances};
