import { Cabecera } from "./Cabecera";
import { CabeceraCR } from "./CabeceraCartaResponsiva";
import { useTitleDocument } from "../../Hooks/useTitleDocument";

function RenderHeaderPDF({ storage, typeFormat, image }) {
  const { typeDocument } = storage ? storage : {};
  const {title} = useTitleDocument(typeDocument);
  return (
    <>
      {typeDocument === "CR" && (
        <CabeceraCR storage={storage} typeFormat={typeFormat} image={image} title={title} />
      )}

      {typeDocument != "CR" && (
        <Cabecera storage={storage} typeFormat={typeFormat} image={image} title={title} />
      )}
    </>
  );
}

export { RenderHeaderPDF };
