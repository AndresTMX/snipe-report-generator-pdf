import "./DocStoreCard.css";
//componentes
import { DocStoreCardInfoUser } from "../DocStoreCardInfoUser";
import { DocStoreTable } from "../DocStoreTable";
import { DocStoreCardSelect } from "../DocStoreCardSelect";
import { DocStoreCardCheck } from "../DocStoreCardCheck";
import { DocStoreCardButtons } from "../DocStoreCardButtons";
import { DocStoreCardComent } from "../DocStoreCardComent"
import { Modal } from "../../modals/modal";

function DocStoreCard({ state, dispatch }) {

  const { initialStore, StatesModals } = state ? state : {};
  const { storage } = initialStore ? initialStore : {};
  const { assets, accessories } = storage ? storage : {};
  const {user} = storage? storage:{};


  return (
    <>

      <section className="DocStore">
        {
          user &&
            <>
              <DocStoreCardInfoUser state={state} dispatch={dispatch} />

              <DocStoreTable arrayRender={assets} typeTable={'Activos'} state={state} />

              <DocStoreTable arrayRender={accessories} typeTable={'Accesorios'} state={state} />

              <DocStoreCardSelect state={state} dispatch={dispatch} />

              <DocStoreCardCheck state={state} dispatch={dispatch} />

              <DocStoreCardButtons state={state} dispatch={dispatch} />
            </>
        }

        {
          !user && 
          <div className="not-store">
            <h3>No has agregado activos o usuarios</h3>
          </div>
        }

      </section>

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