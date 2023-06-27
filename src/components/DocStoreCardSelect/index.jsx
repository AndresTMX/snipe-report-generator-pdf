import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { FormLabel, Select, MenuItem } from "@mui/material";

function DocStoreCardSelect({state, dispatch}) {

    const { initialStore, StatesModals } = state? state: {};
    const { storage } = initialStore? initialStore: {};


    const OnChangueOption = (e) => {

        const newState =  {
            ...storage,
            complete: false,
            typeDocument:e.target.value
        }
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState,
        });
    
    }

    return (
      <FormLabel>
        Tipo de documento
        <Select
          variant="standard"
          disableUnderline
          onChange={(e) => OnChangueOption(e)}
        >
          <MenuItem value={"MP"}>Mantenimiento preventivo</MenuItem>
          <MenuItem value={"MC"}>Mantenimiento correctivo</MenuItem>
          <MenuItem value={"CL"}>Check List de Equipos</MenuItem>
          <MenuItem value={"VB"}>Baja de equipos</MenuItem>
          <MenuItem value={"CR"}>Carta responsiva</MenuItem>
        </Select>
      </FormLabel>
    );
}

export { DocStoreCardSelect };