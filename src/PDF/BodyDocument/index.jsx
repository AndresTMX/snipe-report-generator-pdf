//Actas de mantenimiento
import { TableMaintances } from "../TablesDocument/TableMaintances";
import { TableAccessories } from "../TablesDocument/TableAccessories";
//CheckList
import { TableAssetsCheckList } from "../TablesDocument/TableAssetsCheckList";
import { TableAccessoriesCheckList } from "../TablesDocument/TableAccessoriesCheckList";
//Vale de baja
import { TableAssetsValeBaja } from "../TablesDocument/TableAssetsValeBaja";
import { TableAccessoriesValeBaja } from "../TablesDocument/TableAccessoriesValeBaja";
//carta responsiva
import { BodyCartaResponsiva } from "../PDFExtras/BodyCartaResponsiva";

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


      {(typeDocument === 'CR') && (
        <BodyCartaResponsiva storage={storage}/>
       )}
      
    </>
  );
}

export { RenderBodyPDF };
