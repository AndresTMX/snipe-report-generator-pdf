import {Text,View, StyleSheet,} from "@react-pdf/renderer";

const styles = StyleSheet.create({
   
  RowItems: {
    display: 'flex',
    flexDirection:'row',
    width:'100%',
    borderBottom:'1',
    borderLeft:'1',
    borderRight:'1',
    borderStyle:'solid',
    borderColor:'black'
  },
  
  IdCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderRight:'1'
  },

  componentCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderRight:'1'
  },

  categoryCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderRight:'1'
  },

  serieCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    height:'18px',
  }
});


function ItemComponent({id, name, category, serial}) {
  return (
    <>
        <View style={styles.RowItems}>

          <View style={styles.IdCol}>
            <View>
              <Text>{id}</Text>
            </View>
          </View>

          <View style={styles.componentCol}>
            <View>
              <Text>{name}</Text>
            </View>
          </View>

          <View style={styles.categoryCol}>
            <View>
            <Text>{category}</Text>
            </View>
          </View>

          <View style={styles.serieCol}>
            <View>
              <Text>{serial}</Text>
            </View>
          </View>

        </View>
    </>
  );
}

export { ItemComponent };
