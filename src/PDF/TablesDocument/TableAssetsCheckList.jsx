import {Text, View, StyleSheet} from "@react-pdf/renderer";
import { ItemAssetCheckList } from "../ItemTables/ItemAssetCheckList";

const styles = StyleSheet.create({
  
  TableContainer:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
  },

  containerTitle: {
    display: "flex",
    width: "100%",
    height: "20px",
    fontSize: "12px",
    textAlign: "center",
    justifyContent:'center',
    borderTop:'1',
    borderLeft:'1',
    borderRight:'1',
    borderStyle:'solid',
    borderColor:'black'
  },

  TableTableAssetsCheckList: {
    display: "flex",
    height: "18px",
    fontSize:'10px',
    flexDirection: "row",
    width: "100%",
  },

  ColumnId: {
    display: "flex",
    width: "14%",
    borderTop: "1",
    borderColor: "black",
    borderRight: "1",
    borderLeft:'1',
    borderStyle: "solid",
    textAlign: "center",
  },

  ColumnDescription: {
    display: "flex",
    width: "15%",
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
    width: "31%",
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

function TableAssetsCheckList({storage}) {
  const { assets } = storage ? storage : [];
  return (
    <>
      <View style={styles.TableContainer}>

      <View style={styles.containerTitle}>
          <Text>ACTIVOS ASIGNADOS AL USUARIO</Text>
        </View>

        <View style={styles.TableTableAssetsCheckList}>

          <View style={styles.ColumnId}>
            <View style={styles.textContainer}>
                <Text>OFCMI</Text>
            </View>
          </View>

          <View style={styles.ColumnDescription}>
          <View style={styles.textContainer}>
                <Text>Decripción</Text>
            </View>
          </View>

          <View style={styles.ColumnMarca}>
          <View style={styles.textContainer}>
                <Text>Marca</Text>
            </View>
          </View>

          <View style={styles.ColumnModel}>
          <View style={styles.textContainer}>
                <Text>Modelo</Text>
            </View>
          </View>

          <View style={styles.ColumnNS}>
          <View style={styles.textContainer}>
                <Text>NS</Text>
            </View>
          </View>

          <View style={styles.ColumnCheck}>
            <View style={styles.textContainer}>
                <Text style={styles.textNegrita}>Listado</Text>
            </View>
          </View>

        </View>

          {
            assets.map((asset) => (
              <ItemAssetCheckList
              key={asset.asset_tag}
              tag={asset.asset_tag}
              description={asset.category?.name}
              marca={asset.manufacturer?.name}
              modelo={asset.model?.name}
              serie={asset.serial}
              />
            ))
          }

      </View>
    </>
  );
}

export { TableAssetsCheckList };
