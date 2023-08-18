import { Document,Page, Text, View, StyleSheet} from "@react-pdf/renderer";
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";
import { HeaderTableMaintance } from "./HeaderTableMaintance";
import { ItemTableMaintance } from "./ItemTableMaintance";
import {useImagePDF} from '../../Hooks/useImagePDF';
import { CircularProgress, Box } from "@mui/material";

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

function ProgramMaintances({ company, dataUsers }) {

    const {image} = useImagePDF(company)
    const { configState, loading, updateMonthComplete } = useProgramMaintances(company)

    return (
        <>


        {loading && (
           <Box sx={{ display: 'flex', height:'100%', width:'100%', backgroundColor:'gray' }}>
           <CircularProgress />
         </Box>
        )}

        {loading === false &&(
            <Document>

            <Page size="LETTER" style={Styles.document}>

                <View style={Styles.page}>


                    <HeaderTableMaintance image={image} />

                    <View style={Styles.SectionItemMaintance}>

                    <ItemTableMaintance dataUsers={dataUsers} />
                        
                    </View>
                </View>


            </Page>

        </Document>
        )}


        </>
    );
}

export { ProgramMaintances };

{/* {storage.documentGenerate && (
    const data = maitnancesForUser(maintannces, 'user');

    data.map((userData, index) => (
        <ItemTableMaintance userData={userData} />
    ))
    
)} */}