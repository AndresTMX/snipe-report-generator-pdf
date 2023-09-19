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
        borderColor:'black',
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

function ItemTableMaintance({user, index, page, currentMonth, extractMonth, configState}) {   

    const newCount = page === 0 ? index + 1 : page * 5 + index + 1;
    const listTags = extractTags(user)
    const listDevices = extractDevices(user)
    const listTypes = extractTypesMaintances(user)

    const compareColorMonth = (monthIndex) => {
        let color 
        let monthMaintance = extractMonth(user[0].start_date)
        let monthConfig = configState[monthIndex].monthProgram
        let monthComplete = configState[monthIndex].monthComplete
        let monthStatus = configState[monthIndex].status

            if( monthConfig === monthComplete && monthStatus|| monthMaintance === monthConfig && monthStatus){
                color = 'green'
            }
            else if( monthComplete != monthConfig  && monthStatus || monthMaintance != monthConfig  && monthStatus){
                color = 'orange'
            }else{
                color= 'white'
            }

            return color
    }

    const compareMonthName = (monthIndex) => {
        let month
        let monthConfig = configState[monthIndex].monthProgram
        let monthMaintance = extractMonth(user[0].start_date)
        let monthComplete = configState[monthIndex].monthComplete
        let monthStatus = configState[monthIndex].status

        if(monthComplete != "" && monthConfig != currentMonth){
            month = monthComplete
        }

        if(monthComplete != "" && monthConfig === currentMonth){
            month = monthMaintance
        }

        if(!monthStatus){
            month = 'PENDIENTE'
        }

        return month
    }


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

                <View style={{...Style.monthCol, 
                backgroundColor:`${configState[0].monthProgram != "" ? "red": "#1976d2"}`,
                }}>
                    <Text style={Style.boxText}>
                    {configState[0].monthProgram === '' ?'SIN PROGRAMAR' : configState[0].monthProgram}
                    </Text>
                </View>

                <View style={{...Style.monthCol,
                 backgroundColor:`${configState[1].monthProgram != "" ? "red": "#1976d2"}`,
                }}>
                    <Text style={Style.boxText}>
                    {configState[1].monthProgram === '' ?'SIN PROGRAMAR' : configState[1].monthProgram}
                    </Text>
                </View>

                <View style={{...Style.monthCol,
                     backgroundColor:`${configState[2].monthProgram != "" ? "red": "#1976d2"}`,}}>
                    <Text style={Style.boxText}>
                    {configState[2].monthProgram === '' ?'SIN PROGRAMAR' : configState[2].monthProgram}
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

                <View style={{...Style.monthCol,
                    backgroundColor:`${compareColorMonth(0)}`,
                    color:`${configState[0].monthComplete != ""? "white": "black"}`
                    }}>
                    <Text style={{ ...Style.boxText}}>
                    { compareMonthName(0)}
                    </Text>
                </View>

                <View style={{...Style.monthCol,
                backgroundColor:`${compareColorMonth(1)}`,
                color:`${configState[1].monthComplete != ""? "white": "black"}`
                }}>
                    <Text style={{ ...Style.boxText}}>
                        { compareMonthName(1)}
                    </Text>
                </View>

                <View style={{...Style.monthCol,
                backgroundColor:`${compareColorMonth(2)}`,
                color:`${configState[2].monthComplete != ""? "white": "black"}`
                }}>
                    <Text style={{...Style.boxText}}>
                        { compareMonthName(2)}
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