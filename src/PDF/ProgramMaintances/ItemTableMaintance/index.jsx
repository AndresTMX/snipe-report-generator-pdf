import { Text, View, StyleSheet, Font} from "@react-pdf/renderer";
import { extractTags, extractDevices } from "../../../Helpers/extractProperties";

const Style = StyleSheet.create({
    sectionItem:{
        display:'flex',
        flexDirection:'column',
        width:'98%',
        margin:'auto',
        height:'auto',
        border:'1'
    },
    sectionItemHeader:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        fontSize:'9px',
        height:'20px',
        color:'white',
        backgroundColor:'#1976d2'
    },
    sectionItemBody:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        fontSize:'9px',
        height:'auto',
    },
    counterCol:{
        display:'flex',
        width:'5%',
        textAlign:'center',
        justifyContent:'center',
    },
    idCol:{
        display:'flex',
        width:'15%',
        textAlign:'center',
        justifyContent:'center',
    },
    descriptionCol:{
        display:'flex',
        width:'14%',
        textAlign:'center',
        justifyContent:'center',
    },
    locationCol:{
        display:'flex',
        width:'15%',
        textAlign:'center',
        justifyContent:'center',
    },
    actionCol:{
        display:'flex',
        width:'15%',
        textAlign:'center',
        justifyContent:'center',
    },
    monthCol:{
        display:'flex',
        width:'10%',
        textAlign:'center',
        justifyContent:'center',
        textTransform:'uppercase'
    },
    nameCol:{
        display:'flex',
        width:'26%',
        textAlign:'center',
        justifyContent:'center',
    },
    boxText:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'2px',
        paddingBottom:'2px'
    }

})

function ItemTableMaintance({user, count, configState}) {
    const newCount = (count + 1).toString()
    const listTags = extractTags(user)
    const listDevices = extractDevices(user)

    return ( 
        <View style={Style.sectionItem}>

            <View style={Style.sectionItemHeader}>
                <View style={Style.counterCol}>
                    <Text style={Style.boxText}>
                       N°
                    </Text>
                </View>

                <View style={Style.idCol}>
                    <Text style={Style.boxText}>
                        IDs
                    </Text>
                </View>

                <View style={Style.descriptionCol}>
                    <Text style={Style.boxText}>
                        DESCRIPCIÓN
                    </Text>
                </View>

                <View style={Style.locationCol}>
                    <Text style={Style.boxText}>
                        UBICACIÓN
                    </Text>
                </View>
                
                <View style={Style.actionCol}>
                    <Text style={Style.boxText}>
                        ACCIÓN
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                        {configState[0].monthProgram}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                        {configState[1].monthProgram}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                        {configState[2].monthProgram}
                    </Text>
                </View>

                <View style={Style.nameCol}>
                    <Text style={Style.boxText}>
                        RESPONSABLE
                    </Text>
                </View>
                

            </View>

            <View style={Style.sectionItemBody}>
                <View style={Style.counterCol}>
                    <Text style={Style.boxText}>{newCount}</Text>
                </View>

                <View style={Style.idCol}>
                    {listTags.map((tag) => (
                        <Text style={Style.boxText}>{tag}</Text>
                    ))}
                </View>

                <View style={Style.descriptionCol}>
                    {listDevices.map((device) => (
                        <Text style={Style.boxText}>
                        {device}
                        </Text>
                    ))}
                </View>

                <View style={Style.locationCol}>
                    <Text style={Style.boxText}>
                        {user[0].location}
                    </Text>
                </View>
                
                <View style={Style.actionCol}>
                    <Text style={Style.boxText}>
                        {user[0].type}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                    check
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                        {configState[1].monthComplete}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                        {configState[2].monthComplete}
                    </Text>
                </View>

                <View style={Style.nameCol}>
                    <Text style={Style.boxText}>
                    {user[0].user}
                    </Text>
                </View>
                

            </View>
        </View>
     );
}

export {ItemTableMaintance};