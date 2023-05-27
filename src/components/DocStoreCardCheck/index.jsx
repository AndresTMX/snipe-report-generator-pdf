import { useState } from "react";
import "./DocStoreCardCheck.css";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { useGetComponents } from '../../Hooks/useGetComponents';

function DocStoreCardCheck({state, dispatch}) {
  
  const { initialStore, StatesModals } = state? state: {};
  const { storage } = initialStore? initialStore: {};
  const {assets, accessories} = storage? storage : {};
  const { dataComponents } = useGetComponents(assets, true);
  const [stateComponents, setComponents] = useState(false);
  const [stateBecario, setBecario] = useState(false);

    const handleCheckComponents = () => {

        let newState = {};
    
        if (!state) {
          setComponents(!stateComponents);
    
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
    }
    
    return (
        <>
            <div className="box-checkbox">
                <input type="checkbox"
                    checked={stateComponents}
                    onChange={(e) => handleCheckComponents(stateComponents)}
                />
                <p>Incluir componentes</p>
            </div>

            <div className="box-checkbox">
                <input type="checkbox"
                    checked={stateBecario}
                    onChange={(e) => handleCheckBecario(stateBecario)}
                />
                <p>Para practicante/becario</p>
            </div>
        </>
    );
}

export { DocStoreCardCheck };