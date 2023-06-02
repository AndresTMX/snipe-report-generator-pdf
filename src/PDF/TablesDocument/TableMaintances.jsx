import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { ItemTableMaintance } from '../ItemTables/ItemTableMaintance';
import { useTitleDocument } from "../../Hooks/useTitleDocument";

const styles = StyleSheet.create({
  //contenedor de la tabla
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  },
  //contenedor del titulo de la tabla
  containerTitle: {
    display: "flex",
    width: "100%",
    height: "18px",
    fontSize: "14px",
    textAlign: "center",
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
  },
  //Estilos base del titulo
  Boxtitle:{
    display:'flex',
    height:'18px',
    justifyContent:'center',
    alignItems:'center',
  }
});

const RowStyles = StyleSheet.create({
    tag:{
        width:'15%'
    },
    description:{
        width:'30%'
    },
    ns:{
        width:'30%'
    },
    maintance:{
        width:'25%'
    }
})

function TableMaintances({storage}) {
  const {assets} = storage? storage:[];
  const {typeDocument} = storage? storage:{};
  const {title} = useTitleDocument(typeDocument);

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
                    <Text>Descripción</Text>
                </View>

                <View style={[styles.Boxtitle, RowStyles.ns]}>
                    <Text>NS</Text>
                </View>

                <View style={[styles.Boxtitle, RowStyles.maintance]}>
                    <Text>Tipo de Mantenimiento</Text>
                </View>

                {
                  assets.map((asset) => (
                    <ItemTableMaintance
                    key={asset.id}
                    tag={asset.tag}
                    description={asset.category?.name}
                    serie={asset.serial}
                    maintance={asset?.TypeMaintances?.value}
                    />
                  ))
                }

            </View>

        </View>
      </View>
    </>
  );
}

export { TableMaintances };
