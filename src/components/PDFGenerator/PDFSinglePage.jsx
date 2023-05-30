import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
  } from "@react-pdf/renderer";

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

import {Cabecera} from "../PFDCabeceras/Cabecera";
import {PDFDataUser} from "../PDFDataUser"

function PDFSinglePage({storage, typeFormat, image}) {
    return ( 
        <Document>
        <Page style={styles.Page} size={"A4"}>
          <View style={styles.Container}>

            <Cabecera storage={storage} typeFormat={typeFormat} image={image} />

            <PDFDataUser storage={storage} />

          </View>
        </Page>
      </Document>
     );
}

export {PDFSinglePage};