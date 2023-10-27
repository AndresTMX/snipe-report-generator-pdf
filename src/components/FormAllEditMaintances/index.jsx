import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers"
import { ContainerDate } from "../ContainerDateDays"
import { months, especificDate, currentDate } from "../../Helpers/Date";
import {  FormControl, InputLabel, Select, MenuItem, Box, TextField, Button} from "@mui/material"

function FormAllEditMaintances({setEditAll, updateAll}) {

    const [typeMaintance, setMaintance] = useState('Preventivo')
    const [dateDefault, setDate] = useState({init:currentDate, end:currentDate});
    const [edit, setEdit] = useState(false)
    const titleDinamic =`Mantenimiento ${typeMaintance} ${especificDate(dateDefault.init).$D} ${months[especificDate(dateDefault.init).$M].month} ${especificDate(dateDefault.init).$y}`
    const [title, setTitle] = useState(titleDinamic)

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

    return ( 
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}>

            <Box
                sx={{
                    display: 'flex',
                    gap: '10px'
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
            </Box>


            <FormControl
                error={edit ? true : false}
                fullWidth>
                <InputLabel>Tipo de mantenimiento</InputLabel>
                <Select
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
                    value={titleDinamic}
                    error={edit ? true : false}
                />
            </FormControl>

            <Button
                color="error"
                variant="contained"
                onClick={() => setEditAll(false)}>
                {edit ? 'Descartar cambios' : 'Cerrar'}
            </Button>

     
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        updateAll(typeMaintance, titleDinamic, dateDefault.init, dateDefault.end)
                        setEdit(!edit)
                    }}
                >Guardar cambios
                </Button>
        </Box>
     );
}

export {FormAllEditMaintances};