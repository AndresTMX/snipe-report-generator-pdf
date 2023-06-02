import "./DocStoreCardSelect.css"
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";

function DocStoreCardSelect({state, dispatch}) {

    const { initialStore, StatesModals } = state? state: {};
    const { storage } = initialStore? initialStore: {};

    const OnChangueOption = (e) => {

        const newState =  {
            ...storage,
            typeDocument:e.target.value
        }
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState,
        });
    
      }

    return (
        <div className="DocStoreCardSelect">
            <select onClick={(e) => OnChangueOption(e)}>

                <option value={"MP"}>
                    Mantenimiento preventivo
                </option>

                <option value={"MC"}>
                    Mantenimiento correctivo
                </option>

                <option value={"CL"}>
                    Check List de Equipos
                </option>

                <option value={"VB"}>
                    Baja de equipos
                </option>

                <option value={"CR"}>
                    Carta responsiva
                </option>

            </select>
        </div>
    );
}

export { DocStoreCardSelect };