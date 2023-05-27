import './navigator.css';
import { DocStoreCard } from "../../components/DocStoreCard";
import { ButtonPDF } from '../../components/ButonPDF';
import { ButtonDocStore } from '../../components/ButtonDocStore';
import {useContext} from 'react';
import { DocContext } from '../../Context/DocContext';
import { DocStore } from '../../components/DocStore';

function Navigator() {

    const [state, dispatch] = useContext(DocContext);

    const { initialStore, StatesModals } = state;

    const { modalDocStore } = StatesModals

    const { storage } = initialStore? initialStore: {};
    const {countAccessories, countAssets} = storage? storage:{};
    const dataRender = storage? [storage.assets]: [];
    const count = countAccessories + countAssets;
    
    return (
      <>
        <nav className="nav">
          <span className="name-nav">Snipe Report Generator</span>

          <section>
           <div className="docStore-button">
              <ButtonDocStore count={count} state={modalDocStore} dispatch={dispatch}/>
           </div>

            <div className="buttonPDF-container">
              <ButtonPDF />
            </div>

          </section>


        </nav>

          {modalDocStore && (
            <DocStore state={state} dispatch={dispatch}/>
          )}
      </>
    );
}

export {Navigator};