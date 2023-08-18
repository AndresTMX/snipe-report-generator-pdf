import { months } from "../../Helpers/Date";
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Container,
    Box,
    Paper,
    Stack,
    Skeleton,
    FormHelperText,
    Chip,
} from "@mui/material";
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";


function ItemSelectMonths({location}) {

    const { configState, loading, handleMonthChange, ToggleStatus } = useProgramMaintances(location.description)

    return ( 
        <Paper
        elevation={4}
        >

            {loading && (
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" sx={{ width: '100%', height: '145px' }} />
                </Stack>
            )}

            {loading === false && (<Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px',

                }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '20px',
                        justifyContent: 'space-between',
                        alignITems: 'center',
                        marginTop: '5px',
                        gap: '20px',
                    }}
                >
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        variant="subtitle2"
                        fontWeight="500"
                    >
                        {location.description}
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}
                >


                    {configState.map((item, index) => (
                        <>
                            <FormControl key={index} size="small" sx={{ width: '20%' }}>

                                <InputLabel>{`${index + 1} Mantenimiento`}</InputLabel>
                                <Select
                                    key={index}
                                    value={item.monthProgram}
                                    label={`${index + 1} Mantenimiento`}
                                    onChange={(e) => handleMonthChange(index, e.target.value)}
                                >
                                    {months.map((item) => (
                                        <MenuItem key={item.month} value={item.month}>{item.month}</MenuItem>
                                    ))}

                                </Select>
                                <FormHelperText sx={{ position: 'relative', right: '10px' }}>
                                    <Chip
                                        size="small"
                                        label={item.status ? 'realizado' : 'pendiente'}
                                        color={item.status ? 'success' : 'warning'}
                                        icon={
                                            item.status ?
                                                <IoIosCheckmarkCircle /> : <IoIosCloseCircle />
                                        }
                                        onClick={() => ToggleStatus(index, !item.status)}
                                    />
                                </FormHelperText>
                            </FormControl >
                        </>
                    ))}

                </Box>
            </Container>)}
        </Paper>
     );
}

export { ItemSelectMonths };
