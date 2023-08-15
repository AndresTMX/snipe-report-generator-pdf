//utilities
import { useEffect, useState } from "react"
import dayjs from 'dayjs';
//material ui
import { IconButton, FormControl, InputLabel, Select, MenuItem, Box, TextField, Button, InputAdornment } from "@mui/material"
import { ContainerDate } from "../ContainerDateDays";
import { actionTypes } from "../../Context/MaintanceReducer";
import { UserItemMaintance } from "../UserItemMaintance";
//icons
import { IoIosCloseCircle } from "react-icons/io";
import { DatePicker } from "@mui/x-date-pickers";
//icons
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { BsMouse3 } from "react-icons/bs"; //mouse
import { FiMonitor } from "react-icons/fi"; //monitor
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
//helpers
import { RemoveMaintances , builderMaintance, switchForm, transformDate, ClearMaintances } from "../../Helpers/actionsMaintance";
//.emv Maintenances provider
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;


function FormMaintance({state, dispatch, postMaintenance}) {

  const [typeMaintance, setMaintance] = useState('Preventivo')
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

  const {maintances} = state;

  const titleMaintance = `Mantenimiento ${typeMaintance} ${Day} ${Month} ${Year}`

  function renderIcon(category) {
    if (category === "LAPTOP") {
      return <AiOutlineLaptop />;
    }

    if (category === "GABINETE") {
      return <PiDesktopTowerDuotone />;
    }

    if (category === "MONITOR") {
      return <FiMonitor />;
    }

    if (category === "TECLADO") {
      return <BsKeyboard />;
    }

    if (category === "MOUSE") {
      return <BsMouse3 />;
    }
  }

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

    switchForm(dispatch, false)
    
    const dataMaintances = {
      title:titleMaintance,
      data:maintances,
      type:typeMaintance,
      supplier_id:parseInt(providerMaintenance),
      start_date:transformDate(date.init),
      completion_date:transformDate(date.end),
    }

    const groupMaintances = builderMaintance(dataMaintances)

    const response = await postMaintenance(groupMaintances)

    ClearMaintances(dispatch);

    
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
            dispatch({ type: actionTypes.setformSendMaintances, payload: false });
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
        {maintances.length > 0 && (
          <UserItemMaintance maintances={maintances} dispatch={dispatch}/>
        )}

        {maintances.length < 1 && <span>Sin OFCMI agregados</span>}
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
          <MenuItem value={"Preventivo"}>Preventivo</MenuItem>
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
