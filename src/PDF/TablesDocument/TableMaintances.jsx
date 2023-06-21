import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { ItemTableMaintance } from '../ItemTables/ItemTableMaintance';

const styles = StyleSheet.create({
  //contenedor de la tabla
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    borderTop:'1',
    borderLeft:'1',
    borderRight:'1',
    borderStyle:'solid',
  },
  //contenedor del titulo de la tabla
  containerTitle: {
    display: "flex",
    width: "100%",
    height: "20px",
    fontSize: "12px",
    textAlign: "center",
    justifyContent:'center',
    borderBottom:'1',
  },
  //Tabla
  table: {
    display: "flex",
    flexDirection:'column',
    width:'100%',
  },
  //Fila de titulos
  rowTitles:{
    display: 'flex',
    flexDirection:'row',
    width:'100%',
    borderStyle:'solid',
    borderColor:'black',
    borderBottom:'1'
  },
  //Estilos base del titulo
  Boxtitle:{
    display:'flex',
    height:'18px',
    fontSize:'10px',
    justifyContent:'center',
    alignItems:'center',
  }
});

const RowStyles = StyleSheet.create({
    tag:{
        width:'15%',
        borderColor:'black',
        borderStyle:'solid'
    },
    description:{
        width:'30%',
        borderRight:'1',
        borderLeft:'1',
        borderColor:'black',
        borderStyle:'solid'
       
    },
    ns:{
        width:'30%',
        borderColor:'black',
        borderStyle:'solid',
        borderRight:'1'
    },
    maintance:{
        width:'25%',
    }
})

function TableMaintances({storage}) {
  const {assets} = storage? storage:[];
  const {typeDocument} = storage? storage:{};

  function generateTitle (typeDocument){
    let title
    if(typeDocument === 'MP'){
     return title = 'MANTENIMIENTO PREVENTIVO'
    }else{
     return title= 'MANTENIMIENTO CORRECTIVO'
    }
  }

  const title = typeDocument? generateTitle(typeDocument): 'null';

  return (
    <>
      <View style={styles.tableContainer}>
        <View style={styles.containerTitle}>
          <Text>{title}</Text>
        </View>

        <View style={styles.table}>
            
            <View style={styles.rowTitles}>
                
                <View style={[styles.Boxtitle, RowStyles.tag]}>
                    <Text>OFCMI</Text>
                </View>

                <View style={[styles.Boxtitle, RowStyles.description]}>
                    <Text>DESCRIPCIÓN</Text>
                </View>

                <View style={[styles.Boxtitle, RowStyles.ns]}>
                    <Text>NUMERO DE SERIE</Text>
                </View>

                <View style={[styles.Boxtitle, RowStyles.maintance]}>
                    <Text>TIPO DE MANTENIMIENTO</Text>
                </View>

            </View>
              
            {
                  assets.map((asset) => (
                    <ItemTableMaintance
                    key={asset.id}
                    tag={asset.asset_tag}
                    description={asset.category?.name}
                    serie={asset.serial}
                    maintance={asset?.custom_fields?.TypeMaintances?.value}
                    />
                  ))
                }
        </View>
      </View>
    </>
  );
}

export { TableMaintances };
