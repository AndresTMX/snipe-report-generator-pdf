import { useState } from "react"
import { ContainerDate } from "../ContainerDateDays"
import { DatePicker } from "@mui/x-date-pickers"
import { CustomTabPanel } from "../../sections/CustomPanel"
//icons
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
import {MdModeEditOutline} from 'react-icons/md'; //edit
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { FiMonitor } from "react-icons/fi"; //monitor
import { BsMouse3 } from "react-icons/bs"; //mouse

import {  FormControl, InputLabel, Select, MenuItem, Box, TextField, Button,Tabs, Tab } from "@mui/material"

function FormEditMaintances({dispatch, selectUser, selectItem, setSelectItem, setSelectUser}) {
    
    const [value, setValue] = useState(0);
    const [title, setTitle] = useState('title')
    const [typeMaintance, setMaintance] = useState('tipe')
    // const [dateDefault, setDate] = useState({init:date, end:date});
    const edit = true

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

    const handleType = (newValue) => {
        setMaintance(newValue)
        const newType = typeMaintance != 'Preventivo'? 'Correctivo':typeMaintance
        setTitle(`Mantenimiento ${newType} ${date.init.$D} ${months[date.init.$M]} ${date.init.$y}`)
    }

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    function renderIcon(category) {
        if (category.toLowerCase().includes("laptop")) {
          return <AiOutlineLaptop />;
        }
        
        if (category.toLowerCase().includes("gabinete")) {
          return <PiDesktopTowerDuotone />;
        }
        
        if (category.toLowerCase().includes("monitor")) {
          return <FiMonitor />;
        }
        
        if (category.toLowerCase().includes("teclado")) {
          return <BsKeyboard />;
        }
        
        if (category.toLowerCase().includes("mouse")) {
          return <BsMouse3 />;
        }
    }

    return ( 
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            gap:'15px'
        }}>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"

          >
            {selectUser.map((item) => (
                 <Tab key={item.id} label={item.tag} icon={renderIcon(item.device)} iconPosition="start"  />
            ))} 
          </Tabs>
        </Box>



            {/* <FormControl
                fullWidth>
                <ContainerDate title={"Fecha de inicio"} >
                    <DatePicker
                        sx={{
                            border: '1px',
                            borderStyle: 'solid',
                            borderColor: `${edit ? 'red' : 'transparent'}`,
                            borderRadius: '4px'
                        }}
                        format="DD/MM/YYYY"
                        value={dateDefault.init}
                        onChange={(newValue) => handleDateInit(newValue)}
                        renderInput={(props) => <TextField {...props} />}
                    />
                </ContainerDate>
            </FormControl> */}

            <FormControl
                error={edit ? true : false}
                fullWidth>
                <InputLabel>Tipo de mantenimiento</InputLabel>
                <Select
                    defaultValue="Preventivo"
                    value={typeMaintance}
                    label={"Tipo de mantenimiento"}
                    onChange={(e) => handleType(e.target.value)}
                >
                    <MenuItem value={"Preventivo"}>Preventivo</MenuItem>
                    <MenuItem value={"Correctivo"}>Correctivo</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <TextField
                    label='Titulo del mantenimiento'
                    value={title}
                    error={edit ? true : false}
                />
            </FormControl>

            {/* <FormControl fullWidth>
                <ContainerDate title={"Fecha de fin"}>
                    <DatePicker
                        sx={{
                            border: '1px',
                            borderStyle: 'solid',
                            borderColor: `${edit ? 'red' : 'transparent'}`,
                            borderRadius: '4px'
                        }}
                        format="DD/MM/YYYY"
                        value={dateDefault.end}
                        onChange={(newValue) => handleDateEnd(newValue)}
                        renderInput={(props) => <TextField {...props} />}
                    />
                </ContainerDate>
            </FormControl> */}

            <Button color="primary" variant="contained">Guardar cambios</Button>
            <Button color="error" variant="contained" onClick={() => setSelectUser(null)}>Descartar cambios</Button>
        </Box>
     );
}

export {FormEditMaintances};