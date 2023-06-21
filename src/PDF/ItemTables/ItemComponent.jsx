import {Text,View, StyleSheet,} from "@react-pdf/renderer";

const styles = StyleSheet.create({
   
  RowItems: {
    display: 'flex',
    flexDirection:'row',
    width:'100%',
    borderStyle:'solid',
    borderColor:'black',
    borderBottom:'1'
  },
  
  IdCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'5%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
  },

  componentCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'35%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderLeft:'1',
    borderRight:'1'
  },

  categoryCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'20%',
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
  },

  serieColExtraLarge:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'40%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
  },

  checkCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderLeft:'1'
  }
});


function ItemComponent({id, name, category, serial, typeDocument}) {

  const serialStyles = typeDocument === 'CL'? true:false;

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

        <View style={serialStyles? styles.serieCol : styles.serieColExtraLarge }>
          <View>
            <Text>{serial}</Text>
          </View>
        </View>

        {typeDocument === "CL" && (
          <View style={styles.checkCol}>
            <View>
              <Text></Text>
            </View>
          </View>
        )}

      </View>
    </>
  );
}

export { ItemComponent };
