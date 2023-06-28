import "../../index.css";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import { BiSolidUser } from 'react-icons/bi';

function DocStoreCardInfoUser({ state, dispatch }) {
  const { initialStore, StatesModals } = state ? state : {};
  const { storage } = initialStore ? initialStore : {};
  const { user, location, company, department, manager, email } = storage
    ? storage
    : {};

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
            <h4 className="h4">FECHA</h4>

           
              <input
                type='date'
                label="Fecha de emision"
                value={storage ? storage.dateDay : date}
                onChange={(event) => onChangueValues(event)}
              />
    
            <h4 className="h4">USUARIO</h4>
            <span className="span">{user}</span>
            <h4 className="h4">UBICACION</h4>
            <span className="span">{location}</span>
            <h4 className="h4">EMPRESA</h4>
            <span className="span">{company}</span>
            <h4 className="h4">DEPARTAMENTO</h4>
            <span className="span">{department}</span>
            <h4 className="h4">JEFE INMEDIATO</h4>
            <span className="span">{manager}</span>
            <h4 className="h4">CORREO ELECTRONICO</h4>
            <span className="span">{email}</span>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export { DocStoreCardInfoUser };
