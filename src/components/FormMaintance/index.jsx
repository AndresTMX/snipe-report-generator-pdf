//material ui
import { IconButton, FormControl, InputLabel, Select, MenuItem, Box, InputBase, TextField, Button } from "@mui/material"
import { ContainerDate } from "../ContainerDateDays";
import { actionTypes } from "../../Context/MaintanceReducer";
//utilities
import { useEffect, useState } from "react"
import dayjs from "dayjs";
//icons
import { IoIosCloseCircle } from "react-icons/io";
import { DatePicker } from "@mui/x-date-pickers";
import { RemoveTag } from "../../Helpers/actionsMaintance";


function FormMaintance({state, dispatch}) {

  useEffect(() =>  {
    const dateNow = new dayjs();
    setDate({...date, init: dateNow, end: dateNow})
  },[])

  const [typeMaintance, setMaintance] = useState('')
  const [titleMaintance, setTitle] = useState('')
  const [cost, setCost] = useState(0)
  const [coment, setComent] =  useState('')
  const [date, setDate] = useState({
    init:'',
    end:''
  })

  const {listTags} = state;

  const OnchangueMaintance = (e) => {
    setMaintance(e.target.value)
  }

  function renderIcon(category) {

    if(category === 'LAPTOP'){
      return <AiOutlineLaptop/>
    }

    if(category === 'GABINETE'){
      return <PiDesktopTowerDuotone/>
    }

    if(category === 'MONITOR'){
      return <FiMonitor/>
    }

    if(category === 'TECLADO'){
      return <BsKeyboard/>
    }

    if(category === 'MOUSE'){
      return <BsMouse3/>
    }

  }

  return (
    <form style={{backgroundColor:'white', display:'flex', flexDirection:'column', gap:'20px', padding:'20px', width:'500px'}}>

      <Box sx={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center'}}>

      <h2>Mantenimientos</h2>

        <IconButton onClick={() => {
          dispatch({type:actionTypes.setForm, payload: false})
        }} >
          <IoIosCloseCircle/>
        </IconButton>
      </Box>

        <strong>OFCMI de activos selectionados</strong>
      <Box sx={{display:'flex', flexDirection:'row', gap:'4px', flexWrap:'wrap'}}>

        {listTags.length > 0 && (
          listTags.map((tag) => (
            <Button onClick={() => RemoveTag( listTags, dispatch, tag)} variant="outlined" color="error" key={tag}>
              {tag} 
            </Button>
          ))
        )}

        {listTags.length < 1 && (
          <span>Sin OFCMI agregados</span>
        )}
      </Box>

      <FormControl fullWidth>
      <ContainerDate title={'Fecha de inicio'} >
          <DatePicker/>
        </ContainerDate>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Tipo de mantenimiento</InputLabel>
        <Select
        value={typeMaintance}
        label={'Tipo de mantenimiento'}
        Onchangue={OnchangueMaintance}
        >

    <MenuItem value={'Mantenimiento'}>Preventivo</MenuItem>
    <MenuItem value={'Reparacion'}>Correctivo</MenuItem>
        </Select>
      </FormControl>

    <FormControl fullWidth>
      <InputLabel>Titulo del mantenimiento</InputLabel>
      <InputBase value={titleMaintance} disabled/>
    </FormControl>

    <FormControl fullWidth>
      <InputLabel>Costo</InputLabel>
      <InputBase placeholder="Ingresa el costo del mantenimiento" />
    </FormControl>

    <FormControl fullWidth>
      <InputLabel>Comentarios</InputLabel>
      <TextField value={coment} multiline />
    </FormControl>

     <FormControl fullWidth>
        <ContainerDate title={'Fecha de fin'} >
          <DatePicker/>
        </ContainerDate>
      </FormControl>

    <Button variant="contained" >Subir mantenimiento</Button>
    </form>
  );
}

export { FormMaintance };
