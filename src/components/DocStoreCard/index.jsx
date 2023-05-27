import "./docItem.css";
//componentes
import { DocStoreCardInfoUser } from "../DocStoreCardInfoUser";
import { DocStoreTable } from "../DocStoreTable";
import {DocStoreCardSelect} from "../DocStoreCardSelect";
import {DocStoreCardCheck} from "../DocStoreCardCheck";
import {DocStoreCardButtons} from "../DocStoreCardButtons";
import {DocStoreCardComent} from "../DocStoreCardComent"
import {Modal} from "../../modals/modal";

function DocStoreCard({ state, dispatch }) {

  const { initialStore, StatesModals } = state? state: {};
  const { storage } = initialStore? initialStore: {};
  const {assets, accessories} = storage? storage : {};

  return (
    <>

    <DocStoreCardInfoUser state={state} dispatch={dispatch}/>

    <DocStoreTable arrayRender={assets} typeTable={'Activos'}/>

    <DocStoreTable arrayRender={accessories} typeTable={'Accesorios'}/>

    <DocStoreCardSelect state={state} dispatch={dispatch} />

    <DocStoreCardCheck state={state} dispatch={dispatch}/>
    
    <DocStoreCardButtons state={state} dispatch={dispatch} />

    {
      StatesModals.modalComent &&
      <Modal>
        <DocStoreCardComent state={state} dispatch={dispatch} />
      </Modal>
    }
      
    </>
  );
}

export { DocStoreCard };