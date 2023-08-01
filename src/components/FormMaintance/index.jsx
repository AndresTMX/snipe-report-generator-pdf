//utilities
import { useEffect, useState } from "react"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
//material ui
import { IconButton, FormControl, InputLabel, Select, MenuItem, Box, InputBase, TextField, Button, InputAdornment } from "@mui/material"
import { ContainerDate } from "../ContainerDateDays";
import { actionTypes } from "../../Context/MaintanceReducer";
//icons
import { IoIosCloseCircle } from "react-icons/io";
import { DatePicker } from "@mui/x-date-pickers";
//helpers
import { RemoveTag, builderMaintance, costMaintance, transformDate } from "../../Helpers/actionsMaintance";
//Hooks
import { useSendMaintances } from "../../Hooks/useSendMaintances";
//.emv Maintenances provider
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;


function FormMaintance({state, dispatch}) {
  
  
  const [typeMaintance, setMaintance] = useState('')
  const [provider, setProvider] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState({
    init:'',
    end:''
  })
  
  useEffect(() =>  {
    const dateCurrent = dayjs()
    setDate({init: dateCurrent, end: dateCurrent})
    setProvider(providerMaintenance)
  },[])

  const {postMaintenance, maintance, loading, error} = useSendMaintances();
  
  const dateNow = dayjs()   

  const allMonths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]

  const Year = dateNow.$y

  const Month = allMonths[dateNow.$M]

  const Day = dateNow.$D

  const {listTags} = state;

  const type = typeMaintance != 'Repair'? 'Preventivo':'Correctivo';

  const titleMaintance = `Mantenimiento ${type} ${Day} ${Month} ${Year}`

  const handleChangue = (setState) => (e) => {
    setState(e.target.value)
  }

  const hanldeDate = (keyState) => (newDate) => {
    setDate({
      ...date,
      [keyState]: newDate.$d
    })
  }

  const SendMaintenance = async (e) => {

    e.preventDefault();
    
    const dataMaintances = {
      title:titleMaintance,
      data:listTags,
      type:typeMaintance,
      supplier_id:parseInt(providerMaintenance),
      start_date:transformDate(date.init),
      completion_date:transformDate(date.end),
    }

    const maintances = builderMaintance(dataMaintances)

    const response = await postMaintenance(maintances)

    return response    
  }

  return (
    <form onSubmit={SendMaintenance}
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        width: "500px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Mantenimientos</h2>

        <IconButton
          onClick={() => {
            dispatch({ type: actionTypes.setForm, payload: false });
          }}
        >
          <IoIosCloseCircle />
        </IconButton>
      </Box>

      <strong>OFCMI de activos selectionados</strong>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          flexWrap: "wrap",
        }}
      >
        {listTags.length > 0 &&
          listTags.map((item) => (
            <Button
              onClick={() => RemoveTag(listTags, dispatch, item)}
              variant="outlined"
              color="error"
              key={item.tag}
            >
              {item.tag}
            </Button>
          ))}

        {listTags.length < 1 && <span>Sin OFCMI agregados</span>}
      </Box>

      <FormControl fullWidth>
        <ContainerDate title={"Fecha de inicio"}>
          <DatePicker 
          value={date.init}
          onChange={hanldeDate('init')}
          renderInput={(props) => <TextField {...props} />}
          />
        </ContainerDate>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Tipo de mantenimiento</InputLabel>
        <Select
          value={typeMaintance}
          label={"Tipo de mantenimiento"}
          onChange={handleChangue(setMaintance)}
        >
          <MenuItem value={"Mantenimiento"}>Preventivo</MenuItem>
          <MenuItem value={"Correctivo"}>Correctivo</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField label='Titulo del mantenimiento' value={titleMaintance}/>
      </FormControl>

      <FormControl fullWidth>
        <ContainerDate title={"Fecha de fin"}>
          <DatePicker 
          value={date.end}
          onChange={hanldeDate('end')}
          renderInput={(props) => <TextField {...props} />} 
          />
        </ContainerDate>
      </FormControl>

      <Button type="submit" variant="contained">Subir mantenimientos</Button>
    </form>
  );
}

export { FormMaintance };
