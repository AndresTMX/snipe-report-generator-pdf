import { Container } from "@mui/material";

function PreviewContainer({children}) {

    return ( 
        <Container sx={{display:'flex', flexDirection:'column', height:'700px', gap:'20px'}}>
            {children}
        </Container>
     );
}

export {PreviewContainer};