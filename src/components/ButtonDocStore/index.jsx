import './ButtonDocStore.css';
import { BsFiletypeDoc } from 'react-icons/bs';
import { actionTypes as actionTypesModals } from '../../Context/StatesModalsReducer';

function ButtonDocStore({state, dispatch}) {
    

    const CloseDocStore = () => {
        dispatch({type: actionTypesModals.setModalDocStore, payload: !state})
    }

    return ( 
        <>
            <button className="doc-store-box" onClick={()=> CloseDocStore()}>
            </button>
        </>
     );
}

export {ButtonDocStore};