import {
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({

    sectionData:{
        width:'100%',
        display:'flex',
        flexDirection:'column'
    },

    sectionContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
    },

    sectionContainerFolio:{
        display:'flex',
        width:'40%',
        flexDirection:'row',
        border:'1.5',
        borderColor:'black',
        height:'25px',
        justifyContent:'space-around',
        alignItems:'center',
        paddingLeft:'2px'
    },

    borderR:{
        display:'flex',
        height:'25px',
        borderRight:'1',
        borderColor:'black',
        justifyContent:'center',
        paddingRight:'10px'
    },

    sectionContainerDate:{
        display:'flex',
        width:'60%',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    
    dateDay: {
        display:'flex',
        height:'45px',
        width:'35%',
        border:'1.5',
        justifyContent:'center',
        borderColor:'black',
        padding:'5px'
    },

    tableDate: {
        display: "table",
        width: "45%",
        borderStyle: "solid",
        borderColor: "black",
      },

      sectionContainerName:{
        marginTop:'20px',
        marginBottom:'20px'
      },

      table: {
        display: "flex",
        width: "100%",
        borderStyle: "solid",
        flexDirection:'row',
      },
  
      tableRow: {
        margin: "auto",
        height: "22px",
        flexDirection: "row",
        width: "100%",
      },

      CNtableRow: {
        margin: "auto",
        height: "40px",
        flexDirection: "column",
        width: "25%",
      },

      CNtableRowName: {
        margin: "auto",
        height: "40px",
        flexDirection: "column",
        width: "50%",
      },

      tableColD: {
        width: "60px",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        padding: "2",
        textAlign: "center",
      },
  
      tableColM: {
        width: "60px",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        padding: "2",
        textAlign: "center",
      },

      tableColA: {
        width: "60px",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        padding: "2",
        textAlign: "center",
      },
  
      tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        padding: "2",
      },

      CNtableCol: {
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        padding: "2",
        textAlign:'center',
      },
  
      tableCell: {
        margin: "auto",
        marginTop: 1,
        fontSize: "11",
      },


});

function CabeceraBE({storage, DayNum, monthName, YearNum }) {
  return (
    <>
      <View style={styles.sectionData}>

        <View style={styles.sectionContainer}>

          <View style={styles.sectionContainerFolio}>
            <View style={styles.borderR}>
              <Text style={styles.FolioBaja}>Folio de baja</Text>
            </View>
            <View>
              <Text>32423423</Text>
            </View>
          </View>

          <View style={styles.sectionContainerDate}>

            <View style={styles.dateDay}>
              <Text>Fecha que solicita</Text>
            </View>

            <View style={styles.tableDate}>
              <View style={styles.tableRow}>
                <View style={styles.tableColD}>
                  <Text>D</Text>
                </View>
                <View style={styles.tableColM}>
                  <Text>M</Text>
                </View>
                <View style={styles.tableColA}>
                  <Text>A</Text>
                </View>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableColD}>
                  <Text>{DayNum}</Text>
                </View>
                <View style={styles.tableColM}>
                  <Text>{monthName}</Text>
                </View>
                <View style={styles.tableColA}>
                  <Text>{YearNum}</Text>
                </View>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.sectionContainerName}>

          <View style={styles.table}>

            <View style={styles.CNtableRowName}>
              <View style={styles.CNtableCol}>
                <Text style={styles.CNtableCellTitle}>Nombre de Usuario</Text>
              </View>
              <View style={styles.CNtableCol}>
                <Text style={styles.CNtableCell}>{storage?.user}</Text>
              </View>
            </View>

            <View style={styles.CNtableRow}>
              <View style={styles.CNtableCol}>
                <Text style={styles.CNtableCellTitle}>Departamento</Text>
              </View>
              <View style={styles.CNtableCol}>
                <Text style={styles.CNtableCell}>{storage?.department}</Text>
              </View>
            </View>

            <View style={styles.CNtableRow}>
              <View style={styles.CNtableCol}>
                <Text style={styles.CNtableCellTitle}>Jefe inmediato</Text>
              </View>
              <View style={styles.CNtableCol}>
                <Text style={styles.CNtableCell}>{storage?.manager}</Text>
              </View>
            </View>

          </View>

        </View>
      </View>
    </>
  );
}

export { CabeceraBE };
