import "./navigator.css";
import '@fontsource/roboto/500.css';
import { ButtonPDF } from "../../components/ButonPDF";
import { ButtonDocStore } from "../../components/ButtonDocStore";
import { useContext } from "react";
import { DocContext } from "../../Context/DocContext";
import { DocStore } from "../../components/DocStore";
import { UserConfig } from "../../components/UserConfig";
import { Button } from "@mui/material";
import { Container } from "@mui/material";

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
            <ButtonDocStore
              count={count}
              state={modalDocStore}
              dispatch={dispatch}
            />

            <Button
            variant="text"
            sx={{
              color:'white',
              fontWeight:'700',
              fontSize:'12px',
              fontFamily:'roboto',
            }}
            >
              Reportes
            </Button>

            <Button
             variant="text"
            sx={{
              color:'white',
              fontWeight:'700',
              fontSize:'12px',
              fontFamily:'roboto',
            }}>
              Mantenimientos
            </Button>

          {/* <div className="buttonPDF-container">
            <ButtonPDF />
          </div> */}

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
