import "./navigator.css";
import { ButtonPDF } from "../../components/ButonPDF";
import { ButtonDocStore } from "../../components/ButtonDocStore";
import { useContext } from "react";
import { DocContext } from "../../Context/DocContext";
import { DocStore } from "../../components/DocStore";
import { UserConfig } from "../../components/UserConfig";

function Navigator() {
  const [state, dispatch] = useContext(DocContext);

  const { initialStore, StatesModals } = state;

  const { modalDocStore } = StatesModals;

  const { storage } = initialStore ? initialStore : {};
  const { countAccessories, countAssets } = storage ? storage : {};
  const dataRender = storage ? [storage.assets] : [];
  const count = countAccessories + countAssets;

  return (
    <>
      <nav className="nav">
        <section className="section-buttons">
          <div className="docStore-button">
            <ButtonDocStore
              count={count}
              state={modalDocStore}
              dispatch={dispatch}
            />
          </div>

          <div className="buttonPDF-container">
            <ButtonPDF />
          </div>

        </section>

        <section className="section-docStore">
          {modalDocStore && <DocStore state={state} dispatch={dispatch} />}
        </section>

        {
        StatesModals.modalConfig && 
        (
          <UserConfig state={state} dispatch={dispatch} />
        )
      }

      </nav>

    </>
  );
}

export { Navigator };
