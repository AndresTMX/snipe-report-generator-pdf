import { Box, Chip, Typography,Stack, Skeleton } from "@mui/material";
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";
import useMediaQuery from "@mui/material/useMediaQuery";

function ChipProgramMaintance({ configState, loading, updateMonthComplete}) {

    const isMovile = useMediaQuery('(max-width:950px)');

    return ( 
        <>
            <Box 
            sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '90%', 
            margin: 'auto', 
            gap: '10px',
            }}>

                <Typography variant="subtitle2">
                    Programa de mantenimientos
                </Typography>

                {loading && (
                    <Stack spacing={1} direction={"row"} >
                        <Skeleton variant="rectangular" sx={{ width: '80px', height: '30px', borderRadius: '15px' }} />
                        <Skeleton variant="rectangular" sx={{ width: '80px', height: '30px', borderRadius: '15px' }} />
                        <Skeleton variant="rectangular" sx={{ width: '80px', height: '30px', borderRadius: '15px' }} />
                    </Stack>
                )}

                {!loading && (<Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        flexWrap:'wrap'
                    }}
                    elevation={4}
                >
                    {configState.map((item, index) => (
                        <Chip
                            disabled={item.monthComplete != "" ? true : false}
                            key={index}
                            size={isMovile? 'small': 'medium'}
                            label={item.monthProgram ? item.monthProgram : 'Sin programar'}
                            color={item.status ? 'success' : 'warning'}
                            onClick={() => updateMonthComplete(index)}
                            icon={
                                item.status ?
                                    <IoIosCheckmarkCircle /> : <IoIosCloseCircle />
                            }

                        />
                    ))}

                </Box>)}

            </Box>
        </>
     );
}

export {ChipProgramMaintance};