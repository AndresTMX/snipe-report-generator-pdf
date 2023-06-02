import { TableMaintances } from "../TablesDocument/TableMaintances";

function RenderBodyPDF({ storage }) {

  const { typeDocument } = storage ? storage : {};

  return (
    <>
      {(typeDocument === 'MP' || typeDocument === 'MC') && (
        <TableMaintances storage={storage}/>
      )}
{/* 
      {(typeDocument === 'CL') && (
        <div>
          aqui va el componente de la tabla 
          del checklist
        </div>
      )}

      {(typeDocument === 'VB') && (
        <div>
          aqui va el componente de la tabla 
          vale de baja
        </div>
      )}


      {(typeDocument === 'CR') && (
        <div>
          aqui va el componente del doc
          de carta responsiva
        </div>
       )} */}
      
    </>
  );
}

export { RenderBodyPDF };
