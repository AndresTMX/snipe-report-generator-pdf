import { Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  
  titleBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "14px",
  },

  containerFirmas: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    gap: "10px",
  },
  boxFirma: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "5px",
    width: "40%",
    fontSize: "10px",
    lineHeight: "1.2px",

  },
  nameFirma: {
    borderTop: "1",
    borderStyle: "solid",
    borderColor: "black",
    margin: "0px",
  },
  spaceFirm: {
    display: "flex",
    justifyContent: "flex-end",
    height: "30px",
    margin: "0px",
  },
});
function Firmas({ storage }) {

  const { user, managerSystems, typeDocument, becario, manager, emisor } = storage
    ? storage
    : {};

  return (
    <>

      <View style={styles.container}>

      {typeDocument === "CR" && (
        <View style={styles.titleBox}>
          <Text>ATENTAMENTE</Text>
        </View>
      )}
       
       <View style={styles.containerFirmas}>

       <View style={styles.boxFirma}>
            <View style={styles.spaceFirm}>
              <Text>{emisor}</Text>
            </View>

            <View style={styles.nameFirma}>
              <Text>NOMBRE Y FIRMA DEL PERSONAL DE TI</Text>
            </View>
          </View>

        {becario && (
          <View style={styles.boxFirma}>
            <View style={styles.spaceFirm}>
              <Text>{user}</Text>
            </View>

            <View style={styles.nameFirma}>
              <Text>NOMBRE Y FIRMA DEL JEFE INMEDIATO</Text>
            </View>
          </View>
        )}

       </View>
          
        <View style={styles.containerFirmas}>
          <View style={styles.boxFirma}>
            <View style={styles.spaceFirm}>
              <Text>{managerSystems}</Text>
            </View>

            <View style={styles.nameFirma}>
              <Text>NOMBRE Y FIRMA DEL LIDER DE TI</Text>
            </View>
          </View>

          <View style={styles.boxFirma}>
            <View style={styles.spaceFirm}>
              <Text>{user}</Text>
            </View>

            <View style={styles.nameFirma}>
              <Text>FIRMA DEL USUARIO</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export { Firmas };
