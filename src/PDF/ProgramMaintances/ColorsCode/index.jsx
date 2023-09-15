import { View,Text, StyleSheet } from "@react-pdf/renderer";

const Style = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'flex-end',
        paddingRight:'20px',
        gap:'10px',
        margin:'0px'
    },
    Item:{
        display:'flex',
        height:'20px',
        justifyContent:'center',
        alignItems:'center',
        padding:'5px'
    },
    boxText:{
        fontSize:'9px',
        color:'white'
    }

})

function ColorsCode() {
    const dataCodes = [
        {color: 'red', code:'Programado'},
        {color: 'orange', code:'No realizado'},
        {color: 'green', code:'Realizado'}
    ]
    return ( 
        <View style={Style.Container}>
            {dataCodes.map((item) => (
                <View style={{...Style.Item,  backgroundColor:`${item.color}`}} key={item.color}>
                    <View style={Style.boxText}>
                        <Text style={Style.boxText}>{item.code}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

export {ColorsCode};