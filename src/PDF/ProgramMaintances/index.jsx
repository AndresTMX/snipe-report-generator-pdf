import { Document,Page, View,Text, StyleSheet} from "@react-pdf/renderer";
import { HeaderTableMaintance } from "./HeaderTableMaintance"
import { DataHeader } from '../../PDF/ProgramMaintances/DataHeader';
import { ItemTableMaintance } from "./ItemTableMaintance";
import { Firmas } from "./Firmas";
import { currentMonth , extractMonth} from '../../Helpers/Date'


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
        gap:'5px'
    },
    Pagination:{
        display:'flex',
        width:'95%',
        margin:'auto',
        height:'20px',
        fontSize:'10px',
        alignItems:'flex-end',
        position:'absolute',
        bottom:'5px'
    }
})

function ProgramMaintances({ dataUsers, image, configState, managerSystems, userCurrent, total }) {

  // Divide dataUsers en grupos de 5
  const groupsOFive = [];
  for (let i = 0; i < dataUsers.length; i += 5) {
    groupsOFive.push(dataUsers.slice(i, i + 5));
  }

  const endPage = groupsOFive?.length;

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
                        {pageIndex === 0 && <HeaderTableMaintance image={image} />}
                        {pageIndex === 0 && <DataHeader 
                        sucursal={dataUsers[0][0].location} 
                        title={dataUsers[0][0].title}
                        total={total}
                        />}
                        <View style={Styles.SectionItemMaintance}>
                            {group.map((user,index) => (
                                <ItemTableMaintance
                                    key={index}
                                    user={user}
                                    index={index}
                                    page={pageIndex}
                                    currentMonth={currentMonth}
                                    extractMonth={extractMonth}
                                    configState={configState}
                                />
                            ))}
                        </View>
                        <View style={Styles.Pagination}>
                            <Text>{` Pagina ${pageIndex + 1} / ${endPage}`}</Text>
                        </View>
                        {pageIndex === endPage - 1 && (
                            <Firmas Manager={managerSystems} userSystems={userCurrent}/>
                        )}
                    </View>
                </Page>
            ))}

        </Document>
    );
}

export { ProgramMaintances };
