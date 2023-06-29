import { useContext } from "react";
import { DocContext } from "./../../Context/DocContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../../components/PDFGenerator";
import { useTitleDocument } from "../../Hooks/useTitleDocument";
import { Button } from "@mui/material";
function ButtonPDF() {
  const [state, dispatch] = useContext(DocContext);

  const { initialStore, StatesModals } = state;

  const { storage } = initialStore;

  const { typeDocument, user } = storage? storage: {};

  const {title} = useTitleDocument(typeDocument);

  const nameDocument = `${title+"_"+user}`;

  return (
    <PDFDownloadLink 
      document={<MyDocument state={state} />}
      fileName={`${nameDocument}`}

    >
      {({ blob, url, loading, error }) =>
        loading ? (
          <Button variant="contained" size="meidum">Cargando...</Button>
        ) : (
          <Button variant="contained" size="meidum">Descargar</Button>
        )
      }
    </PDFDownloadLink>
  );
}

export { ButtonPDF };
