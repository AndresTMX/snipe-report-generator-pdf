import { InputSearch } from "../Searcher";
import { DocStoreCardInfoUser } from "../DocStoreCardInfoUser";
import { DocStoreTable } from "../DocStoreTable";
import { DocStoreCardSelect } from "../DocStoreCardSelect";
import { DocStoreCardCheck } from "../DocStoreCardCheck";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import {Container, Box, Accordion, AccordionSummary, AccordionDetails, Button,} from '@mui/material';
import {AiOutlineSetting} from 'react-icons/ai';



function ConfigReport({state, dispatch, search, setSearch, searchResults}) {

    const { initialStore, StatesModals } = state;    
    const { storage } = initialStore? initialStore: {};
    const { assets, accessories } = storage ? storage : {};

    const date = new Date(); // fecha actual
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // agregar ceros a la izquierda si el mes es menor a 10
    const day = date.getDate().toString().padStart(2, '0'); // agregar ceros a la izquierda si el día es menor a 10
    const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

    const OpenModalComent = () => {
        dispatch({
          type: actionTypesModals.setModalComent,
          payload: !StatesModals.modalComent,
        });
      };
    
    const GenerateDocument = () => {

        if(storage?.typeDocument && storage?.assets){
            const document = {
                ...storage,
                typeDocument: storage.typeDocument,
                dateDay: storage.dateDay ? storage.dateDay : formattedDate,
                manager: storage?.manager,
                complete: true
            };
          
            dispatch({ type: actionTypesDoc.updateStorage, payload: document });
        }
        
        if(!storage?.typeDocument){
            dispatch({ type:actionTypesModals.setModalNotification, payload:'Selecciona el tipo de documento que deseas generar'})
        }

        if(!storage?.assets){
            dispatch({ type:actionTypesModals.setModalNotification, payload:'Agrega activos para generar un documento'})
        }

      };

    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          background: "#D9D9D9",
          height: "100vh",
          position: "fixed",
          right: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingTop: "270px",
            gap: "15px",
          }}
        >
          <InputSearch
            state={search}
            setState={setSearch}
            resultSearch={searchResults}
          />

          <DocStoreCardInfoUser state={state} dispatch={dispatch} />

          <DocStoreTable
            arrayRender={assets}
            typeTable={"Activos"}
            state={state}
          />

          <DocStoreTable
            arrayRender={accessories}
            typeTable={"Accesorios"}
            state={state}
          />

          <Accordion>
            <AccordionSummary>
                 <Box
                 sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
                }}>
            <span>Configuración del documento</span>
            <AiOutlineSetting/>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{display:'flex', flexDirection:'column', gap:'15px'}}>
                <DocStoreCardSelect state={state} dispatch={dispatch}/>
                <DocStoreCardCheck state={state} dispatch={dispatch}/>
                <Button variant="contained" onClick={OpenModalComent}>Agregar comentarios</Button>
                </Box>
            </AccordionDetails>
          </Accordion>

          <Box sx={{display:'flex', flexDirection:'row', width:'100%', gap:'10px', justifyContent:'space-between'}}>
            <Button variant="contained" onClick={GenerateDocument}>Vista Peevia</Button>
            <Button variant="contained">Descargar</Button>
          </Box>


        </Box>
      </Container>
    );
}

export  {ConfigReport};