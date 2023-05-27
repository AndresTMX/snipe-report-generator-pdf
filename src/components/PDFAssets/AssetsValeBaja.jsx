import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
    Font,
  } from "@react-pdf/renderer";
  
  function AssetsValeBaja({ tag, serial, category, name }) {

    const styles = StyleSheet.create({
      tableRowAssets: {
        height: "30px",
        flexDirection: "row",
        width: "100%",
      },

      tableColAssetIdText: {
        width: "15%",
        padding: "2px",
        borderTop: "1",
        borderColor: "black",
        borderRight: "1",
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

      tableColNSText: {
        width: "30%",
        padding: "2px",
        borderRight: "1",
        borderColor: "black",
        borderStyle: "solid",
        textAlign: "center",
        borderTop: "1",
      },

      tableColTypeMaintancesText: {
        width: "25%",
        padding: "2px",
        borderColor: "black",
        borderStyle: "solid",
        textAlign: "center",
        borderTop: "1",
      },

      containerTable:{
        display:'flex',
        flexDirection:'row',
      },

      columnB:{
        display:'flex',
        width:'50%',
        borderStyle:'solid',
        borderColor:'black',
        borderRight:'1',
        height:'100%'
      },

      columnM:{
        display:'flex',
        width:'50%',
        height:'100%'

      },

      title: {
        fontFamily: "RobotoBold",
        height:'100%'
      },
    });

    return (
      <View style={styles.tableRowAssets}>

        <View style={styles.tableColAssetIdText}>
          <Text>{tag}</Text>
        </View>

        <View style={styles.tableColDescriptionText}>
          <Text>{name}</Text>
        </View>

        <View style={styles.tableColNSText}>
          <Text>{serial}</Text>
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
  
  export { AssetsValeBaja };