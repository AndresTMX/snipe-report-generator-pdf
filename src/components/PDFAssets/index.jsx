import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

function MyAssets({ tag, serial, category, typeClean }) {

  const styles = StyleSheet.create({
    tableRowAssets: {
      margin: "auto",
      height: "24px",
      flexDirection: "row",
      width: "100%",
    },

    tableColAssetId: {
      width: "15%",
      padding: "2px",
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
    },

    tableColAssetIdText: {
      width: "20%",
      padding: "2px",
      borderTop: "1",
      borderColor: "black",
      borderRight: "1",
      borderStyle: "solid",
      textAlign: "center",
    },

    tableColDescription: {
      width: "25%",
      padding: "2px",
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
    },

    tableColDescriptionText: {
      width: "30%",
      padding: "2px",
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
      borderTop: "1",
    },

    tableColNS: {
      width: "30%",
      padding: "2px",
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
    },

    tableColNSText: {
      width: "30%",
      padding: "2px",
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
      borderTop: "1",
    },

    tableColTypeMaintances: {
      width: "20%",
      padding: "2px",
      borderRight: "1",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
    },

    tableColTypeMaintancesText: {
      width: "20%",
      padding: "2px",
      borderColor: "black",
      borderStyle: "solid",
      textAlign: "center",
      borderTop: "1",
    },

    tableColObservers: {
      width: "20%",
      padding: "2px",
      textAlign: "center",
    },

    tableColObserversText: {
      width: "20%",
      padding: "2px",
      textAlign: "center",
      borderTop: "1",
    },
  });

  return (
    <View style={styles.tableRowAssets}>
      <View style={styles.tableColAssetIdText}>
        <Text>{tag}</Text>
      </View>

      <View style={styles.tableColDescriptionText}>
        <Text>{category}</Text>
      </View>

      <View style={styles.tableColNSText}>
        <Text>{serial}</Text>
      </View>

      <View style={styles.tableColTypeMaintancesText}>
        <Text>{typeClean}</Text>
      </View>

    </View>
  );
}

export { MyAssets };
