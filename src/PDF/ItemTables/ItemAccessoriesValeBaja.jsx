import { Text, View, StyleSheet } from "@react-pdf/renderer";

function ItemAccessoriesValeBaja({ id, description, category }) {
  const styles = StyleSheet.create({
    tableRowAssets: {
      height: "18px",
      flexDirection: "row",
      width: "100%",
      fontSize:'10px'
    },

    tableColAssetIdText: {
      display:'flex',
      width: "15%",
      height:'100%',
      borderTop: "1",
      borderColor: "black",
      borderRight: "1",
      borderStyle: "solid",
      justifyContent:'center',
      textAlign: "center",
    },

    tableColDescriptionText: {
      display:'flex',
      width: "30%",
      justifyContent:'center',
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
      borderTop: "1",
    },

    tableColNSText: {
      display:'flex',
      justifyContent:'center',
      width: "30%",
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
      borderTop: "1",
    },

    tableColTypeMaintancesText: {
      display:'flex',
      justifyContent:'center',
      width: "25%",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
      borderTop: "1",
    },

    containerTable: {
      display: "flex",
      flexDirection: "row",
    },

    columnB: {
      display: "flex",
      width: "50%",
      borderStyle: "solid",
      borderColor: "black",
      borderRight: "1",
      justifyContent:'center',
      alignItems:'center',
      fontSize:'10px',
    },

    columnM: {
      display: "flex",
      width: "50%",
      justifyContent:'center',
      alignItems:'center',
      fontSize:'10px'
    },

    title: {
      height: "18px",
    },
  });

  return (
    <View style={styles.tableRowAssets}>
      <View style={styles.tableColAssetIdText}>
      <Text>{id}</Text>

      </View>

      <View style={styles.tableColDescriptionText}>
        <Text>{description}</Text>
      </View>

      <View style={styles.tableColNSText}>
        <Text>{category}</Text>
      </View>

      <View style={styles.tableColTypeMaintancesText}>
        <View style={styles.containerTable}>
          <View style={styles.columnB}>
            <Text style={styles.title}></Text>
          </View>
          <View style={styles.columnM}>
            <Text style={styles.title}></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export { ItemAccessoriesValeBaja };
