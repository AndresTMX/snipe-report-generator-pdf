import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    RowItems: {
        display:'flex',
        flexDirection:'row',
        borderStyle:'solid',
        borderColor:'black',
        borderBottom:'1',
        height:'30px'
    },

    IdCol:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'10%',
      height:'25px',
      borderStyle:'solid',
      borderColor:'black',
      borderLeft:'1',
      borderRight:'1'
    },

    componentCol:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'30%',
      height:'25px',
      borderStyle:'solid',
      borderColor:'black',
      borderLeft:'1',
      borderRight:'1'
    },

    categoryCol:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'30%',
      height:'25px',
      borderStyle:'solid',
      borderColor:'black',
      borderRight:'1'
    },

    serieCol:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'30%',
      height:'25px',
      borderStyle:'solid',
      borderColor:'black',
      borderRight:'1'
    }
});


function ItemComponent({component}) {
  return (
    <>
        <View style={styles.RowItems}>

          <View style={styles.IdCol}>
            <View>
              <Text>{component.id}</Text>
            </View>
          </View>

          <View style={styles.componentCol}>
            <View>
              <Text>{component.name}</Text>
            </View>
          </View>

          <View style={styles.categoryCol}>
            <View>
            <Text>{component.category?.name}</Text>
            </View>
          </View>

          <View style={styles.serieCol}>
            <View>
              <Text>{component.serial}</Text>
            </View>
          </View>

        </View>
    </>
  );
}

export { ItemComponent };
