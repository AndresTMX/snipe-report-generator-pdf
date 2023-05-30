import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import {useTitleDocument} from "../../Hooks/useTitleDocument";

const styles = StyleSheet.create({
  actaCabecera: {
    display: "flex",
    flexDirection: "row",
    border: "1",
    borderStyle: "solid",
    borderColor: "black",
  },
  
  actaCabeceraLogo: {
    width: "100px",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1",
    borderRightColor: "black",
  },

  logo: {
    width: "90px",
    height: "90px",
    objectFit: "contain",
  },
  
  actaCabeceraTitle: {
    display: "flex",
    fontSize: "24px",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1",
    borderRightColor: "black",
    textAlign: "center",
    width: "60%",
    padding: "10px",
  },

  actaCabeceraDate: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
  },

  actaCabeceraDateBlock: {
    display: "flex",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontSize: "11px",
  },

  borderTop: {
    borderTop: "1",
    borderTopColor: "black",
  },

  borderBottom: {
    borderBottom: "1",
    borderBottomColor: "black",
  },
});

const actaCabeceraDateBlockTop = {
  ...styles.actaCabeceraDateBlock,
  ...styles.borderTop,
};

const actaCabeceraDateBlockBottom = {
  ...styles.actaCabeceraDateBlock,
  ...styles.borderBottom,
};

function Cabecera({ storage, image, typeFormat }) {

  const {typeDocument, dateDay} = storage? storage: {};

  const {title} = useTitleDocument(typeDocument)

  return (
    <View style={styles.actaCabecera}>

      <View style={styles.actaCabeceraLogo}>
        <Image
          style={styles.logo}
          src={image ? image : "image.png"}
          alt={"logo"}
        />
      </View>

      <View style={styles.actaCabeceraTitle}>
        <Text>{title}</Text>
      </View>

      <View style={styles.actaCabeceraDate}>
        <Text style={actaCabeceraDateBlockBottom}>Version: 00</Text>
        <Text style={styles.actaCabeceraDateBlock}>Fecha: {dateDay}</Text>
        <Text style={actaCabeceraDateBlockTop}>Codigo: {typeFormat}</Text>
      </View>
    </View>
  );
}

export { Cabecera };
