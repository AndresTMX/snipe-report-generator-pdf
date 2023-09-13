import { View,Text, StyleSheet } from "@react-pdf/renderer";

const Styles = StyleSheet.create({
    Container:{
        display:'flex',
        marginTop:'0px',
        marginBottom:'0px',
        marginLeft:'auto',
        marginRight:'auto',
        width:'95%',
        flexDirection:'column',
        borderStyle:'solid',    
        border:'1',
    },
    ItemTop:{
        display:'flex',
        margin:'auto',
        width:'100%',
        flexDirection:'row',
        borderStyle:'solid',    
        borderBottom:'1',
    },
    ItemBottom:{
        display:'flex',
        margin:'auto',
        width:'100%',
        flexDirection:'row',
    },
    BoxTitle:{
        display:'flex',
        justifyContent:'center',
        height:'20px',
        width:'30%',
        borderRight:'1',
        borderStyle:'solid',
        paddingLeft:'10px'
    },
    BoxText:{
        display:'flex',
        justifyContent:'center',
        height:'20px',
        width:'70%',
        paddingLeft:'10px'
    },
    Texto:{
        fontSize:'10px'

    }

})

function DataHeader({ sucursal, title, }) {
    return ( 
        <View style={Styles.Container}>
            <View style={Styles.ItemTop}>

                <View style={Styles.BoxTitle}>
                    <Text style={Styles.Texto}>
                        Periodo
                    </Text>
                </View>

                <View style={Styles.BoxText}>
                    <Text style={Styles.Texto}>
                        {title}
                    </Text>
                </View>

            </View>

            <View style={Styles.ItemBottom}>

                <View style={Styles.BoxTitle}>
                    <Text style={Styles.Texto}>
                        Sucursal
                    </Text>
                </View>

                <View style={Styles.BoxText}>
                    <Text style={Styles.Texto}>
                        {sucursal}
                    </Text>
                </View>

            </View>
        </View>
     );
}

export {DataHeader};