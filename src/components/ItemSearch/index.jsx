import { Paper, Typography, Button, Box } from "@mui/material";
import { actionTypes } from "../../Context/MaintanceReducer";
//icons
import {AiOutlineLaptop} from 'react-icons/ai' //lap
import {BsKeyboard} from 'react-icons/bs'  //teclado
import {BsMouse3} from 'react-icons/bs'  //mouse
import {FiMonitor} from 'react-icons/fi' //monitor
import {PiDesktopTowerDuotone} from 'react-icons/pi' //gabinete
//Hook y context
import { useContext } from "react";
import { MaintanceContext } from "../../Context/MaintanceContext";
//helpers actions
import { AddTag, validateRepeat } from "../../Helpers/actionsMaintance";

function ItemSearch({name, tag, serial, model, status, category, brand, location, userData}) {

  const [state, dispatch] = useContext(MaintanceContext);

  const {listTags} = state;

  const renderButton = validateRepeat(listTags, tag);
  const variant = renderButton? 'contained':'contained';
  const color = renderButton? 'primary' : 'success';
  
  return (
    <Paper elevation={4} sx={{display:'flex', flexDirection:'column', gap:'15px', padding:'20px' }}>

      <Typography variant='h4' fontWeight={500}>
       {name}
      </Typography>

      <Typography variant='h6' fontWeight={500}>
       {location}
      </Typography>

      <Typography variant='h6' fontWeight={500}>
       {userData?.name}
      </Typography>

      <Box sx={{display:'flex',  flexDirection:'row', gap:'5px'}}>

        <Button variant='contained'>Ver mantenimientos</Button>

        <Button variant={variant} color={color}  onClick={() => AddTag(listTags, dispatch, tag)}>Agregar mantenimiento</Button>

        <Button  variant='contained'>Añadir a reporte</Button>
      
      </Box>

    </Paper>
  );
}

export { ItemSearch };


