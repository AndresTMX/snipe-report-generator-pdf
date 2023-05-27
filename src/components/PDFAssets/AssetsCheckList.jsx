import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register(
  {
    family: "RobotoMedium",
    src: "../../../public/fonts/Roboto/Roboto-Medium.ttf",
  },

  {
    family: "RobotoBold",
    src: "../../../public/fonts/Roboto/Roboto-Black.ttf",
  }
);

const styles = StyleSheet.create({

    TableContainer:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        fontSize:'10px'
      },
    
      TableTableAssetsCheckList: {
        display: "flex",
        margin: "auto",
        height: "30px",
        flexDirection: "row",
        width: "100%",
      },
    
      ColumnId: {
        display: "flex",
        width: "15%",
        borderTop: "1",
        borderColor: "black",
        borderRight: "1",
        borderLeft:'1',
        borderStyle: "solid",
        textAlign: "center",
      },
    
      ColumnDescription: {
        display: "flex",
        width: "25%",
        borderTop: "1",
        borderColor: "black",
        borderRight: "1",
        borderStyle: "solid",
        textAlign: "center",
      },
    
      ColumnMarca: {
        display: "flex",
        width: "15%",
        borderTop: "1",
        borderColor: "black",
        borderRight: "1",
        borderStyle: "solid",
        textAlign: "center",
      },
    
      ColumnModel: {
        display: "flex",
        width: "15%",
        borderTop: "1",
        borderColor: "black",
        borderRight: "1",
        borderStyle: "solid",
        textAlign: "center",
      },
    
      ColumnNS: {
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
        width: "10%",
        borderTop: "1",
        borderRight:'1',
        textAlign: "center",
      },
    
      textNegrita: {
        fontFamily: "RobotoMedium",
      },
    
      textContainer: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1",
        borderTop: "1",
        borderStyle: "solid",
        borderColor: "black",
      },
    
      ContainerRowAssets:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
      }
});

function AssetsCheckList({ tag, description, marca, modelo, serie }) {
  return (
    <>
      <View style={styles.TableContainer}>

        <View style={styles.TableTableAssetsCheckList}>

          <View style={styles.ColumnId}>
            <View style={styles.textContainer}>
              <Text>{tag}</Text>
            </View>
          </View>

          <View style={styles.ColumnDescription}>
            <View style={styles.textContainer}>
              <Text>{description}</Text>
            </View>
          </View>

          <View style={styles.ColumnMarca}>
            <View style={styles.textContainer}>
              <Text>{marca}</Text>
            </View>
          </View>

          <View style={styles.ColumnModel}>
            <View style={styles.textContainer}>
              <Text>{modelo}</Text>
            </View>
          </View>

          <View style={styles.ColumnNS}>
            <View style={styles.textContainer}>
              <Text>{serie}</Text>
            </View>
          </View>

          <View style={styles.ColumnCheck}>
            <View style={styles.textContainer}>
              <Text></Text>
            </View>
          </View>

        </View>

      </View>
    </>
  );
}

export { AssetsCheckList };
