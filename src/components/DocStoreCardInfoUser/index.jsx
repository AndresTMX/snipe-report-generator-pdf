import "./DocStoreCardInfoUser.css";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import { BiSolidUser } from 'react-icons/bi';

function DocStoreCardInfoUser({ state, dispatch }) {
  const { initialStore, StatesModals } = state ? state : {};
  const { storage } = initialStore ? initialStore : {};

  const date = new Date(); // fecha actual
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // agregar ceros a la izquierda si el mes es menor a 10
  const day = date.getDate().toString().padStart(2, "0"); // agregar ceros a la izquierda si el día es menor a 10
  const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

  const onChangueValues = (event) => {
    const updateDate = event.target.value;

    const newState = {
      ...storage,
      dateDay: updateDate,
    };
    dispatch({
      type: actionTypesDoc.updateStorage,
      payload: newState,
    });
  };

  return (
    <>
      <Accordion>
        <AccordionSummary>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <span>Detalles de usuario</span>
            <BiSolidUser />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{ display: "flex", flexDirection: "column", fontSize: "12px" }}
          >
            <p>FECHA</p>

           
              <input
                type='date'
                label="Fecha de emision"
                value={storage ? storage.dateDay : date}
                onChange={(event) => onChangueValues(event)}
              />
    
            <p>USUARIO</p>
            <span>{storage?.user}</span>
            <p>UBICACION</p>
            <span>{storage?.location}</span>
            <p>EMPRESA</p>
            <span>{storage?.company}</span>
            <p>DEPARTAMENTO</p>
            <span>{storage?.department}</span>
            <p>JEFE INMEDIATO</p>
            <span>{storage?.manager}</span>
            <p>CORREO ELECTRONICO</p>
            <span>{storage?.email}</span>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export { DocStoreCardInfoUser };
