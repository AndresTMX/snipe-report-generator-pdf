import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { GrDocumentConfig} from "react-icons/gr";
import { BsChatSquareTextFill } from "react-icons/bs";
import "./DocStoreCardButton.css";

function DocStoreCardButtons({state, dispatch}) {

    const { initialStore, StatesModals } = state? state: {};
    const { storage } = initialStore? initialStore: {};
    const date = new Date(); // fecha actual
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // agregar ceros a la izquierda si el mes es menor a 10
    const day = date.getDate().toString().padStart(2, '0'); // agregar ceros a la izquierda si el día es menor a 10
    const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

    const GenerateDocument = () => {

        const prevState = storage;
    
        const document = {
          ...prevState,
          typeDocument: storage.typeDocument,
          dateDay: storage.dateDay ? storage.dateDay : formattedDate,
          manager: storage?.manager,
          complete: true
        };

        console.log(document)
    
       dispatch({ type: actionTypesDoc.updateStorage, payload: document });
      };

    const OpenModalComent = () => {
        dispatch({
          type: actionTypesModals.setModalComent,
          payload: !StatesModals.modalComent,
        });
      };

    return (
        <>
            <div className="DocStoreCardButton">
                <button
                    title="Agregar comentario"
                    onClick={() => OpenModalComent()}
                >
                    Agregar Comentario
                    <span>
                        <BsChatSquareTextFill />
                    </span>
                </button>

                <button
                    title="tipo de documento"
                    onClick={() => GenerateDocument()}
                >
                    Generar documento
                    <span>
                        <GrDocumentConfig />
                    </span>
                </button>
            </div>
        </>
    );
}

export { DocStoreCardButtons };