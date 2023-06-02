import { View, StyleSheet, Text } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  //Fila de titulos
  rowTitles:{
    display: 'flex',
    flexDirection:'row',
    width:'100%',
    borderBottom:'1',
    borderStyle:'solid',
    borderColor:'black'
  },
  //Estilos base del titulo
  Boxtitle:{
    display:'flex',
    height:'18px',
    fontSize:'10px',
    justifyContent:'center',
    alignItems:'center',
  }
});

const RowStyles = StyleSheet.create({
    tag:{
        width:'15%',
        borderRight:'1',
        borderColor:'black',
        borderStyle:'solid'
    },
    description:{
        width:'30%',
        borderRight:'1',
        borderColor:'black',
        borderStyle:'solid'
    },
    ns:{
        width:'30%',
        borderRight:'1',
        borderColor:'black',
        borderStyle:'solid'
    },
    maintance:{
        width:'25%'
    }
})

function ItemTableMaintance({tag, description, serie, maintance}) {
  return (
    <>
      <View style={styles.rowTitles}>
        <View style={[styles.Boxtitle, RowStyles.tag]}>
          <Text>{tag}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.description]}>
          <Text>{description}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.ns]}>
          <Text>{serie}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.maintance]}>
          <Text>{maintance}</Text>
        </View>
      </View>
    </>
  );
}

export { ItemTableMaintance };
