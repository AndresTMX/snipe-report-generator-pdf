import { ITemMaintance } from "../ItemMaintance";
import { Container, Paper, Typography, Button, Box } from "@mui/material";

function ItemSearch({name, tag, serial, model, status, category, brand, location, userData}) {
  
  return (
    <Paper elevation={4} sx={{display:'flex', flexDirection:'column', gap:'15px', padding:'20px' }}>

      <Typography variant='h4' fontWeight={500}>
       {name}
      </Typography>

      <Typography variant='h6' fontWeight={500}>
       {location}
      </Typography>

      <Typography variant='h6' fontWeight={500}>
       {userData.name}
      </Typography>

      <Box sx={{display:'flex',  flexDirection:'row', gap:'5px'}}>

        <Button>Ver mantenimientos</Button>

        <Button>Agregar mantenimiento</Button>

        <Button>Añadir a reporte</Button>


      
      </Box>

    </Paper>
  );
}

export { ItemSearch };


