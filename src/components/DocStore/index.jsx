import { actionTypes as actionTypesModals } from '../../Context/StatesModalsReducer';
import { DocStoreCard } from "../DocStoreCard";
import "./DocStore.css";

function DocStore({ state, dispatch }) {

    const { initialStore, StatesModals } = state;
    const { modalDocStore } = StatesModals;
    
    const CloseDocStore = () => {
        dispatch({type: actionTypesModals.setModalDocStore, payload: !modalDocStore})
    }

    return (
        <section className="docStore">
           <div className="button-container">
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