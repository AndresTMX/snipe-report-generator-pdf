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
        height:'98%',
        width:'98%',
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

  // Divide dataUsers en grupos de 6
  const groupsOFive = [];
  for (let i = 0; i < dataUsers.length; i += 5) {
    groupsOFive.push(dataUsers.slice(i, i + 5));
  }

    return (
        <Document>

            {groupsOFive.map((group, pageIndex) => (
                <Page
                    key={pageIndex}
                    size="LETTER"
                    orientation="landscape"
                    style={Styles.document}
                >
                    <View style={Styles.page}>
                        <HeaderTableMaintance image={image} />
                        <View style={Styles.SectionItemMaintance}>
                            {group.map((user, index) => (
                                <ItemTableMaintance
                                    key={index}
                                    count={index}
                                    user={user}
                                    configState={configState}
                                />
                            ))}
                        </View>
                    </View>
                </Page>
            ))}

        </Document>
    );
}

export { ProgramMaintances };
