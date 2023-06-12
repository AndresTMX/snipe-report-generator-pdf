import { Text, View, StyleSheet } from "@react-pdf/renderer";
import formatDateDay from '../../Helpers/dateDay';
const styles = StyleSheet.create({

  mainContainer:{
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:'50%'
  },

  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    lineHeight:'1.2px',
    width: "90%",
  },

  titleBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
  },
  listBox: {
    display: "flex",
    gap:'5px',
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: "12px",
    lineHeight:'1.2px',
    width: "90%",
  },
  containerFirmas: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-around',
    width: "90%",
    gap: "10px",
  },
  boxFirma:{
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    gap:'5px',
    width:'40%',
    fontSize: "12px",
    lineHeight:'1.2px',
  },
  nameFirma:{
    borderTop:'1',
    borderStyle:'solid',
    borderColor:'black',
    margin:'0px',
  },
  spaceFirm:{
    display:'flex',
    justifyContent:'flex-end',
    height:'80px',
    margin:'0px',
  }
});

function BodyCartaResponsiva({ storage }) {
  const { user, company, location, dateDay, assets, managerSystems } = storage
    ? storage
    : {};
  const {year, day, mounth} =  formatDateDay(dateDay)
  const dataAsset = assets ? assets[0] : [];

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.titleBox}>
          <Text>Coatzacoalcos, Veracruz {day} de {mounth} del {year}</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.titleBox}>
            <Text>DEPARTAMENTO DE SISTEMAS</Text>
            <Text>ASUNTO: CARTA RESPONSIVA DE {dataAsset.name}</Text>
          </View>

          <View style={styles.container}>
            <View style={styles.textBox}>
              <Text>
                Sirva este documento como comprobante de entrega de{" "}
                {dataAsset.category?.name} , marca{" "}
                {dataAsset.manufacturer?.name}, modelo {dataAsset.model?.name},
                con número de serie {dataAsset.serial}, el cuál le prtenece a {company}, 
                y se entrega a {user} quien a partir del día {day} de {mounth} del {year} se
                compromete a resguardarlo y darle uso estrictamente laboral y evitar:
              </Text>
            </View>

            <View style={styles.listBox}>
              <Text>• Contacto con agua</Text>
              <Text>• Conectarlo de forma erronea</Text>
              <Text>• Sobrecalentamiento </Text>
              <Text>• Cerrarlo de forma abrupta</Text>
              <Text>
                • Escanear con grapas en las hojas (cristal o alimentador)
              </Text>
              <Text>• Llegar al limite establecido de tinta</Text>
              <Text>• Modificar la configuración del equipo</Text>
            </View>

            <View style={styles.textBox}>
              <Text>
                Al firmar la siguiente carta responsiva el usuario que se le
                otorga el equipo da su consentimiento, para ser sancionado en
                dado caso que el equipo llegue a sufrir algún daño por mal uso.
              </Text>
            </View>
          </View>
        </View>

      </View>
    </>
  );
}

export { BodyCartaResponsiva };
