import { Container, Box } from "@mui/material";

function ConstructionState() {
    return (
      <Container sx={{display:'flex', flexDirection:'column', width:'100%', margin:'auto', alignItems:'center'}}>

        <strong style={{fontSize:'2rem'}}>
            Estamos trabajando en ello
        </strong>

        <Box
        sx={{
            padding:'200px',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundImage: "url(https://media.giphy.com/media/CrFLL3CnRpw5ddlBMm/giphy.gif)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            height: "200px",
            widht:'100%',
          }}>
        </Box>
      </Container>
    );
}

export {ConstructionState};
