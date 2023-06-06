import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";

function DocStoreCardComent({state, dispatch}) {

    const { initialStore, StatesModals } = state? state: {};
    const { storage } = initialStore? initialStore: {};
    const {coment} = storage? storage: 'valor random';

    const CloseBoxComent = () => {
    
        const newState = { ...storage, coment: "" };
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState,
        });
    
        dispatch({
          type: actionTypesModals.setModalComent,
          payload: !StatesModals.modalComent,
        });
      };
    
      const OnChangueText = (event) => {

        const newState = { ...storage, coment: event.target.value };
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState
        });
      };
    
      const AddComentDocument = () => {
    
        const newState = { ...storage, coment };
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState
        });
    
        dispatch({
          type: actionTypesModals.setModalComent,
          payload: !StatesModals.modalComent
        });
      };

    return ( 
        <>
        <section className="Modal-input-text">
          <div className="box-coment">
            <div className="box-coment-button">
              <button onClick={() => CloseBoxComent()}>x</button>
            </div>
            <p>Agregue comentarios para complementar su documento</p>
            <textarea
              onChange={(event) => OnChangueText(event)}
              value={coment}
            />
            <div className="box-coment-button">
              <button onClick={() => AddComentDocument()}>
                Agregar comentarios
              </button>
            </div>
          </div>
        </section>
        </>
     );
}

export {DocStoreCardComent};