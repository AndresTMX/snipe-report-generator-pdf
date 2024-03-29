import { InputSearch } from "../Searcher";
import { DocStoreCardInfoUser } from "../DocStoreCardInfoUser";
import { DocStoreTable } from "../DocStoreTable";
import { DocStoreCardSelect } from "../DocStoreCardSelect";
import { DocStoreCardCheck } from "../DocStoreCardCheck";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  IconButton,
  InputLabel,
} from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { ButtonPDF } from "../ButonPDF";
import { UserConfig } from "../UserConfig";

function ConfigReport({ state, dispatch, search, setSearch, searchResult }) {
  const { initialStore, StatesModals } = state;
  const { storage } = initialStore ? initialStore : {};
  const { assets, accessories } = storage ? storage : {};
  const validateContent = storage
    ? storage.user && storage.assets && storage.typeDocument
    : false;
  const date = new Date(); // fecha actual
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // agregar ceros a la izquierda si el mes es menor a 10
  const day = date.getDate().toString().padStart(2, "0"); // agregar ceros a la izquierda si el día es menor a 10
  const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

  const OpenModalComent = () => {
    dispatch({
      type: actionTypesModals.setModalComent,
      payload: !StatesModals.modalComent,
    });
  };

  const GenerateDocument = () => {
    if (!storage?.typeDocument) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Selecciona el tipo de documento que deseas generar",
      });
    }

    if (storage?.assets.length == 0) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Agrega activos para generar un documento",
      });
    }

    if (storage.typeDocument && storage.assets.length > 0) {
      const document = {
        ...storage,
        typeDocument: storage.typeDocument,
        dateDay: storage.dateDay ? storage.dateDay : formattedDate,
        manager: storage?.manager,
        complete: true,
      };

      dispatch({ type: actionTypesDoc.updateStorage, payload: document });
    }
  };

  const SwitchModal = () => {
    dispatch({
      type: actionTypesModals.setModalConfig,
      payload: !StatesModals.setModalConfig,
    });
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
        overflowY: "auto",
        paddingBottom: "40px",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "lightgray",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "gray",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingTop: "140px",
          gap: "15px",
        }}
      >
        <InputSearch
          state={search}
          setState={setSearch}
          resultSearch={searchResult}
          placeholder={'Buscar usuarios'}
          width={'100%'}
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
                gap: "20px",
              }}
            >
              <span>Configuración del documento</span>
              <AiOutlineSetting />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  sx={{ display: "flex", position: "relative", width: "50px" }}
                  title="Editar emisor"
                  onClick={() => SwitchModal()}
                >
                  <FaUserCog />
                </IconButton>
                <span>Editar emisor</span>
              </Box>

                <DocStoreCardSelect state={state} dispatch={dispatch} />
                <DocStoreCardCheck state={state} dispatch={dispatch} />

              <Button variant="contained" onClick={OpenModalComent}>
                Agregar comentarios
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={GenerateDocument}>
            Vista Previa
          </Button>
          {validateContent && <ButtonPDF />}
          {!validateContent && (
            <Button variant="contained" onClick={GenerateDocument}>
              Descargar
            </Button>
          )}
        </Box>

        {StatesModals.modalConfig && (
          <UserConfig state={state} dispatch={dispatch} />
        )}
      </Box>
    </Container>
  );
}

export { ConfigReport };
