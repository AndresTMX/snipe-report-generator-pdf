import { Document,Page, Text, View, StyleSheet} from "@react-pdf/renderer";
import { HeaderTableMaintance } from "./HeaderTableMaintance";
import { ItemTableMaintance } from "./ItemTableMaintance";
import { extractNameCompany } from "../../Helpers/actionsMaintance";
import {useImagePDF} from '../../Hooks/useImagePDF';

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

function ProgramMaintances({ storage }) {

    const {maintances} = storage;

    // const company = extractNameCompany(maintances)

    const {image} = useImagePDF('Conexiones Y Mangueras Industriales De Minatitlan')

    return (
        <Document>

            <Page size="LETTER" style={Styles.document}>

                <View style={Styles.page}>


                    <HeaderTableMaintance image={image} />

                    <View style={Styles.SectionItemMaintance}>

                    <ItemTableMaintance userData={''} />
                        
                    </View>
                </View>


            </Page>



        </Document>
    );
}

export { ProgramMaintances };

{/* {storage.documentGenerate && (
    const data = maitnancesForUser(maintannces, 'user');

    data.map((userData, index) => (
        <ItemTableMaintance userData={userData} />
    ))
    
)} */}