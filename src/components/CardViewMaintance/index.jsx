import { Paper, Typography } from "@mui/material";
import { ITemMaintance } from "../ItemMaintance";

function CardViewMaintance({IdUser, user, location}) {
  

  return (
    <Paper elevation={4} sx={{display:'flex', flexDirection:'column', gap:'15px', padding:'20px' }}>

      <Typography variant='h4' fontWeight={500}>
       {user}
      </Typography>

      <Typography variant='h4' fontWeight={500}>
       {location}
      </Typography>

      <ITemMaintance IdUser={IdUser} />


    </Paper>
  );
}

export { CardViewMaintance };


