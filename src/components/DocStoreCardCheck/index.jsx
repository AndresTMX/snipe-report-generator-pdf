import { useState } from "react";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { useGetComponents } from "../../Hooks/useGetComponents";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

function DocStoreCardCheck({ state, dispatch }) {
  const { initialStore, StatesModals } = state ? state : {};
  const { storage } = initialStore ? initialStore : {};
  const { assets, accessories } = storage ? storage : {};
  const [stateComponents, setComponents] = useState(false);
  const [stateBecario, setBecario] = useState(false);
  const { dataComponents, loading } = useGetComponents(assets, stateComponents);

  const handleCheckComponents = () => {
    let newState = {};

    if (!stateComponents && loading) {
      setComponents(true);

      newState = {
        ...storage,
        complete: false,
        checkComponents: true,
        components: dataComponents,
      };
    } else {
      setComponents(!stateComponents);

      newState = {
        ...storage,
        complete: false,
        checkComponents: false,
        components: [],
      };
    }

    dispatch({ type: actionTypesDoc.updateStorage, payload: newState });
  };

  const handleCheckBecario = () => {
    let newState = {};

    if (!stateBecario) {
      setBecario(!stateBecario);

      newState = {
        ...storage,
        becario: true,
      };
    } else {
      setBecario(!stateBecario);

      newState = {
        ...storage,
        becario: false,
      };
    }

    dispatch({ type: actionTypesDoc.updateStorage, payload: newState });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={stateComponents}
            onChange={(e) => handleCheckComponents(stateComponents)}
          />
        }
        label={"Incluir componentes"}>
        </FormControlLabel>

      <FormControlLabel
        control={
          <Switch
            checked={stateBecario}
            onChange={(e) => handleCheckBecario()}
          />
        }
        label={"Para practicante/becario"}>
        </FormControlLabel>
    </FormGroup>
  );
}

export { DocStoreCardCheck };
