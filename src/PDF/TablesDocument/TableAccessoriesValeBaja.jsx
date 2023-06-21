import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ItemAccessoriesValeBaja } from "../ItemTables/ItemAccessoriesValeBaja";

const styles = StyleSheet.create({
  title: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
  },

  sectionAssetsTable: {
    display: "table",
    width: "100%",
    borderTop: "1",
    borderBottom: "1",
    borderLeft: "1",
    borderRight: "1",
    borderStyle: "solid",
    borderColor: "black",
  },

  TableAssetsRow: {
    margin: "auto",
    height: "40px",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  TableColumnId: {
    width: "15%",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },

  TableColumnName: {
    width: "30%",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },

  TableColumnSerie: {
    width: "30%",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },

  TableColumnState: {
    width: "25%",
    textAlign: "center",
    display: "flex",
    height: "40px",
  },

  containerTable: {
    display: "flex",
    flexDirection: "row",
    borderStyle: "solid",
    borderTop: "1",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
  },

  columnB: {
    display: "flex",
    width: "50%",
    borderStyle: "solid",
    borderColor: "black",
    borderRight: "1",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
  },

  columnM: {
    display: "flex",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
  },
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
});

function TableAccessoriesValeBaja({ storage }) {
  const { accessories } = storage ? storage : [];
  const validate = accessories ? accessories.length : false;

  return (
    <>
      {validate && (
        <View style={styles.sectionAssets}>
          <View style={styles.containerTitle}>
            <Text>ACCESORIOS ASIGNADOS AL USUARIO</Text>
          </View>
          <View style={styles.sectionAssetsTable}>
            <View style={styles.TableAssetsRow}>
              <View style={styles.TableColumnId}>
                <View style={styles.title}>
                  <Text>ID</Text>
                </View>
              </View>

              <View style={styles.TableColumnName}>
                <View style={styles.title}>
                  <Text>DESCRIPCIÓN DE EQUIPO</Text>
                </View>
              </View>

              <View style={styles.TableColumnSerie}>
                <View style={styles.title}>
                  <Text>CATEGORIA</Text>
                </View>
              </View>

              <View style={styles.TableColumnState}>
                <View style={styles.title}>
                  <Text>ESTADO DE EQUIPO</Text>
                </View>

                <View style={styles.containerTable}>
                  <View style={styles.columnB}>
                    <Text>B</Text>
                  </View>
                  <View style={styles.columnM}>
                    <Text>M</Text>
                  </View>
                </View>
              </View>
            </View>

            {accessories.map((accessorie) => (
              <ItemAccessoriesValeBaja
                key={accessorie.index}
                id={accessorie.id}
                description={accessorie.name}
                category={accessorie.category?.name}
              />
            ))}
          </View>
        </View>
      )}
    </>
  );
}

export { TableAccessoriesValeBaja };
