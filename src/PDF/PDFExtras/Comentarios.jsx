import { Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    container:{
        display:'flex',
        width:'100%',
        height:'100px',
        border:'1',
        borderColor:'black',
        borderStyle:'solid',
        flexDirection:'column'
    },
    boxTitle:{
        display:'flex',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'12px',
        borderBottom:'1',
        borderColor:'black',
        borderStyle:'solid',
    },
    comentText:{
        display:'flex',
        width:'100%',
        fontSize:'12px',
        lineHeight:'13px',
        color:'black'
    }
})

function Comentarios({storage}) {
    const {coment} = storage? storage:'sin comentarios';
    return ( 
        <>
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <Text>COMENTARIOS</Text>
            </View>
            <View>
               <Text style={styles.comentText}>
               {coment}
               </Text>
            </View>
        </View>
        </>
     );
}

export {Comentarios};