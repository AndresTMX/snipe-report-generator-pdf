import "./DocStoreTable.css";
import "../../index.css";
import { DocStoreItemTable } from "../DocStoreItemTable";
//Material UI
import { Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
//icons
import {IoIosArrowDown} from 'react-icons/io';
function DocStoreTable({ arrayRender, typeTable, state }) {

  const { initialStore } = state? state: {};
  const { storage } = initialStore? initialStore: {};
  const validate = arrayRender? arrayRender.length: 0;
  const renderAssets = validate > 0 ? true : false;

  //funcion que rebice como parametro el tipo de tabla y el array a renderizar
  //segun los parametros selecciona que props mandar a render
  function renderItems (typeTable, arrayRender) {
    if(typeTable === 'Activos')


    return(
      arrayRender.map((asset) => (
      <DocStoreItemTable
        typeTable={typeTable}
        key={asset.asset_tag}
        tag={asset.asset_tag}
        name={asset.name}
        state={state}
      />
    )))
    else{
      return(
        arrayRender.map((accessorie) => (
      <DocStoreItemTable
        typeTable={typeTable}
        key={accessorie.index}
        index={accessorie.index}
        id={accessorie.id}
        name={accessorie.name}
        state={state}
      />
    )))}
  }

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
            <span>Datos de {typeTable}</span>
            <IoIosArrowDown/>
          </Box>
      </AccordionSummary>
      <AccordionDetails>
      {
      renderAssets?
      <div className="DocStoreTable">
        <h3 className="h3">{typeTable} agregados</h3>
        <table>
          <tbody>
            <tr>
              <th className="th">{typeTable}</th>
              <th className="th">OFCMI</th>
              <th></th>
            </tr>

            {
              renderItems(typeTable, arrayRender)
              }

          </tbody>
        </table>
      </div>
      :
      <>
      <span>Sin {typeTable} agregados</span>
      </> 
     }
      </AccordionDetails>
    </Accordion>
    </>
  );
}

export { DocStoreTable };