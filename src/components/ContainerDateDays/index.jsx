import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';


function ContainerDate ({children, title}) {
    return ( 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem label={title} component="DateRangePicker">
            {children}
            </DemoItem>
    </LocalizationProvider>
     );
}

export {ContainerDate} ;