//Actas de mantenimiento
import { TableMaintances } from "../TablesDocument/TableMaintances";
import { TableAccessories } from "../TablesDocument/TableAccessories";
//CheckList
import { TableAssetsCheckList } from "../TablesDocument/TableAssetsCheckList";
import { TableAccessoriesCheckList } from "../TablesDocument/TableAccessoriesCheckList";
//Vale de baja
import { TableAssetsValeBaja } from "../TablesDocument/TableAssetsValeBaja";
import { TableAccessoriesValeBaja } from "../TablesDocument/TableAccessoriesValeBaja";

function RenderBodyPDF({ storage }) {

  const { typeDocument } = storage ? storage : {};

  return (
    <>
      {(typeDocument === 'MP' || typeDocument === 'MC') && (
        <>
          <TableMaintances storage={storage}/>
          <TableAccessories storage={storage}/>
        </>
      )}

      {(typeDocument === 'CL') && (
        <>
        <TableAssetsCheckList storage={storage}/>
        <TableAccessoriesCheckList storage={storage}/>
        </>
      )}

      {(typeDocument === 'VB') && (
        <>
        <TableAssetsValeBaja storage={storage}/>
        <TableAccessoriesValeBaja storage={storage}/>
        </>
      )}


      {/* {(typeDocument === 'CR') && (
        <div>
          aqui va el componente del doc
          de carta responsiva
        </div>
       )} */}
      
    </>
  );
}

export { RenderBodyPDF };
