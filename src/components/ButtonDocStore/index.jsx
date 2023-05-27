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
        <div className="doc-store-box">

            <button className="button-store" onClick={()=> CloseDocStore()}>
                <BsFiletypeDoc className="icon" />
            </button>
            <span className="counter">{newCount}</span>
        </div>

        </>
     );
}

export {ButtonDocStore};