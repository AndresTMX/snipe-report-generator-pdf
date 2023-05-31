import {
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  containerHeader: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  headTitle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },

  Containerimg: {
    width: "20%",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    display: "flex",
    width: "80px",
    height: "90px",
    objectFit: "contain",
  },

  ContainerTitleDocument: {
    width: "90%",
  },

  headData: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "black",
    border: "1",
    height:'100px'
  },

  headDataTitles: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    borderRight: "1",
    borderStyle: "solid",
    borderColor: "black",
  },

  headDataText: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },

  TitleDocument: {
    fontSize: "24px",
  },

  textContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1",
    borderTop: "1",
    borderStyle: "solid",
    borderColor: "black",
  },

  ContainerDateday: {
    display: "flex",
    padding: "10px",
    alignItems: "flex-end",
  },

  DatedayBox: {
    display: "flex",
    width: "200px",
    justifyContent: "center",
  },
});

function CabeceraCL({
  user,
  DayNum,
  monthName,
  YaerNum,
  img,
  typeDocument,
  location,
  company,
}) {

    const fecha = `${DayNum + " de " + monthName + " del " +  YaerNum }`

  return (
    <>
      <View style={styles.containerHeader}>
        <View style={styles.ContainerDateday}>
          <View style={styles.DatedayBox}>
            <Text>{fecha}</Text>
          </View>
        </View>

        <View style={styles.headTitle}>
          <View style={styles.Containerimg}>
            <Image style={styles.img} src={img ? img : "img.png"} alt={"img"} />
          </View>

          <View style={styles.ContainerTitleDocument}>
            <Text style={styles.TitleDocument}>CHECKLIST DE EQUIPOS INFORMATICOS</Text>
          </View>
        </View>

        <View style={styles.headData}>

          <View style={styles.headDataTitles}>
            
            <View style={styles.textContainer}>
              <Text style={styles.textNegrita}>PERSONAL</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textNegrita}>EMPRESA</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textNegrita}>UBICACIÓN</Text>
            </View>
          </View>

          <View style={styles.headDataText}>

            <View style={styles.textContainer}>
              <Text>{user}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text>{company}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text>{location}</Text>
            </View>

          </View>

        </View>

      </View>
    </>
  );
}

export { CabeceraCL };
