import './ButtonDocStore.css';
import { BsFiletypeDoc } from 'react-icons/bs';
import { actionTypes as actionTypesModals } from '../../Context/StatesModalsReducer';

function ButtonDocStore({state, dispatch, count}) {
    
    const newCount = count? count: 0;

    const CloseDocStore = () => {
        dispatch({type: actionTypesModals.setModalDocStore, payload: !state})
    }

    return ( 
        <>
            <button className="doc-store-box" onClick={()=> CloseDocStore()}>
            <span className="counter">{newCount}</span>
            </button>
        </>
     );
}

export {ButtonDocStore};