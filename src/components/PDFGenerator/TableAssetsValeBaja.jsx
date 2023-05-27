import {
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { AssetsValeBaja } from "../PDFAssets/AssetsValeBaja";


const styles = StyleSheet.create({
  title: {
    fontFamily: "RobotoBold",
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  sectionAssetsTable: {
    display: "table",
    width: "100%",
    borderTop:'1',
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
    alignItems:'center',
    width: "100%",
  },

  TableColumnId: {
    width: "15%",
    padding: "2px",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },

  TableColumnName:{
    width: "30%",
    padding: "2px",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },

  TableColumnSerie:{
    width: "30%",
    padding: "2px",
    borderRight: "1",
    borderColor: "black",
    borderStyle: "solid",
    textAlign: "center",
  },

  TableColumnState:{
    width: "25%",
    padding: "2px",
    textAlign: "center",
    display:'flex',
    height:'40px'
  },

  containerTable:{
    display:'flex',
    flexDirection:'row',
    borderStyle:'solid',
    borderTop:'1',
  },

  columnB:{
    display:'flex',
    width:'50%',
    borderStyle:'solid',
    borderColor:'black',
    borderRight:'1',
    height:'100%',
    justifyContent:'center'    
  },

  columnM:{
    display:'flex',
    width:'50%',
    height:'100%',
    justifyContent:'center'    
  },
});

function TableAssetsValeBaja({ListAssets,  ListAccessories}) {
  return (
    <>
      <View style={styles.sectionAssets}>
        <View style={styles.sectionAssetsTable}>

          <View style={styles.TableAssetsRow}>
            
            <View style={styles.TableColumnId}>
              <View style={styles.title}>
                <Text>ID OFCMI</Text></View>
            </View>

            <View style={styles.TableColumnName}>
              <View style={styles.title}>
                <Text>DESCRIPCIÓN DE EQUIPO</Text></View>
            </View>

            <View style={styles.TableColumnSerie}>
              <View style={styles.title}>
                <Text>NÚMERO DE SERIE</Text></View>
            </View>

            <View style={styles.TableColumnState}>
              <View style={styles.title}>
                <Text>ESTADO DE EQUIPO</Text>
              </View>
              <View style={styles.containerTable}>
            <View style={styles.columnB}>
              <Text style={styles.title}>B</Text>
            </View>
            <View style={styles.columnM}>
              <Text style={styles.title}>M</Text>
            </View>
          </View>
            </View>
          </View>

          {
            ListAssets.map((asset) => (
              <AssetsValeBaja
              key={asset.id}
              tag={asset.asset_tag}
              serial={asset.serial}
              name={asset.name}
              category={asset.category?.name}
              />
            ))
          }

        </View>
      </View>
    </>
  );
}

export { TableAssetsValeBaja };
