import { Text, View, StyleSheet} from "@react-pdf/renderer";

const Style = StyleSheet.create({
    sectionItem:{
        display:'flex',
        flexDirection:'row',
        width:'98%',
        margin:'auto',
        height:'auto',
        border:'1'
    },
    sectionItemHeader:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        fontSize:'9px'
    },
    counterCol:{
        width:'5%',
        backgroundColor:'#1976d2',
    },
    idCol:{
        width:'15%',
        color:'white',
        textAlign:'center',
        backgroundColor:'#1976d2',
    },
    descriptionCol:{
        width:'20%',
        color:'white',
        textAlign:'center',
        backgroundColor:'#1976d2',
    },
    locationCol:{
        width:'15%',
        color:'white',
        textAlign:'center',
        backgroundColor:'#1976d2',
    },
    actionCol:{
        width:'15%',
        color:'white',
        textAlign:'center',
        backgroundColor:'#1976d2',
    },
    monthCol:{
        width:'10%',
        color:'white',
        textAlign:'center',
        backgroundColor:'#1976d2',
    },
    nameCol:{
        width:'20%',
        color:'white',
        textAlign:'center',
        backgroundColor:'#1976d2',
    }

})

function ItemTableMaintance({dataUsers, configState}) {
    return ( 
        <View style={Style.sectionItem}>
            // headerTable
            <View style={Style.sectionItemHeader}>
                //counter
                <View style={Style.counterCol}>
                    
                </View>

                //Tags
                <View style={Style.idCol}>
                    <Text>ID</Text>
                </View>

                //Description
                <View style={Style.descriptionCol}>
                    <Text>
                        Descripción
                    </Text>
                </View>

                //Ubicacion
                <View style={Style.locationCol}>
                    <Text>
                        Ubicación
                    </Text>
                </View>
                
                //Acción
                <View style={Style.actionCol}>
                    <Text>
                        Acción
                    </Text>
                </View>

                //Programado vs Realizo
                <View style={Style.monthCol}>
                    <Text>
                        {configState[0].monthProgram}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text>
                        {configState[1].monthProgram}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text>
                        {configState[2].monthProgram}
                    </Text>
                </View>

                <View style={Style.nameCol}>
                    <Text>
                        Responsable
                    </Text>
                </View>
                

            </View>
        </View>
     );
}

export {ItemTableMaintance};