import { useEffect } from "react";
import { Paper, Button, Alert, AlertTitle } from "@mui/material";
import { okMaintance } from "../../Helpers/actionsMaintance";
import { ScrollContainer } from "../../Containers/ScrollContainer";

function LoadingMaintances({ maintances, dispatch }) {

    return ( 
        <ScrollContainer>
        { maintances.length > 0 && 
           maintances.map((maintance) => (

            <Alert
            action={
                <Button color="inherit" size="small" onClick={() => okMaintance(dispatch, maintances, maintance)}>
                    X
                </Button>
            }>

                <span>{maintance.data.messages}  <strong>{maintance.data.payload.asset_id}</strong> </span>

            </Alert>
            
        ))}
        </ScrollContainer>
     );
}

export {LoadingMaintances};
