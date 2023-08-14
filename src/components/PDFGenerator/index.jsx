//PDF plantillas
import {PDFDoblePage} from "../../PDF/DoblePage/PDFDoblePage";
import {PDFSinglePage} from "../../PDF/SinglePage/PDFSinglePage";
//Hooks PDF
import { useFormatDocument } from "../../Hooks/useFormatDocument";
import { useImagePDF } from "../../Hooks/useImagePDF";

function generatePDF(storage, typeFormat, image) {
  const { components, countAssets, countAccessories } = storage ? storage : {};

  const countComponents = components ? components.flat().length : 0;

  let total = countAssets + countAccessories + countComponents;

  if (total >= 10) {
    return (
      <PDFDoblePage storage={storage} typeFormat={typeFormat} image={image} />
    );
  } else {
    return (
      <PDFSinglePage storage={storage} typeFormat={typeFormat} image={image} />
    );
  }
}

function MyDocument({ state }) {

  const { initialStore } = state ? state : {};

  const { storage } = initialStore ? initialStore :{};

  const { typeDocument, user, assets, accessories, components, company, idUser, department, manager, becario, checkComponents } = storage ? storage : {};

  const { typeFormat } = useFormatDocument(typeDocument);

  const { image } = useImagePDF(company);

  return (
    generatePDF(storage, typeFormat, image)
  );
}

export { MyDocument };