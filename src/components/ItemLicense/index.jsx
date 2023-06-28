import '../../index.css';
//Material UI
import {Box, IconButton, Container, ButtonGroup, Button, Paper } from '@mui/material';

function ItemLicense({license,manufacturer,category,expiration,notes}) {
    
    return ( 
        <>
        <Container sx={{display:'flex', flexDirection:'column', width:'300px', gap:'10px', backgroundColor:'#d9d9d9', padding:'5px'}}>

            <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}> 
                <p className='subtitle'>{category}</p>
                <p className='subtitle'>{manufacturer}</p>
            </Box>

            <Box sx={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <h3 className='h3 title'>{license}</h3>
                <p className='text'>{notes}</p>
            </Box>

            <Box>
                <h4 className='h4'>{expiration? expiration: 'Fecha de expriración no registrada'}</h4>
            </Box>

        </Container>
        </>  
     );
}

export {ItemLicense};