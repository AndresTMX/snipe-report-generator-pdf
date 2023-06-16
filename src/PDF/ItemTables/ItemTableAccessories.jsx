import { View, StyleSheet, Text } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    //contenedor de la tabla
    tableContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "auto",
    },
    //contenedor del titulo de la tabla
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
    //Tabla
    table: {
      display: "flex",
      flexDirection:'column',
      width:'100%',
    },
    //Fila de titulos
    rowTitles:{
      display: 'flex',
      flexDirection:'row',
      width:'100%',
      borderBottom:'1',
      borderColor:'black',
      borderStyle:'solid'
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
      id:{
          width:'15%',
          borderLeft: "1",
          borderRight: "1",
          borderColor:'black',
          borderStyle:'solid'
      },
      name:{
          width:'30%',
          borderRight:'1',
          borderColor:'black',
          borderStyle:'solid'
      },
      manufacturer:{
          width:'25%',
          borderLeft: "1",
          borderRight: "1",
          borderColor:'black',
          borderStyle:'solid'
      },
      category:{
          width:'30%'
      }
  })

function ItemTableAccessories({id, name, manufacturer, category}) {
  return (
    <>
      <View style={styles.rowTitles}>
        <View style={[styles.Boxtitle, RowStyles.id]}>
          <Text>{id}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.name]}>
          <Text>{name}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.category]}>
          <Text>{category}</Text>
        </View>

        <View style={[styles.Boxtitle, RowStyles.manufacturer]}>
          <Text>{manufacturer}</Text>
        </View>
      </View>
    </>
  );
}

export { ItemTableAccessories };
