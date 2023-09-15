import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers"
import { ContainerDate } from "../ContainerDateDays"
import { CustomTabPanel } from "../../sections/CustomPanel"
import { months, especificDate } from "../../Helpers/Date";
import {  FormControl, InputLabel, Select, MenuItem, Box, TextField, Button} from "@mui/material"

function FormsMaintancesItem({item, index, value, setSelectUser, update}) {

    const [title, setTitle] = useState(item.title)
    const [typeMaintance, setMaintance] = useState(item.asset_maintenance_type)
    const [dateDefault, setDate] = useState({init:item.start_date, end:item.completion_date});
    const [edit, setEdit] = useState(false)
  
      const handleDateInit = (newValue) => {
        setEdit(true)
          setDate({
            ...dateDefault,
            init: newValue
          })
        }
      
      const handleDateEnd = (newValue) => {
        setEdit(true)
          setDate({
            ...dateDefault,
            end: newValue
          })
        }
  
      const handleType = (newValue) => {
        setEdit(true)
          setMaintance(newValue)
          const newType = typeMaintance === 'Preventivo'? 'Correctivo':'Preventivo'
          setTitle(newType)
        }

      const save = (index) => {
        update(index, item.tag, 
            {title:titleDinamic, 
            asset_maintenance_type:typeMaintance,
            start_date:dateDefault.init,
            completion_date:dateDefault.end 
            })
            setEdit(false)
      }

      const titleDinamic = item.edtiable? 
      `Mantenimiento ${typeMaintance} ${dateDefault.init.$D} ${months[dateDefault.init.$M].month} ${dateDefault.init.$y}`:
      `Mantenimiento ${typeMaintance} ${especificDate(dateDefault.init).$D} ${months[especificDate(dateDefault.init).$M].month} ${especificDate(dateDefault.init).$y}`

    return ( 
        <CustomTabPanel key={item.id} value={value} index={index}>
             <Box sx={{
              display:'flex',
              flexDirection:'column',
              gap:'15px'
              }}>

            {item.editable && (<Box 
            sx={{
                display:'flex',
                gap:'10px'
            }}
            >
                 <FormControl>
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
                 </FormControl>

                 <FormControl >
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
                </FormControl>
            </Box>)}
            

            <FormControl
                error={edit ? true : false}
                fullWidth>
                <InputLabel>Tipo de mantenimiento</InputLabel>
                <Select
                    disabled={!item.editable? true: false }
                    value={typeMaintance}
                    label={"Tipo de mantenimiento"}
                    onChange={(e) => handleType(e.target.value)}
                >
                    <MenuItem value={"Preventivo"}>Preventivo</MenuItem>
                    <MenuItem value={"Correctivo"}>Correctivo</MenuItem>
                    <MenuItem value={"Pendiente"}>Pendiente</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <TextField
                    label='Titulo del mantenimiento'
                    value={titleDinamic}
                    error={edit? true : false}
                />
            </FormControl>

            <Button 
            color="error" 
            variant="contained"
            onClick={() => setSelectUser(null)}>
             {edit? 'Descartar cambios' : 'Cerrar'}
            </Button>

            {item.editable && (
            <Button 
            color="primary" 
            variant="contained"
            onClick={() => save(index)}
            >Guardar cambios
            </Button>)}

             </Box>
          </CustomTabPanel>
     );
}

export {FormsMaintancesItem};