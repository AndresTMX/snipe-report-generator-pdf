import { useContext } from "react";
import { DocContext } from "./../../Context/DocContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../../components/PDFGenerator";
import { useTitleDocument } from "../../Hooks/useTitleDocument";
import "./ButtonPDF.css";

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
          <button className="buton-download">Cargando documento...</button>
        ) : (
          <button className="buton-download">Descargar documento</button>
        )
      }
    </PDFDownloadLink>
  );
}

export { ButtonPDF };
