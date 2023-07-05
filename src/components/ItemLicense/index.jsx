import '../../index.css';
//Material UI
import {Box, IconButton, Container, ButtonGroup, Button, Paper } from '@mui/material';

function ItemLicense({license,manufacturer,category,expiration,notes}) {
    
    return ( 
        <>
        <Paper elevation={2} sx={{display:'flex', flexDirection:'column', width:'300px', gap:'10px', padding:'20px'}}>

            <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}> 
                <p className='subtitle'>{category}</p>
                <p className='subtitle'>{manufacturer}</p>
            </Box>

            <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h3 className='h3 title'>{license}</h3>
                <p className='text'>{notes}</p>
            </Box>

            <Box>
                <h4 className='h4'>{expiration? expiration.toString(): 'Fecha de expriración no registrada'}</h4>
            </Box>

        </Paper>
        </>  
     );
}

export {ItemLicense};