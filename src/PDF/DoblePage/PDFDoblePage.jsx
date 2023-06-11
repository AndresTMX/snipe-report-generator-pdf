import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { RenderHeaderPDF } from "../HeaderDocument/";
import { PDFDataUser } from "../DataUserDocument/";
import { RenderBodyPDF } from "../BodyDocument";
import { TableComponents } from "../TablesDocument/TableComponents";
import { Comentarios } from "../PDFExtras/Comentarios";
import { Compromiso } from '../PDFExtras/Compromiso';
import { Firmas } from "../PDFExtras/Firmas";
const styles = StyleSheet.create({
  Page: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  Container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "95%",
    height: "95%",
    border: "1",
    borderStyle: "solid",
    borderColor: "black",
  },
  ContainerJustifyTop: {
    display: "flex",
    flexDirection: "column",
    height:'40%',
    gap: "10px",
    width: "100%",
  },
  ContainerJustifyBottom: {
    display: "flex",
    flexDirection: "column",
    height:'60%',
    justifyContent:'flex-start',
    gap: "10px",
    width: "100%",
  },
  boxNumPage:{
    display: "flex",
    position:'absolute',
    bottom:'10px',
    width:'90%',
    flexDirection: "column",
    alignItems:'flex-end',
    fontSize:'10px'
  }
});

function PDFDoblePage({ storage, typeFormat, image }) {
  const { components, checkComponents, typeDocument, countAssets, countAccessories, company } = storage ? storage : {};
  const countComponents = components ? components.flat().length : 0;
  const totalAssetsAccessories = countAssets + countAccessories;
  const total = countAssets + countAccessories + countComponents;


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

          {checkComponents && total <= 20 && (
            <TableComponents
              components={components}
              checkComponents={checkComponents}
            />
          )}
           <View style={styles.boxNumPage}><Text>Pagina 1 de 2</Text></View>
        </View>
      </Page>
      <Page style={styles.Page} size={"A4"}>
        <View style={styles.Container}>
          
          <View style={styles.ContainerJustifyTop}>
            {checkComponents && total >= 20 && (
              <TableComponents
                components={components}
                checkComponents={checkComponents}
              />
            )}
          </View>

          <View style={styles.ContainerJustifyBottom}>
            {typeDocument != "CR" && <Comentarios storage={storage} />}
            {(company != 'Instrumentacion Y Precision') && (<Compromiso storage={storage}/>)}
            <Firmas storage={storage} />
          </View>
          <View style={styles.boxNumPage}><Text>Pagina 2 de 2</Text></View>
        </View>
      </Page>
    </Document>
  );
}

export { PDFDoblePage };
