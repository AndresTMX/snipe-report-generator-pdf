import {Text, Image, View, StyleSheet} from "@react-pdf/renderer";

const Styles = StyleSheet.create({

    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:'80px',
        width:'100%',
        borderBottom:'1',
    },
    sectionImage: {
        display:'flex',
        width:'15%',
        justifyContent:'center',
        alignItems:'center',
        borderRight:'1',
        borderColor:'black',
        borderStyle:'solid'
    },
    boxImage: {
        display:'flex',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:'5px'
    },
    logo:{
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    sectionTitle:{
        display:'flex',
        flexDirection:'column',
        width:'65%',
        height:'100%',
        padding:'10px',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        borderRight:'1',
        borderColor:'black',
        borderStyle:'solid',
        fontSize:'15px',
        fontFamily:'Helvetica',
        fontWeight:'bold'
    },
    sectionDataDocument:{
        display:'flex',
        flexDirection:'column',
        width:'20%',
        justifyContent:'center',
    },
    boxData:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'100%',
        height:'33.33%',
        fontSize:'9px',
        textAlign:'left',
        paddingLeft:'3px'
    },
    boxDataBottom:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'100%',
        height:'33.33%',
        fontSize:'9px',
        textAlign:'left',
        borderBottom:'1',
        paddingLeft:'3px'
    }

})

function HeaderTableMaintance({image}) {
    return ( 
        <>
        <View style={Styles.container}>
            <View style={Styles.sectionImage}>
                <View style={Styles.boxImage}>
                    <Image
                    src={image? image : 'image.png'}
                    alt="image"
                    />
                </View>
            </View>

            <View style={Styles.sectionTitle}>
                <Text>
                    {'PROGRAMA DE MANTENIMIENTO PREVENTIVO \n A EQUIPOS DE COMPUTO'}
                </Text>
            </View>

            <View style={Styles.sectionDataDocument}>
                <View style={Styles.boxDataBottom}>
                    <Text>Version 3</Text>
                </View>

                <View style={Styles.boxDataBottom}>
                    <Text>Fecha </Text>
                </View>

                <View style={Styles.boxData}>
                    <Text>Código: F-SGC-TI-04</Text>
                </View>
            </View>

        </View>
        </>
     );
}

export {HeaderTableMaintance};