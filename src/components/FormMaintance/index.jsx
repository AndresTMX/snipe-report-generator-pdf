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

  const [edit, setEdit] = useState(false)
  const [provider, setProvider] = useState('')
  const [typeMaintance, setMaintance] = useState('')
  const [title, setTitle] = useState('')
  const [dateDefault, setDate] = useState({
    init:'',
    end:''
  });
  
  useEffect(() =>  {
    const dateCurrent = dayjs()
    setDate({init: dateCurrent, end: dateCurrent})
    setProvider(providerMaintenance)
    setMaintance('Preventivo')
    console.log('ejecucuon de reset de fechas')
  },[edit])
  
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

  const updateStatesForAsset = (title, type, dateInit, dateEnd ) => {
      setTitle(title)
      setMaintance(type)
      setDate({init:dateInit,end:dateEnd})
  }

  const handleChangue = (setState) => (e) => {
    setState(e.target.value)
  }

  const handleDateInit = (newValue) => {
    setDate({
      ...dateDefault,
      init: newValue
    })
  }

  const handleDateEnd = (newValue) => {
    setDate({
      ...dateDefault,
      end: newValue
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
      start_date:transformDate(dateDefault.init),
      completion_date:transformDate(dateDefault.end),
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
          <UserItemMaintance 
          maintances={maintances}
          title={titleMaintance}
          type={typeMaintance}
          date={dateDefault} 
          setEdit={setEdit}
          updateStates={updateStatesForAsset}
          dispatch={dispatch}/>
        )}

        {maintances.length < 1 && <span>Sin OFCMI agregados</span>}
      </Box>

      <FormControl 
      fullWidth>
        <ContainerDate title={"Fecha de inicio"} >
          <DatePicker 
          sx={{
            border:'1px',
            borderStyle:'solid',
            borderColor:`${edit? 'red': 'transparent'}`,
            borderRadius:'4px'
          }}
          format="DD/MM/YYYY"
          value={dateDefault.init}
          onChange={(newValue) => handleDateInit(newValue)}
          renderInput={(props) => <TextField {...props} />}
          />
        </ContainerDate>
      </FormControl>

      <FormControl
      error={edit? true:false} 
      fullWidth>
        <InputLabel>Tipo de mantenimiento</InputLabel>
        <Select
          defaultValue="Preventivo"
          value={typeMaintance}
          label={"Tipo de mantenimiento"}
          onChange={handleChangue(setMaintance)}
        >
          <MenuItem value={"Preventivo"}>Preventivo</MenuItem>
          <MenuItem value={"Correctivo"}>Correctivo</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <TextField 
        label='Titulo del mantenimiento' 
        value={titleMaintance}
        error={edit? true:false}
        />
      </FormControl>

      <FormControl fullWidth>
        <ContainerDate title={"Fecha de fin"}>
          <DatePicker
          sx={{
            border:'1px',
            borderStyle:'solid',
            borderColor:`${edit? 'red': 'transparent'}`,
            borderRadius:'4px'
          }}
          format="DD/MM/YYYY"
          value={dateDefault.end}
          onChange={(newValue) => handleDateEnd(newValue)}
          renderInput={(props) => <TextField {...props} />} 
          />
        </ContainerDate>
      </FormControl>

      <Button type="submit" variant="contained">Subir mantenimientos</Button>
    </form>
  );
}

export { FormMaintance };
