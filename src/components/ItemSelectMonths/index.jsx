import { useState } from "react";
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
    Tabs,
    Tab,
} from "@mui/material";
import { CustomTabPanel } from '../../sections/CustomPanel';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io";


function ItemSelectMonths({location}) {

    const { configState, loading, handleMonthChange, handleMonthComplete, ToggleStatus } = useProgramMaintances(location.description)

    const [tab, setTabs] = useState(0)

    const handleTab = (event, newValue) => {
        setTabs(newValue)
    }

    return ( 
        <Paper
        elevation={4}
        >

            {loading && (
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" sx={{ width: '100%', height: '145px' }} />
                </Stack>
            )}

            {loading === false && (
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px',
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginBottom: '15px'
                        }}
                    >
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center' }}
                            variant="subtitle2"
                            fontWeight="600"
                        >
                            {location.description}
                        </Typography>

                    </Box>

                    <Tabs
                        value={tab}
                        onChange={handleTab}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                    >
                        <Tab label="Programado" />
                        <Tab label="Realizado" />
                    </Tabs>

                    <CustomTabPanel value={tab} index={0}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                                width: '100%',
                                gap: '20px',
                                '@media (max-width:600px)': {
                                    flexWrap: 'wrap',
                                    flexDirection: 'column',

                                }
                            }}
                        >
                            {configState.map((item, index) => (

                                <FormControl
                                    sx={{
                                        display: 'flex',
                                        width: '30%',
                                        '@media (max-width:600px)': {
                                            width: '100%'
                                        }
                                    }}
                                    key={index}
                                    size="small"
                                >

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

                                </FormControl>
                            ))}
                        </Box>
                    </CustomTabPanel>

                    <CustomTabPanel value={tab} index={1} >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                                width: '100%',
                                gap: '20px',
                                '@media (max-width:600px)': {
                                    flexWrap: 'wrap',
                                    flexDirection: 'column',
                                }
                            }}
                        >
                            {configState.map((item, index) => (

                                <FormControl
                                    sx={{
                                        display: 'flex',
                                        width: '30%',
                                        '@media (max-width:600px)': {
                                            width: '100%'
                                        }
                                    }}
                                    key={index}
                                    size="small">

                                    <InputLabel>{`${index + 1} Mantenimiento`}</InputLabel>
                                    <Select
                                        key={index}
                                        value={item.monthComplete}
                                        label={`${index + 1} Mantenimiento`}
                                        onChange={(e) => handleMonthComplete(index, e.target.value)}
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
                            ))}
                        </Box>
                    </CustomTabPanel>

                </Container>)}
        </Paper>
     );
}

export { ItemSelectMonths };
