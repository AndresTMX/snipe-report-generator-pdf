import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useTitleDocument } from "../../Hooks/useTitleDocument";

function DocStoreCardSelect({state, dispatch}) {

    const { initialStore, StatesModals } = state? state: {};
    const { storage } = initialStore? initialStore: {};

    const {title} = useTitleDocument(storage?.typeDocument)


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
      <FormControl sx={{ display: "flex", flexDirection: "column" }}>
        <InputLabel>Tipo de documento</InputLabel>
        <Select
          value={storage? storage.typeDocument:''}
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
      </FormControl>
    );
}

export { DocStoreCardSelect };