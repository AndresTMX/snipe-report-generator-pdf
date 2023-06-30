import { Container , Box, Paper} from '@mui/material';
import {BiSearchAlt2} from 'react-icons/bi'
import InputBase from '@mui/material/InputBase';


function InputSearch({state, setState, resultSearch}) {

    const result = resultSearch? resultSearch: 0;

    
    const onSearchValueChangue = (event) => {
        setState(event.target.value.toLowerCase())
      };

    return ( 
        <Paper elevation={2} sx={{display:'flex', flexDirection:'row', alignItems:'center', height:'40px', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', height:'100%', width:'10%', alignItems:'center', justifyContent:'center' }}><BiSearchAlt2/></Box>
            <InputBase sx={{display:'flex', height:'100%', width:'90%'}}  type="text" value={state.toString()} onChange={onSearchValueChangue} placeholder={'Buscar usuario'}/>
            {/* <span>Resultados : {result}</span> */}
        </Paper>
     );
}

export {InputSearch};