//PDF plantillas
import {PDFDoblePage} from "../PDFGenerator/PDFDoblePage";
import {PDFSinglePage} from "../PDFGenerator/PDFSinglePage";
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

// const styles = StyleSheet.create({
//   data: {
//     fontSize: "12px",
//     backgroundColor: "gray",
//   },

//   acta: {
//     color: "black",
//     padding: "10px",
//     width: "100%",
//     height: "90%",
//     fontSize: "12px",
//     display: "flex",
//     justifyContent: "space-between",
//   },

//   actaCabecera: {
//     display: "flex",
//     flexDirection: "row",
//     borderWidth: "1",
//     borderColor: "black",
//     marginBottom: "30px",
//   },

//   logo: {
//     width: "90px",
//     height: "90px",
//     objectFit: "contain",
//   },

//   actaCabeceraLogo: {
//     width: "100px",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRight: "1",
//     borderRightColor: "black",
//   },

//   actaCabeceraTitle: {
//     display: "flex",
//     fontSize: "24px",
//     fontFamily: "RobotoBold",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRight: "1",
//     borderRightColor: "black",
//     textAlign: "center",
//     width: "60%",
//     padding: "10px",
//   },

//   actaCabeceraDate: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "25%",
//   },

//   actaCabeceraDateBlock: {
//     display: "flex",
//     padding: "10px",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     fontSize: "11px",
//   },

//   borderTop: {
//     borderTop: "1",
//     borderTopColor: "black",
//   },

//   borderBottom: {
//     borderBottom: "1",
//     borderBottomColor: "black",
//   },

//   sectionDataUser: {
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "row",
//     width: "100%",
//     paddingTop: "20px",
//     justifyContent: "space-between",
//   },

//   sectionContainerDate: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     width: "30%",
//     backgroundColor: "white",
//   },

//   sectionContainerName: {
//     display: "flex",
//     width: "60%",
//     backgroundColor: "white",
//   },

//   table: {
//     display: "table",
//     width: "100%",
//     borderStyle: "solid",
//   },

//   tableDate: {
//     display: "table",
//     width: "100%",
//     borderStyle: "solid",
//     borderColor: "black",
//   },

//   tableRow: {
//     margin: "auto",
//     height: "22px",
//     flexDirection: "row",
//     width: "100%",
//   },

//   tableCol: {
//     width: "40%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 1,
//     borderTopWidth: 1,
//     padding: "2",
//   },

//   tableColData: {
//     width: "90%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderLeftWidth: 1,
//     borderTopWidth: 1,
//     padding: "2",
//   },

//   tableCell: {
//     margin: "auto",
//     marginTop: 1,
//     fontSize: "11",
//   },

//   tableColHeader: {
//     display: "flex",
//     width: "100%",
//     justifyContent:'center',
//     alignItems:'center',
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "black",
//     height:'28px',
//     textAlign: "center",
//   },

//   boxText:{
//     display:'flex',
//     width:'100%',
//     height:'100%',
//     alignItems:'center',
//     justifyContent:'center',
//   },

//   tableColD: {
//     width: "33.3%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "black",
//     padding: "2",
//     textAlign: "center",
//   },

//   tableColM: {
//     width: "33.3%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "black",
//     padding: "2",
//     textAlign: "center",
//   },
//   tableColA: {
//     width: "33.3%",
//     borderStyle: "solid",
//     borderWidth: 1,
//     borderColor: "black",
//     padding: "2",
//     textAlign: "center",
//   },

//   sectionAssetsUser: {
//     display: "flex",
//     width: "100%",
//     height:'auto',
//     marginTop: "20px",
//   },

//   tableAssetsContainer: {
//     display: "table",
//     width: "100%",
//     borderBottom: "1",
//     borderLeft: "1",
//     borderRight: "1",
//     borderStyle: "solid",
//     borderColor: "black",
//   },

//   tableRowAssets: {
//     margin: "auto",
//     height: "24px",
//     flexDirection: "row",
//     width: "100%",
//   },

//   tableColAssetId: {
//     width: "20%",
//     padding: "2px",
//     borderRight: "1",
//     borderColor: "black",
//     borderStyle: "solid",
//     textAlign: "center",
//   },

//   tableColAssetIdText: {
//     width: "20%",
//     padding: "2px",
//     borderTop: "1",
//     borderColor: "black",
//     borderRight: "1",
//     borderStyle: "solid",
//     textAlign: "center",
//   },

//   tableColDescription: {
//     width: "30%",
//     padding: "2px",
//     borderRight: "1",
//     borderColor: "black",
//     borderStyle: "solid",
//     textAlign: "center",
//   },

//   tableColDescriptionText: {
//     width: "30%",
//     padding: "2px",
//     borderRight: "1",
//     borderColor: "black",
//     borderStyle: "solid",
//     textAlign: "center",
//     borderTop: "1",
//   },

//   tableColNS: {
//     width: "30%",
//     padding: "2px",
//     borderRight: "1",
//     borderColor: "black",
//     borderStyle: "solid",
//     textAlign: "center",
//   },

//   tableColNSText: {
//     width: "30%",
//     padding: "2px",
//     borderRight: "1",
//     borderColor: "black",
//     borderStyle: "solid",
//     textAlign: "center",
//     borderTop: "1",
//   },

//   tableColTypeMaintances: {
//     width: "20%",
//     padding: "2px",
//     borderColor: "black",
//     borderStyle: "solid",
//     textAlign: "center",
//   },

//   tableColTypeMaintancesText: {
//     width: "20%",
//     padding: "2px",
//     borderColor: "black",
//     borderStyle: "solid",
//     textAlign: "center",
//     borderTop: "1",
//   },

//   Observers: {
//     width: "100%",
//     height: "auto",
//     minHeight: "100px",
//     border: "1",
//     borderStyle: "solid",
//     borderColor: "black",
//     marginTop:'20px'
//   },

//   ObserversTitle: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottom: "1",
//     color: "black",
//     borderStyle: "solid",
//     height: "25px",
//     fontFamily: "RobotoBold",
//   },

//   ObserversComent: {
//     display: "flex",
//     padding: "10px",
//   },

//   sectionTextContainer: {
//     display: "flex",
//     with: "90%",
//     height:'auto',
//     borderStyle: "solid",
//     borderColor: "black",
//     borderTop: "1",
//     borderLeft: "1",
//     borderRight: "1",
//     borderBottom: "1",
//     marginTop: "20px",
//     paddingTop: "10px",
//     paddingLeft: "10px",
//     paddingRight: "10px",
//     paddingBottom:'10px'
//   },

//   textDefault: {
//     display:'flex',
//     height:'auto',
//     marginBottom: "20px",
//     textAlign:'left',
//     lineHeight:'1px'
//   },

//   sectionFirmasContainer: {
//     display: "flex",
//     flexDirection: "row",
//     height: "25%",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "space-around",
//     padding: "20px",
//   },

//   firma: {
//     borderTop: "1",
//     borderColor: "black",
//     borderStyle: "solid",
//   },
// });

// const actaCabeceraDateBlockTop = {
//   ...styles.actaCabeceraDateBlock,
//   ...styles.borderTop,
// };

// const actaCabeceraDateBlockBottom = {
//   ...styles.actaCabeceraDateBlock,
//   ...styles.borderBottom,
// };

// const { initialStore } = state ? state : [];

// const { storage } = initialStore ? initialStore : [];

// const { dateDay, typeDocument, components, check} = storage ? storage : {};

// const date = new Date(dateDay); // fecha actual

// const monthName = date.toLocaleString('default', { month: 'long' });

// const arrayDate = dateDay? dateDay.split("-", 3):"00";

// const DayNum = arrayDate? arrayDate[2]: "00";

// const YearNum = arrayDate? arrayDate[0]: "00";

// const { coment } = storage ? storage : "";

// const { assets, accessories } = storage ? storage : {};

// const ListAssets = assets ? assets : [];

// const ListAccessories = accessories ? accessories : [];

// const { company } = storage ? storage : "";

// const { location } = storage? storage : "";

// const { image } = useImagePDF(company);

{/* <Document>
<Page size={"A4"}>
  <View style={styles.acta}>

    {typeDocument === "VB" && (
      <View style={styles.actaCabecera}>
        <View style={styles.actaCabeceraLogo}>
          <Image
            style={styles.logo}
            src={image ? image : "image.png"}
            alt={"logo"}
          />
        </View>
        <View style={styles.actaCabeceraTitle}>
          <Text>VALE DE BAJA DE EQUIPOS INFORMATICOS</Text>
        </View>
        <View style={styles.actaCabeceraDate}>
          <Text style={actaCabeceraDateBlockBottom}>Version: 00</Text>
          <Text style={styles.actaCabeceraDateBlock}>
            Fecha: 
          </Text>
          <Text style={actaCabeceraDateBlockTop}>
            Codigo: {typeFormat}
          </Text>
        </View>
      </View>
    )}

    {(typeDocument === "MP" || typeDocument === "MC" ) && (
      <View style={styles.actaCabecera}>
        <View style={styles.actaCabeceraLogo}>
          <Image
            style={styles.logo}
            src={image ? image : "image.png"}
            alt={"logo"}
          />
        </View>
        <View style={styles.actaCabeceraTitle}>
          <Text>ACTA DE MANTENIMIENTO A EQUIPO DE COMPUTO</Text>
        </View>
        <View style={styles.actaCabeceraDate}>
          <Text style={actaCabeceraDateBlockBottom}>Version: 00</Text>
          <Text style={styles.actaCabeceraDateBlock}>
            Fecha: 
          </Text>
          <Text style={actaCabeceraDateBlockTop}>
            Codigo: {typeFormat}
          </Text>
        </View>
      </View>
    )}

    {typeDocument === "CL" && (
      <CabeceraCL
        user={storage?.user}
        DayNum={DayNum}
        monthName={monthName}
        YaerNum={YearNum}
        company={company}
        location={location}
        img={image}
        typeDocument={typeDocument}
      />
    )}

    {typeDocument === "CL" && (
      <TableAssetsCheckList
        ListAssets={ListAssets}
        ListAccessories={ListAccessories}
      />
    )}

    {(typeDocument === "CL" && check) && (
      <TableComponents 
      components={components}
      check={check}
      />
    )}

    {(typeDocument === "MP" || typeDocument === "MC" ) && (
      <View style={styles.sectionDataUser}>
        <View style={styles.sectionContainerName}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Nombre de Usuario</Text>
              </View>
              <View style={styles.tableColData}>
                <Text style={styles.tableCell}>{storage?.user}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Departamento</Text>
              </View>
              <View style={styles.tableColData}>
                <Text style={styles.tableCell}>
                  {storage?.department}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionContainerDate}>
          <View style={styles.tableColHeader}>
            <Text>Fecha de mantenimiento</Text>
          </View>

          <View style={styles.tableDate}>
            <View style={styles.tableRow}>
              <View style={styles.tableColD}>
                <Text>D</Text>
              </View>
              <View style={styles.tableColM}>
                <Text>M</Text>
              </View>
              <View style={styles.tableColA}>
                <Text>A</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableColD}>
                <Text>{DayNum}</Text>
              </View>
              <View style={styles.tableColM}>
                <Text>{monthName}</Text>
              </View>
              <View style={styles.tableColA}>
                <Text>{YearNum}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )}

    {typeDocument === "VB" && (
      <CabeceraBE 
      storage={storage}
      DayNum={DayNum}
      monthName={monthName}
      YearNum={YearNum} 
      />
    )}

    {typeDocument === "MP" && (
      <View style={styles.sectionAssetsUser}>

        <View style={styles.tableColHeader}>
         <View style={styles.boxText}> 
         <Text>MANTENIMIENTO PREVENTIVO</Text>
         </View>
        </View>

        <View style={styles.tableAssetsContainer}>
          <View style={styles.tableRowAssets}>
            <View style={styles.tableColAssetId}>
              <Text>ID Equipo</Text>
            </View>

            <View style={styles.tableColDescription}>
              <Text>Descripcion de Equipo</Text>
            </View>

            <View style={styles.tableColNS}>
              <Text>Numero de Serie</Text>
            </View>

            <View style={styles.tableColTypeMaintances}>
              <Text>Limpieza</Text>
            </View>
          </View>

          {ListAssets.map((asset) => (
            <MyAssets
              key={asset.id}
              tag={asset.asset_tag}
              serial={asset.serial}
              category={asset.category?.name}
              typeClean={asset.custom_fields.TypeMaintances?.value}
            />
          ))}
        </View>
      </View>
    )}

    {typeDocument === "MC" && (
      <View style={styles.sectionAssetsUser}>

        <View style={styles.tableColHeader}>
         <View style={styles.boxText}> 
         <Text>MANTENIMIENTO CORRECTIVO</Text>
         </View>
        </View>

        <View style={styles.tableAssetsContainer}>
          <View style={styles.tableRowAssets}>
            <View style={styles.tableColAssetId}>
              <Text>ID Equipo</Text>
            </View>

            <View style={styles.tableColDescription}>
              <Text>Descripcion de Equipo</Text>
            </View>

            <View style={styles.tableColNS}>
              <Text>Numero de Serie</Text>
            </View>

            <View style={styles.tableColTypeMaintances}>
              <Text>Limpieza</Text>
            </View>
          </View>

          {ListAssets.map((asset) => (
            <MyAssets
              key={asset.id}
              tag={asset.asset_tag}
              serial={asset.serial}
              category={asset.category?.name}
              typeClean={asset.custom_fields.TypeMaintances?.value}
            />
          ))}
        </View>
      </View>
    )}

    {typeDocument === "VB" && (
      <TableAssetsValeBaja
        ListAssets={ListAssets}
        ListAccessories={ListAccessories}
      />
    )}

    {typeDocument != "CL" && (
      <View style={styles.Observers}>
        <View style={styles.ObserversTitle}>
          <Text>Observaciones</Text>
        </View>
        <View style={styles.ObserversComent}>
          <Text>{coment}</Text>
        </View>
      </View>
    )}

    {(typeDocument === "MP" || typeDocument === "MC" ) && (
      <View style={styles.sectionTextContainer}>
        <Text style={styles.textDefault}>
          El referido equipo de cómputo se me entrega en condición de
          trabajo, el mismo que está bajo mi responsabilidad y cuidado. Me
          comprometo a no instalar ningún software que no esté autorizado
          por el área de sistemas y reportar cualquier falla que se
          encuentre a, a fin de que esta sea reparada.
        </Text>

        <Text style={styles.textDefault}>
          "Toda la información que los equipos puedan contener, almacenar
          o procesar es considerada confidencial, para lo cual comprendo
          la importancia de no dar a conocer las contraseñas que se me han
          entregado para impedir el acceso no autorizado al mismo".
        </Text>

        <Text style={styles.textDefault}>
          Asimismo, en caso de tener el equipo un daño o perjuicio por mal
          uso u operación, este será bajo mi responsabilidad y costo, para
          lo cual autorizo a mi empleador {company}, SA de CV realizar el
          descuento respectivo por el costo de la reparación.
        </Text>
      </View>
    )}

    {typeDocument === "VB" && (
      <View style={styles.sectionTextContainer}>
        <Text style={styles.textDefault}>
          El referido equipo de cómputo se me entrega en condición de
          trabajo, el mismo que está bajo mi responsabilidad y cuidado. Me
          comprometo a no instalar ningún software que no esté autorizado
          por el área de sistemas y reportar cualquier falla que se
          encuentre a, a fin de que esta sea reparada.
        </Text>

        <Text style={styles.textDefault}>
          "Toda la información que los equipos puedan contener, almacenar
          o procesar es considerada confidencial, para lo cual comprendo
          la importancia de no dar a conocer las contraseñas que se me han
          entregado para impedir el acceso no autorizado al mismo".
        </Text>

        <Text style={styles.textDefault}>
          Asimismo, en caso de tener el equipo un daño o perjuicio por mal
          uso u operación, este será bajo mi responsabilidad y costo, para
          lo cual autorizo a mi empleador {company} , SA de CV realizar el
          descuento respectivo por el costo de la reparación.
        </Text>
      </View>
    )}

    {typeDocument === "CL" && (
      <View style={styles.sectionTextContainer}>
        <Text style={styles.textDefault}>
          El referido equipo de computo y sus componentes se me entregan
          en condicion de trabajo, el mismo que esta bajo mi
          responsabilidad y cuidado.
        </Text>

        <Text style={styles.textDefault}>
          Me comprometo a no instalar ningun software que no este
          autorizado por el departamento de sistemas y reportar cualquier
          falta que se encuentre a fin de que esta sea reparada.
        </Text>

        <Text style={styles.textDefault}>
          "Toda informacion que los equipos puedan contener, almacenar o
          procesar es considerada confidencial, para lo cual comprendo la
          importancia de no dar a conocer las contraseñas que se me han
          entregado para impedir el acceso no autorizado al mismo".
        </Text>

        <Text style={styles.textDefault}>
          Asi mismo, en caso de tener el equipo un daño o perjuicio por
          mal uso u operacion, este sera bajo mi responsabilidad y costo,
          para lo cual autorizo a mi empleador {company} realizar el
          descuento respectivo por el costo de la reparacion.
        </Text>
      </View>
    )}

    <View style={styles.sectionFirmasContainer}>
      <View style={styles.firma}>
        <Text>Nombre y Firma de Usuario</Text>
      </View>

      <View>
        <Text style={styles.firma}>Nombre y Firma de Personal de TI</Text>
      </View>
    </View>
  </View>
</Page>
</Document> */}
