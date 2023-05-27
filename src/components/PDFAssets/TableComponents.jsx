import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";


import { ItemComponent } from "./ItemComponent";

function RenderComponents(components) {

    const flatComponents = components.flat();

    Font.register({
        family: "RobotoBold",
        src: "../../../public/fonts/Roboto/Roboto-Bold.ttf",
    });
      
   const styles = StyleSheet.create({
        ContainerTableComponents: {
          display: "flex",
          flexDirection: "column",
          height: "auto",
          width: "100%",
        },
      
        HeadContainer: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        },
      
        BoxTitle: {
          textAlign: "center",
          width: "100%",
          fontFamily: "RobotoBold",
          fontSize: "18px",
          height:'40px',
          marginTop:'10px'
        },
      
        TableContainer: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
        },
      
        Table: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
        },
      
        RowTitles: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          borderStyle:'solid',
          borderColor:'black',
          borderTop:'1',
          borderBottom:'1',
          height:'30px'
        },
        
        IdCol:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'10%',
          height:'25px',
          borderStyle:'solid',
          borderColor:'black',
          borderLeft:'1',
          borderRight:'1'
        },

        componentCol:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'30%',
          height:'25px',
          borderStyle:'solid',
          borderColor:'black',
          borderLeft:'1',
          borderRight:'1'
        },

        categoryCol:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'30%',
          height:'25px',
          borderStyle:'solid',
          borderColor:'black',
          borderRight:'1'
        },

        serieCol:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'30%',
          height:'25px',
          borderStyle:'solid',
          borderColor:'black',
          borderRight:'1',
        }

    });


    return (
      <>
        <View style={styles.ContainerTableComponents}>

          <View style={styles.HeadContainer}>

            <View style={styles.BoxTitle}>
              <Text>Componentes incluidos en los activos del usuario</Text>
            </View>

          </View>

          <View style={styles.TableContainer}>
            <View style={styles.Table}>
              <View style={styles.RowTitles}>

                <View style={styles.IdCol}>
                  <View>
                    <Text>ID</Text>
                  </View>
                </View>

                <View style={styles.componentCol}>
                  <View>
                    <Text>COMPONENTE</Text>
                  </View>
                </View>

                <View style={styles.categoryCol}>
                  <View>
                    <Text>CATEGORIA</Text>
                  </View>
                </View>

                <View style={styles.serieCol}>
                  <View>
                    <Text>N° SERIE</Text>
                  </View>
                </View>
              </View>

              {flatComponents.map((component) => (
                <ItemComponent key={component.id} component={component} />
              ))}
            </View>
          </View>
        </View>
      </>
    );
}

function RenderComponentDefault(){
    return (
        <>
          <View>
          <Text>Sin componentes registrados</Text>
          </View>
        </>
      );
}

function TableComponents({ components, check }) {

   const flatComponents = components.flat();

   const validateComponents =  flatComponents.length
  
    return(
    check && validateComponents > 0?
    RenderComponents(components)
    :
    RenderComponentDefault()
    )
}

export { TableComponents };
