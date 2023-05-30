import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    alignItems:'center',
    justifyContent: "space-around",
  },

  containerDataUser: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    height:'auto',
    fontSize: "10px",
    border: "1",
    borderColor: "black",
    borderStyle: "solid",
  },

  containerData: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "15px",
  },

  containerDataBorderTop:{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "15px",
    borderTop: "1",
    borderColor: "black",
  },

  containerDataBorderBotom: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "15px",
    borderBottom: "1",
    borderColor: "black",
  },

  boxTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "18%",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
  },

  sectionContainerDate:{
    display:'flex',
    width:'20%',
    flexDirection:'column',
    alignItems: "center",
  },

  boxData: {
    display: "flex",
    width: "80%",
    paddingLeft: "5px",
    justifyContent: "center",
  },

  tableColHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    height: "15px",
    textAlign: "center",
    fontSize:'10px'
  },

  tableDate: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    fontSize:'10px'
  },

  tableRow: {
    margin: "auto",
    height: "22px",
    flexDirection: "row",
    width: "100%",
  },

  tableColD: {
    width: "33.3%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: "2",
    textAlign: "center",
  },

  tableColM: {
    width: "33.3%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: "2",
    textAlign: "center",
  },

  tableColA: {
    width: "33.3%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: "2",
    textAlign: "center",
  },
});

function PDFDataUser({ storage }) {
  const { user, company, department, manager, location, dateDay, typeDocument } = storage ? storage : {};

  const date = new Date(dateDay); // fecha actual
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // agregar ceros a la izquierda si el mes es menor a 10
  const day = date.getDate().toString().padStart(2, "0"); // agregar ceros a la izquierda si el día es menor a 10
  const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

  const fecha = dateDay? dateDay.split('-', 3):'00';
  const newDay = fecha? fecha[2]: '00';

  return (
    <View style={styles.container}>
      <View style={styles.containerDataUser}>
        <View style={styles.containerDataBorderBotom}>
          <View style={styles.boxTitle}>
            <Text>Nombre</Text>
          </View>

          <View style={styles.boxData}>
            <Text>{user}</Text>
          </View>
        </View>

        <View style={styles.containerDataBorderBotom}>
          <View style={styles.boxTitle}>
            <Text>Empresa</Text>
          </View>

          <View style={styles.boxData}>
            <Text>{company}</Text>
          </View>
        </View>

        <View style={styles.containerDataBorderBotom}>
          <View style={styles.boxTitle}>
            <Text>Ubicación</Text>
          </View>

          <View style={styles.boxData}>
            <Text>{location}</Text>
          </View>
        </View>

        <View style={styles.containerDataBorderBotom}>
          <View style={styles.boxTitle}>
            <Text>Jefe directo</Text>
          </View>

          <View style={styles.boxData}>
            <Text>{manager}</Text>
          </View>
        </View>

        <View style={styles.containerData}>
          <View style={styles.boxTitle}>
            <Text>Departamento</Text>
          </View>

          <View style={styles.boxData}>
            <Text>{department}</Text>
          </View>
        </View>

        {
         typeDocument === 'VB' && 
         (
          <View style={styles.containerDataBorderTop}>
          <View style={styles.boxTitle}>
            <Text>Folio de baja</Text>
          </View>

          <View style={styles.boxData}>
            <Text></Text>
          </View>
        </View>
         )
        }

      </View>

      <View style={styles.sectionContainerDate}>

        <View style={styles.tableColHeader}>
          <Text>Fecha de emisión</Text>
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
              <Text>{newDay}</Text>
            </View>
            <View style={styles.tableColM}>
              <Text>{month}</Text>
            </View>
            <View style={styles.tableColA}>
              <Text>{year}</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

export { PDFDataUser };
