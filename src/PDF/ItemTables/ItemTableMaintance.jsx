import { View, StyleSheet, Text } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  //contenedor de la tabla
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  },
  //contenedor del titulo de la tabla
  containerTitle: {
    display: "flex",
    width: "100%",
    height: "18px",
    fontSize: "14px",
    textAlign: "center",
  },
  //Tabla
  table: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  //Fila de titulos
  rowTitles: {
    display: "flex",
    flexDirection: "row",
  },
  //Estilos base del titulo
  Boxtitle: {
    display: "flex",
    height: "18px",
    justifyContent: "center",
    alignItems: "center",
  },
});

const RowStyles = StyleSheet.create({
  tag: {
    width: "15%",
  },
  description: {
    width: "30%",
  },
  ns: {
    width: "30%",
  },
  maintance: {
    width: "25%",
  },
});

function ItemTableMaintance({tag, description, serie, maintance}) {
  return (
    <>
      <View style={styles.rowTitles}>
        <View style={[styles.Boxtitle, RowStyles.tag]}>
          <Text>{tag}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.description]}>
          <Text>{description}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.ns]}>
          <Text>{serie}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.maintance]}>
          <Text>{maintance}</Text>
        </View>
      </View>
    </>
  );
}

export { ItemTableMaintance };
