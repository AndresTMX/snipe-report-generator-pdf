import { useEffect } from "react";
import { Button, Alert, Paper, Typography, Box } from "@mui/material";
import { ScrollContainer } from "../../Containers/ScrollContainer";

function LoadingMaintances({ maintances, action, clear, error }) {

    const maintancesSuccess = maintances.filter((item) => item.status === 'success');
    const maintancesError = maintances.filter((item) => item.status != 'success');

    const height = maintances?.length > 0? '200px' : '0px'; 

    return ( 
        <Paper 
        elevation={4}
        sx={{
            display:'flex',
            flexDirection:'column',
            gap:'20px',
            padding:'20px',
        }}
        >
          {!error && <Box 
           sx={{
            display:'flex',
            gap:'10px',
            justifyContent:'space-between',
            alignItems:'start'
           }}
           >
              <Typography variant="subtitle">
                Exitosos {maintancesSuccess.length}
              </Typography>

              <Typography variant="subtitle">
                Fallidos {maintancesError.length}
              </Typography>
           </Box>}

           <ScrollContainer height={height}>
            {maintances.length > 0 &&
                maintances.map((maintance) => (

                    <Alert
                        severity={maintance.status === 'success' ? 'success' : 'error'}
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


        {
            error && (<Typography variant="subtitle">
             Error de red, sin conexion
           </Typography>)
        }

        <Button variant="contained" onClick={clear}>Ok</Button>
        </Paper>
     );
}

export {LoadingMaintances};
