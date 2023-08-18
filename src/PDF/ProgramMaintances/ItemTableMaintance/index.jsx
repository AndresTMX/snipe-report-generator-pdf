import { Text, View, StyleSheet} from "@react-pdf/renderer";

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

function ItemTableMaintance({dataUsers}) {
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
                    Programado/Realizado
                </View>

                //Programacion 
                <View>
                    Programado/Realizado
                </View>


            </View>
        </View>
     );
}

export {ItemTableMaintance};