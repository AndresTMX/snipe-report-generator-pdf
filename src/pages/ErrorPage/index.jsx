import { Container, Box, Typography, Button } from "@mui/material";
import {Link} from "react-router-dom";

function ErrorPage() {

    return ( 
        <Container sx={{display:'flex', flexDirection:'column', placeItems:'center', height:'500px', position:'relative', top:'20vh'}}>
            <Box sx={{display:'flex', flexDirection:'column', gap:'25px' , placeItems:'center'}}>
                <Typography variant='h2' fontWeight={700}>
                    ocurrio un error inesperado
                </Typography>
               
                    <Link to='/Reporteador'>
                        Regresar al reporteador
                    </Link>

            </Box>
        </Container>
     );
}

export {ErrorPage};