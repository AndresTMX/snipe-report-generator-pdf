import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ItemTableAccessories } from "../ItemTables/ItemTableAccessories";

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
    height: "20px",
    fontSize: "12px",
    textAlign: "center",
    justifyContent: "center",
    borderTop: "1",
    borderLeft: "1",
    borderRight: "1",
    borderStyle: "solid",
    borderColor: "black",
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
    width: "100%",
    border: "1",
    borderStyle: "solid",
    borderColor: "black",
  },
  //Estilos base del titulo
  Boxtitle: {
    display: "flex",
    height: "18px",
    fontSize: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
});

const RowStyles = StyleSheet.create({
  id: {
    width: "15%",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
  },
  name: {
    width: "30%",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
  },
  category: {
    width: "30%",
  },

  manufacturer: {
    width: "25%",
    borderLeft: "1",
    borderColor: "black",
    borderStyle: "solid",
  },
});

function TableAccessories({ storage }) {
  const { accessories } = storage ? storage : [];
  const validate = accessories ? accessories.length : false;

  return (
    <>
      {!!validate && (
        <View style={styles.tableContainer}>
          <View style={styles.containerTitle}>
            <Text>Accesorios asignados al usuario</Text>
          </View>

          <View style={styles.table}>
            <View style={styles.rowTitles}>
              <View style={[styles.Boxtitle, RowStyles.id]}>
                <Text>ID</Text>
              </View>

              <View style={[styles.Boxtitle, RowStyles.name]}>
                <Text>Descripción</Text>
              </View>

              <View style={[styles.Boxtitle, RowStyles.category]}>
                <Text>Categoria</Text>
              </View>

              <View style={[styles.Boxtitle, RowStyles.manufacturer]}>
                <Text>Fabricante</Text>
              </View>
            </View>

            {accessories.map((accessorie) => (
              <ItemTableAccessories
                key={accessorie.index}
                id={accessorie.id}
                name={accessorie.name}
                category={accessorie.category?.name}
                manufacturer={accessorie?.manufacturer?.name}
              />
            ))}
          </View>
        </View>
      )}
    </>
  );
}

export { TableAccessories };
