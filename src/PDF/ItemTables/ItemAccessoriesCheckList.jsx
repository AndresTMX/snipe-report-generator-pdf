import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  TableContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  containerTitle: {
    display: "flex",
    width: "100%",
    height: "20px",
    fontSize: "12px",
    textAlign: "center",
    justifyContent: "center",
    borderLeft: "1",
    borderRight: "1",
    borderStyle: "solid",
    borderColor: "black",
  },

  TableTableAssetsCheckList: {
    display: "flex",
    height: "18px",
    fontSize: "10px",
    flexDirection: "row",
    width: "100%",
    borderBottom:'1'
  },

  ColumnId: {
    display: "flex",
    width: "8%",
    borderTop: "1",
    borderColor: "black",
    borderRight: "1",
    borderLeft: "1",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnDescription: {
    display: "flex",
    width: "30%",
    borderTop: "1",
    borderColor: "black",
    borderRight: "1",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnMarca: {
    display: "flex",
    width: "28%",
    borderTop: "1",
    borderColor: "black",
    borderRight: "1",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnModel: {
    display: "flex",
    width: "20%",
    borderTop: "1",
    borderColor: "black",
    borderRight: "1",
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnCheck: {
    display: "flex",
    width: "15%",
    borderTop: "1",
    borderRight: "1",
    textAlign: "center",
  },

  textContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
  },

  ContainerRowAssets: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
});

function ItemAccessoriesCheckList({ id, description, category, manufacturer,  }) {

  return (
    <>
          <View style={styles.TableTableAssetsCheckList}>
            <View style={styles.ColumnId}>
              <View style={styles.textContainer}>
                <Text>{id}</Text>
              </View>
            </View>

            <View style={styles.ColumnDescription}>
              <View style={styles.textContainer}>
                <Text>{description}</Text>
              </View>
            </View>

            <View style={styles.ColumnMarca}>
              <View style={styles.textContainer}>
                <Text>{category}</Text>
              </View>
            </View>

            <View style={styles.ColumnModel}>
              <View style={styles.textContainer}>
                <Text>{manufacturer}</Text>
              </View>
            </View>

            <View style={styles.ColumnCheck}>
              <View style={styles.textContainer}>
                <Text style={styles.textNegrita}></Text>
              </View>
            </View>
          </View>
    </>
  );
}

export { ItemAccessoriesCheckList };