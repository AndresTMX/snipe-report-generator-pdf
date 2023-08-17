import { Box, Chip, Typography } from "@mui/material";
import { extractLocation } from "../../Helpers/actionsMaintance";
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";

function ChipProgramMaintance({maintances}) {

    const location = extractLocation(maintances)
    
    const {  configState, loading, handleMonthChange, ToggleStatus } = useProgramMaintances(location)

    return ( 
        <>
            {loading === false &&
                (
                    <Box sx={{display:'flex', flexDirection:'column', width:'90%', margin:'auto', gap:'10px'}}>

                    <Typography variant="subtitle2">
                        Programa de mantenimientos
                    </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                            }}
                            elevation={4}
                        >
                            {configState.map((item, index) => (
                                <Chip
                                    key={index}
                                    size="medium"
                                    label={item.month? item.month : 'Sin programar'}
                                    color={item.status ? 'success' : 'warning'}
                                    onClick={() => ToggleStatus(index, !item.status)}
                                    icon={
                                        item.status ?
                                            <IoIosCheckmarkCircle /> : <IoIosCloseCircle />
                                    }

                                />
                            ))}
                        </Box>
            
            </Box>
        )}
        </>
     );
}

export {ChipProgramMaintance};