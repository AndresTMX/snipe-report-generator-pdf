import { Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    ContainerText:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'100%',
        height:'auto',
        border:'1',
        borderStyle:'solid',
        borderColor:'black',
    },
    ContainerTitle:{
        display:'flex',
        width:'100%',
        height:'20px',
        justifyContent:'center',
        textAlign:'center',
        fontSize:'12px',
        borderStyle:'solid',
        borderColor:'black',
        borderBottom:'1'
    },
    Text:{
        display:'flex',
        flexDirection:'column',
        width:'95%',
        height:'auto',
        gap:'5px',
        fontSize:'10px',
        paddingTop:'5px',
        paddingBottom:'5px'
    },
    nameCompany:{
      fontFamily:'Helvetica-Bold',
      textTransform:'uppercase',
      fontSize:'10px',
      margin:'0px',
      padding:'0px',
    }

})

function Compromiso({storage}) {

    const {user, becario, manager, company } = storage? storage: {};

    return (
      <>
        <View style={styles.ContainerText}>
          <View style={styles.ContainerTitle}>
            <Text>COMPROMISO DEL TRABAJADOR</Text>
          </View>
          {!becario && (
            <View style={styles.Text}>
              <Text>
                El referido equipo de cómputo se me entrega en condición de
                trabajo, el mismo que está bajo mi responsabilidad y cuidado. Me
                comprometo a no instalar ningún software que no esté autorizado
                por el área de sistemas y reportar cualquier falla que se
                encuentre a, a fin de que esta sea reparada.
              </Text>

              <Text>
                "Toda la información que los equipos puedan contener, almacenar
                o procesar es considerada confidencial, por lo cuál comprendo
                la importancia de no dar a conocer o divulgar sea la información
                de mi empleador".
              </Text>

              <Text>
                Asimismo, en caso de tener el equipo un daño o perjuicio por mal
                uso u operación, este será bajo mi responsabilidad y costo, para
                lo cual autorizo a mi empleador <Text style={styles.nameCompany}>{company } </Text> 
                realizar el descuento respectivo por el costo de la reparación.
              </Text>
            </View>
          )}

          {becario && (
            <View style={styles.Text}>
              <Text>
                El referido equipo de cómputo se entrega a <Text style={styles.nameCompany}>{user } </Text>  en condición
                de trabajo como practiante/becario, el mismo que está bajo
                responsabilidad de mi jefe inmediato <Text style={styles.nameCompany}>{manager } </Text>.
              </Text>

              <Text>
                Yo <Text style={styles.nameCompany}>{user } </Text>. me comprometo a no instalar ningún software que no
                esté autorizado por el área de sistemas y reportar cualquier
                falla que se encuentre a, a fin de que esta sea reparada.
              </Text>

              <Text>
                Toda la información que los equipos puedan contener, almacenar
                o procesar es considerada confidencial, para lo cual comprendo
                la importancia de no dar a conocer las contraseñas que se me han
                entregado para impedir el acceso no autorizado al mismo.
              </Text>

              <Text>
                En caso de tener el equipo un daño o perjuicio por mal
                uso u operación, este será responsabilidad de <Text style={styles.nameCompany}>{manager } </Text> por lo cual 
                se autoriza a <Text style={styles.nameCompany}>{company } </Text>. a realizar el descuento respectivo 
                por el costo de la reparación.
              </Text>
            </View>
          )}
        </View>
      </>
    );
}

export {Compromiso};