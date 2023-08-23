import { Text, View, StyleSheet} from "@react-pdf/renderer";

const Styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        width:'80px'
    },
    header:{
        backgroundColor:'blue',
        color:'white'
    },

})

function ItemCompareMonths({dataConfig}) {
    return ( 
       <>
        {dataConfig.map((config, index) => (
        <View key={index} style={Styles.container}>
          <View>
            <Text>
            {config.monthProgram}
            </Text>
          </View>

          <View>
            <Text>
            {config.monthComplete}
            </Text>
          </View>
          
        </View>
        ))}
       </>
     );
}

export {ItemCompareMonths};