import { Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    container:{
        display:'flex',
        width:'100%',
        border:'1',
        borderColor:'black',
        borderStyle:'solid',
        flexDirection:'column'
    },
    boxTitle:{
        display:'flex',
        width:'100%',
        height:'20px',
        alignItems:'center',
        fontSize:'12px',
        borderBottom:'1',
        borderColor:'black',
        borderStyle:'solid',
    },

    boxText:{
        display:'flex',
       alignItems:'center',
       height:'50px'
    },
    comentText:{
        display:'flex',
        fontSize:'11px',
        width:'90%',
        height:'auto',
        lineHeight:'1.5px',
        color:'black',
        paddingTop:'5px',
        paddingBottom:'5px'
    }
})

function Comentarios({storage}) {
    const { coment } = storage? storage:'sin comentarios';
    return ( 
        <>
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <Text>COMENTARIOS</Text>
            </View>
            <View style={styles.boxText}>
               <Text style={styles.comentText}>{coment}</Text>
            </View>
        </View>
        </>
     );
}

export {Comentarios};