import { Document,Page, Text, View, StyleSheet} from "@react-pdf/renderer";
import { config } from "localforage";

const Style = StyleSheet.create({
    sectionItem:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        margin:'auto',
        height:'auto',
        border:'1'
    },
    sectionItemHeader:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        
    }
})

function ItemTableMaintance({userData}) {
    return ( 
        <View style={Style.sectionItem}>
            // headerTable
            <View style={Style.sectionItemHeader}>
                //counter
                <View>
                    
                </View>

                //Tags
                <View>
                    <Text>ID</Text>
                </View>

                //Description
                <View>
                    <Text>
                        Descripción
                    </Text>
                </View>

                //Ubicacion
                <View>
                    <Text>
                        Ubicación
                    </Text>
                </View>
                
                //Acción
                <View>
                    <Text>
                        Mantenimiento
                    </Text>
                </View>

                //Programado vs Realizo
                <View>
                    P/R
                </View>

                {/* {config.map((month)=> (
                    <View key={month}>
                       <Text>{month}</Text>
                    </View>
                ))} */}


            </View>
        </View>
     );
}

export {ItemTableMaintance};