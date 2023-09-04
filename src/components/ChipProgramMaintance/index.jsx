import { Box, Chip, Typography,Stack, Skeleton } from "@mui/material";
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";

function ChipProgramMaintance({ configState, loading, updateMonthComplete}) {

    return ( 
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '90%', margin: 'auto', gap: '10px' }}>

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
                    }}
                    elevation={4}
                >
                    {configState.map((item, index) => (
                        <Chip
                            disabled={item.monthComplete != "" ? true : false}
                            key={index}
                            size="medium"
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