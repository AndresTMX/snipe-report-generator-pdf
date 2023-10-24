import InputBase from '@mui/material/InputBase';
import PropTypes from 'prop-types'
import { Paper,  InputAdornment, IconButton} from '@mui/material';
import {BiSearchAlt2} from 'react-icons/bi'

/**
 * Un input de busqueda listo para recibir props que puedes poner en cualquier lugar de la aplicación
 */

function InputSearch({state, setState, placeholder, action, width, onKey}) {
    
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
        </Paper>
     );
}

export {InputSearch};

InputSearch.propTypes = {
  /**
   * El estado del searcher declarado con useState
   */
  state: PropTypes.string.isRequired,
  /**
   * La funcion actualizadora del estado
   */
  setState: PropTypes.func.isRequired,
  /**
   * El texto en el interior del input
   */
  placeholder: PropTypes.string,
  /**
   * la funcion que se ejecuta al hacer click en el boton
   */
  action: PropTypes.func.isRequired,
  /**
   * El largo que quieres que ocupe el searcher respecto al contenedor en px o %
   */
  width: PropTypes.string,
  /**
   * La funcion que se ejecuta el presionar enter dentro del searcher
   */
  onKey: PropTypes.func.isRequired, 
};

InputSearch.defaultProps = {
  state: undefined,
  setState:() => {},
  placeholder:undefined,
  action:() => {},
  width:undefined,
  onKey:() => {},
};
