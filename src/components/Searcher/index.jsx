import './searcher.css';
import { Container , Box, Paper} from '@mui/material';
import {BiSearchAlt2} from 'react-icons/bi'
import InputBase from '@mui/material/InputBase';


function InputSearch({state, setState, resultSearch}) {

    const result = resultSearch? resultSearch: 0;

    
    const onSearchValueChangue = (event) => {
        setState(event.target.value.toLowerCase())
      };

    return ( 
        <Paper elevation={2} sx={{display:'flex', flexDirection:'column', alignItems:'center', height:'30px'}}>
            <InputBase  type="text" value={state.toString()} onChange={onSearchValueChangue} placeholder={'Buscar usuario'}/>
            <Box sx={{ position:'relative', top:'-25px', left:'-40%' }}><BiSearchAlt2/></Box>
            {/* <span>Resultados : {result}</span> */}
        </Paper>
     );
}

export {InputSearch};