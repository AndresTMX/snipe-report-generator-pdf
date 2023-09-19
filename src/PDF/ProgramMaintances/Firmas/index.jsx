import { Text, View, StyleSheet } from "@react-pdf/renderer";

const Style = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'100%',
        marginTop:'0px',
        marginBottom:'0px',
        marginLeft:'auto',
        marginRight:'auto',
        position:'absolute',
        bottom:'40px'
    },
    Item:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:'9px',
        gap:'5px'
    },
    Line:{
        borderBottom:'1',
        borderStyle:'solid',
    }
})

function Firmas({Manager, userSystems}) {

    return ( 
        <View style={Style.Container}>

            <View style={Style.Item}>
                <View>
                    <Text style={Style.Line}>{Manager}</Text>
                </View>
                <View style={Style.Item}>
                    <Text>
                        Nombre y Firma de Revisión del control
                    </Text>
                    <Text >
                        Lider de TI
                    </Text>
                </View>
            </View>

            <View style={Style.Item}>
                <View>
                    <Text style={Style.Line}>{userSystems}</Text>
                </View>
                <View style={Style.Item}>
                    <Text>
                        Nombre y Firma de la persona que realizó el Mantenimiento
                    </Text>
                    <Text >
                        Auxiliar de TI
                    </Text>
                </View>
            </View>

        </View>
     );
}

export {Firmas};
