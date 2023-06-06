import {Document,Page, View,StyleSheet,} from "@react-pdf/renderer";
import { RenderHeaderPDF } from '../HeaderDocument/';
import { PDFDataUser } from '../DataUserDocument/';
import { RenderBodyPDF } from '../BodyDocument';
import { TableComponents } from "../TablesDocument/TableComponents";
import { Comentarios } from "../PDFExtras/Comentarios";
import {Firmas} from '../PDFExtras/Firmas'
const styles = StyleSheet.create({
  Page: {
    display:'flex',
    width: "100%",
    height: "100%",
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },

  Container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "95%",
    height: "95%",
    border: "1",
    borderStyle: 'solid',
    borderColor: "black",
  },
});

function PDFSinglePage({storage, typeFormat, image}) {

  const {components, checkComponents, typeDocument} = storage? storage: {};

    return (
      <Document>
        <Page style={styles.Page} size={"A4"}>
          <View style={styles.Container}>
            <RenderHeaderPDF
              storage={storage}
              typeFormat={typeFormat}
              image={image}
            />

            <PDFDataUser storage={storage} />

            <RenderBodyPDF storage={storage} />

            {checkComponents && (
              <TableComponents
                components={components}
                checkComponents={checkComponents}
              />
            )}

            {typeDocument != 'CR' &&(
              <Comentarios storage={storage}/>
            )}

            <Firmas storage={storage}/>

          </View>
        </Page>
      </Document>
    );
}

export {PDFSinglePage};