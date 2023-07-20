import { Container , Box, Paper,  InputAdornment, IconButton} from '@mui/material';
import {BiSearchAlt2} from 'react-icons/bi'
import InputBase from '@mui/material/InputBase';


function InputSearch({state, setState, resultSearch, placeholder, action, width, onKey}) {

    const result = resultSearch? resultSearch: 0;

    
    const onSearchValueChangue = (event) => {
        setState(event.target.value.toLowerCase());
      };

    return ( 
        <Paper elevation={2} sx={{display:'flex', flexDirection:'row', alignItems:'center', height:'40px', justifyContent:'space-between', width:{width}}}>
            <InputBase onKeyUp={onKey} sx={{display:'flex', height:'100%', width:'90%', padding:'10px'}}  type="text" value={state.toString()} onChange={onSearchValueChangue} placeholder={placeholder}/>
            <InputAdornment position="start">
                <IconButton onClick={action} sx={{backgroundColor:'#0071bb', borderRadius:'0px', left:'10px', color:'white', "&: hover" :{
                  backgroundColor:'#044F80',

                }}}>
                  <BiSearchAlt2/>
                </IconButton> 
            </InputAdornment>
            {/* <span>Resultados : {result}</span> */}
        </Paper>
     );
}

export {InputSearch};