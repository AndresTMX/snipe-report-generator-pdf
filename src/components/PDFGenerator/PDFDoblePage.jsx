import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
  } from "@react-pdf/renderer";

function PDFDoblePage({storage,typeFormat,image}) {
    return ( 
        <Document>
        <Page size={"A4"}>
          <View>
          </View>
        </Page>
        <Page size={"A4"}>
          <View>
          </View>
        </Page>
      </Document>
     );
}

export {PDFDoblePage};