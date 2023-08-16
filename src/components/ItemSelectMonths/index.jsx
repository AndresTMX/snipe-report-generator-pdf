import { months } from "../../Helpers/Date";
import { LuSaveAll } from 'react-icons/lu'
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";
import { FormControl, InputLabel, Select, MenuItem, Typography, Container, Box, Button, IconButton } from "@mui/material";

function ItemSelectMonths({location}) {

    const { configState, configuration, saveConfig, setConfig } = useProgramMaintances(location)

    return ( 
        <>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding:'20px',
                    
                }}
            >

                <Box
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    marginBottom:'20px',
                    justifyContent:'space-between',
                    alignITems:'center',
                    marginTop:'5px',
                    gap:'20px',
                }}
                >
                    <Typography
                    sx={{display:'flex', alignItems:'center'}}
                    variant="subtitle2"
                    fontWeight="500"
                    >
                        {location.description}
                    </Typography>

                    <IconButton
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={saveConfig}
                    >
                        <LuSaveAll/>
                    </IconButton>

                </Box>
                   
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    gap:'10px'
                }}
                >   

                    <FormControl
                    size="small"
                    sx={{
                        width:'20%'
                    }}
                    >
                        <InputLabel>1 Mantenimiento</InputLabel>
                        <Select
                            value={configState.monthOne}
                            label='1 Mantenimiento'
                            onChange={(e) => setConfig({ ...configState, monthOne: e.target.value })}
                        >
                            {months.map((item) => (
                                <MenuItem value={item.month}>{item.month}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>

                    <FormControl
                    size="small"
                    sx={{
                        width:'20%'
                    }}
                    >
                        <InputLabel>2 Mantenimiento</InputLabel>
                        <Select
                            value={configState.monthTwo}
                            label='2 Mantenimiento'
                            onChange={(e) => setConfig({ ...configState, monthTwo: e.target.value })}
                        >
                            {months.map((item) => (
                                <MenuItem value={item.month}>{item.month}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>

                    <FormControl
                    size="small"
                    sx={{
                        width:'20%'
                    }}
                    >
                        <InputLabel>3 Mantenimiento</InputLabel>
                        <Select
                            value={configState.monthThre}
                            label='3 Mantenimiento'
                            onChange={(e) => setConfig({ ...configState, monthThre: e.target.value })}
                        >
                            {months.map((item) => (
                                <MenuItem value={item.month}>{item.month}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>


                </Box>
            </Container>
        </>
     );
}

export { ItemSelectMonths };