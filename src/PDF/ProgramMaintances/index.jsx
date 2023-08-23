import { Document,Page, View, StyleSheet} from "@react-pdf/renderer";
import { HeaderTableMaintance } from "./HeaderTableMaintance";
import { ItemTableMaintance } from "./ItemTableMaintance";

const Styles = StyleSheet.create({

    document:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'cemter',  
        height:'100%',
        width:'100%',    
    },
    page:{
        display:'flex',
        flexDirection:'column',
        margin:'auto',  
        gap:'10px',
        height:'95%',
        width:'95%',
        border:'1',
        borderStyle:'solid',    
    },
    SectionItemMaintance:{
        display:'flex',
        flexDirection:'column',
        width:'100%',
        height:'auto',
        gap:'10px'
    }
})

function ProgramMaintances({ dataUsers, image, configState }) {

    return (
        <Document>
       
            <Page size="LETTER" style={Styles.document}>

                <View style={Styles.page}>

                    <HeaderTableMaintance image={image} />

                    <View style={Styles.SectionItemMaintance}>

                    <ItemTableMaintance dataUsers={dataUsers} configState={configState} />
                        
                    </View>
                </View>
            </Page>

        </Document>
    );
}

export { ProgramMaintances };
