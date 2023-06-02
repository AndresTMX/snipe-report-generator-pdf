import {Text, View, StyleSheet} from "@react-pdf/renderer";
import { ItemComponent } from "../ItemTables/ItemComponent";

const styles = StyleSheet.create({
  ContainerTableComponents: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  HeadContainer: {
    display: "flex",
    width: "100%",
    height: "20px",
    fontSize: "12px",
    textAlign: "center",
    justifyContent:'center',
    borderTop:'1',
    borderLeft:'1',
    borderRight:'1',
    borderStyle:'solid',
    borderColor:'black'
  },

  HeadContainerNotFound: {
    display: "flex",
    width: "100%",
    height: "20px",
    fontSize: "12px",
    textAlign: "center",
    justifyContent:'center',
    border:'1',
    borderStyle:'solid',
    borderColor:'black'
  },

  BoxTitle: {
    width: "100%",
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
    fontSize:'10px'
  },

  RowTitles: {
    display: 'flex',
    flexDirection:'row',
    width:'100%',
    border:'1',
    borderStyle:'solid',
    borderColor:'black'
  },
  
  IdCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderRight:'1',
  },

  componentCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderRight:'1'
  },

  categoryCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
    borderRight:'1'
  },

  serieCol:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    height:'18px',
    borderStyle:'solid',
    borderColor:'black',
  }

});

function RenderComponents(components) {

  const flatComponents = components.flat();

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
                <ItemComponent 
                key={component.id}
                id={component.id}
                name={component.name} 
                category={component.category?.name}
                serial={component?.serial}
                 />
              ))}
            </View>
          </View>
        </View>
      </>
    );
}

function RenderComponentDefault() {
  return (
    <>
      <View style={styles.HeadContainerNotFound}>
        <View style={styles.BoxTitle}>
          <Text>No se han encontrado componentes relacionados a los activos del usuario</Text>
        </View>
      </View>
    </>
  );
}

function TableComponents({ components, checkComponents }) {

   const flatComponents = components.flat();

   const validateComponents =  flatComponents.length
  
    return(
    checkComponents && validateComponents > 0?
    RenderComponents(components)
    :
    RenderComponentDefault()
    )
}

export { TableComponents };
