import { Container, Box, Select, MenuItem, Paper, FormControl } from "@mui/material";
import { months } from "../../Helpers/Date";
function ProgramMaintance() {
    
    return ( 
        <Container>

            <Paper>

                <strong>Sucursal</strong>

                <Box>
                    <FormControl>
                        <Select>
                            {months.map((item) => (
                                <MenuItem key={item.month} value={item.month}>{item.month}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

            </Paper>
        
        </Container>
     );
}

export {ProgramMaintance};