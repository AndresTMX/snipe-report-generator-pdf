import { actionTypes as actionTypesModals } from '../../Context/StatesModalsReducer';
import { DocStoreCard } from "../DocStoreCard";
import {FaUserCog} from 'react-icons/fa';
import "./DocStore.css";

function DocStore({ state, dispatch }) {

    const { initialStore, StatesModals } = state;
    const { modalDocStore } = StatesModals;
    const { storage } = initialStore ? initialStore : {};
    const {user} = storage? storage:{};
    
    const CloseDocStore = () => {
        dispatch({type: actionTypesModals.setModalDocStore, payload: !modalDocStore})
    }

    const SwitchModal = () => {
        dispatch({type: actionTypesModals.setModalConfig, payload: !actionTypesModals.setModalConfig})
      }
    

    return (
        <section className="docStore">
           <div className="button-container">
           {user && (
             <button 
             className="button-config"
             title="Editar emisor"
            onClick={() => SwitchModal()} >
             <FaUserCog/>
             </button>
            )}
           <button onClick={()=> CloseDocStore() }>X</button>
           </div> 
            <DocStoreCard
            state={state}
            dispatch={dispatch}
        />
        </section>

    );
}

export { DocStore };