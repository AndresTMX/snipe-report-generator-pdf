import { Text, View, StyleSheet} from "@react-pdf/renderer";
import { extractTags, extractDevices, extractTypesMaintances } from "../../../Helpers/extractProperties";

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
        width:'10%',
        textAlign:'center',
        justifyContent:'center',
        borderLeft:'1',
        borderColor:'black'
    },
    descriptionCol:{
        display:'flex',
        width:'14%',
        textAlign:'center',
        justifyContent:'center',
        borderLeft:'1',
        borderColor:'black'
    },
    locationCol:{
        display:'flex',
        width:'15%',
        textAlign:'center',
        justifyContent:'center',
         borderLeft:'1',
        borderColor:'black'
    },
    actionCol:{
        display:'flex',
        width:'10%',
        textAlign:'center',
        justifyContent:'center',
         borderLeft:'1',
        borderColor:'black'
    },
    monthCol:{
        display:'flex',
        width:'12%',
        textAlign:'center',
        justifyContent:'center',
        textTransform:'uppercase',
        borderLeft:'1',
        borderColor:'black'
    },
    nameCol:{
        display:'flex',
        width:'28%',
        textAlign:'center',
        justifyContent:'center',
         borderLeft:'1',
        borderColor:'black'
    },
    boxText:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'2px',
        paddingBottom:'2px',

    },

})

function ItemTableMaintance({user, count, configState}) {    
    const newCount = (count + 1).toString()
    const listTags = extractTags(user)
    const listDevices = extractDevices(user)
    const listTypes = extractTypesMaintances(user)

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
                    {configState[0].monthProgram === '' ?'PENDIENTE' : configState[0].monthProgram}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                    {configState[1].monthProgram === '' ?'PENDIENTE' : configState[1].monthProgram}
                    </Text>
                </View>

                <View style={Style.monthCol}>
                    <Text style={Style.boxText}>
                    {configState[2].monthProgram === '' ?'PENDIENTE' : configState[2].monthProgram}
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
                    {listTags.map((tag, index) => (
                        <Text  key={index} style={Style.boxText}>{tag}</Text>
                    ))}
                </View>

                <View style={Style.descriptionCol}>
                    {listDevices.map((device, index) => (
                        <Text  key={index} style={Style.boxText}>
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
                    {listTypes.map((type, index) => (
                        <Text key={index}  style={Style.boxText}>
                        {type}
                        </Text>
                    ))}
                </View>

                <View style={{...Style.monthCol }}>
                    <Text style={{ ...Style.boxText}}>
                    {configState[0].status === false ?'PENDIENTE' : configState[0].monthComplete}
                    </Text>
                </View>

                <View style={{...Style.monthCol }}>
                    <Text style={{ ...Style.boxText}}>
                        {configState[1].status === false ?'PENDIENTE' : configState[1].monthComplete}
                    </Text>
                </View>

                <View style={{...Style.monthCol }}>
                    <Text style={{...Style.boxText}}>
                        {configState[2].status === false ?'PENDIENTE' : configState[2].monthComplete}
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