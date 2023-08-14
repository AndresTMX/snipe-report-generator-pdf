import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ItemAccessoriesCheckList } from "../ItemTables/ItemAccessoriesCheckList";
const styles = StyleSheet.create({
  TableContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    borderTop:'1',
    borderLeft:'1',
    borderRight:'1',
    borderStyle:'solid',
  },

  containerTitle: {
    display: "flex",
    width: "100%",
    height: "20px",
    fontSize: "12px",
    textAlign: "center",
    justifyContent:'center',
    borderBottom:'1',
  },

  TableTableaccessoriessCheckList: {
    display: "flex",
    height: "18px",
    fontSize: "10px",
    flexDirection: "row",
    width: "100%",
  },

  ColumnId: {
    display: "flex",
    width: "8%",
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnDescription: {
    display: "flex",
    width: "30%",
    borderColor: "black",
    borderLeft:'1',
    borderRight: "1",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnMarca: {
    display: "flex",
    width: "28%",
    borderColor: "black",
    borderRight: "1",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnModel: {
    display: "flex",
    width: "20%",
    borderColor: "black",
    borderRight: "1",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnCheck: {
    display: "flex",
    width: "15%",
    textAlign: "center",
  },

  textContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1",
    borderStyle: "solid",
    borderColor: "black",
  },

  ContainerRowaccessoriess: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
});

function TableAccessoriesCheckList({ storage }) {
  const { accessories } = storage ? storage : [];
  const validate = accessories ? accessories.length : false;

  return (
    <>
      {validate && (
        <View style={styles.TableContainer}>
          <View style={styles.containerTitle}>
            <Text>ACCESORIOS ASIGNADOS AL USUARIO</Text>
          </View>

          <View style={styles.TableTableaccessoriessCheckList}>
            <View style={styles.ColumnId}>
              <View style={styles.textContainer}>
                <Text>ID</Text>
              </View>
            </View>

            <View style={styles.ColumnDescription}>
              <View style={styles.textContainer}>
                <Text>DESCRIPCIÓN</Text>
              </View>
            </View>

            <View style={styles.ColumnMarca}>
              <View style={styles.textContainer}>
                <Text>CATEGORÍA</Text>
              </View>
            </View>

            <View style={styles.ColumnModel}>
              <View style={styles.textContainer}>
                <Text>FABRICANTE</Text>
              </View>
            </View>

            <View style={styles.ColumnCheck}>
              <View style={styles.textContainer}>
                <Text style={styles.textNegrita}>LISTADO</Text>
              </View>
            </View>
          </View>

          {
                  accessories.map((accessorie) => (
                    <ItemAccessoriesCheckList
                    key={accessorie.index}
                    id={accessorie.id}
                    description={accessorie.name}
                    category={accessorie.category?.name}
                    manufacturer={accessorie.manufacturer?.name}
                    />
                  ))
                }
        </View>
      )}
    </>
  );
}

export { TableAccessoriesCheckList };
