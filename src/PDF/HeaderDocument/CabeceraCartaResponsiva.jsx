import {Text,View, StyleSheet, Image} from "@react-pdf/renderer";
import {useComind} from '../../Hooks/useComind';

const styles = StyleSheet.create({
  //contenedor general
  container:{
    display:'flex',
    flexDirection:'row',
    height:'100px',
    width:'100%',
    border:'1',
    borderStyle:'solid',
    borderColor:'black'
  },
  //contenedor de logo y logo
  containerImage:{
    display:'flex',
    width:'20%',
    height:'100%',
    padding:'5px',
    justifyContent:'center',
    alignItems:'center',
    borderRight:'1',
    borderStyle:'solid',
    borderColor:'black'
  },
  image:{
    height:'90px',
    width:'90px',
    objectFit:'contain'
  },
  //contenedor de titulo de documento y compañia 
  containerTitleCompany:{
    display:'flex',
    flexDirection:'column',
    height:'100%',
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
    borderRight:'1',
    borderStyle:'solid',
    borderColor:'black'
  },

  boxtitle:{
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },

  boxTextTitle:{
    display:'flex',
    height:'100%',
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    fontSize:'14px',
    textTransform: 'uppercase',
  },
  //contenedor de detalles
  containerDetails:{
    display: 'flex',
    flexDirection:'column',
    width:'30%',
    height:'100%',
  },

  blockDetails:{
    display:'flex',
    flexDirection:'row',
    height:'25%',
    width:'168px',
    justifyContent:'center',
    alignItems:'center',
  },

  boxDetailsFull:{
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'9px'
  },

  boxDetailsMid:{
    display:'flex',
    width:'50%',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'9px'
  },

  boxTextRegular:{
    display:'flex',
    height:'100%',
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    fontSize:'9px',
  },

});

const borderStyles = StyleSheet.create({
  borderBottom:{
    borderBottom:'1',
    borderStyle:'solid',
    borderColor:'black'
  },
  borderRight:{
    borderRight:'1',
    borderStyle:'solid',
    borderColor:'black'
  }
})

function CabeceraCR({ storage, image, typeFormat, title }) {

    // const fecha = `${DayNum + " de " + monthName + " del " +  YaerNum }`

    const {company, dateDay} = storage? storage: {};

    const {newName} = useComind(company);

  return (
    <>
      <View style={styles.container}>
        
        //contenedor de logo y logo
        <View style={styles.containerImage}>
          <Image style={styles.image} src={image} alt={company}/>
        </View>

        //contenedor de titulo de documento y compañia 
        <View style={styles.containerTitleCompany}>

          <View style={styles.boxTextTitle}>
            <View style={[styles.boxtitle, borderStyles.borderBottom]}>
              <Text>{newName}</Text>
              </View>
          </View>

          <View style={styles.boxTextTitle}>
            <View style={styles.boxtitle}>
              <Text>{title}</Text>
            </View>
          </View>

        </View>

        //contenedor de detalles del documento
        <View style={styles.containerDetails}>

          //codigo: codigo
          <View style={[styles.blockDetails, borderStyles.borderBottom]}>

            <View style={[styles.boxDetailsMid, borderStyles.borderRight]}>
              <View style={styles.boxTextRegular}>
                <Text>CODIGO DEL DOC</Text>
              </View>
            </View>
            <View style={styles.boxDetailsMid}>
              <View style={styles.boxTextRegular}>
                <Text>FORM</Text>
              </View>
            </View>

          </View>
          //version del documento
          <View style={[styles.blockDetails, borderStyles.borderBottom]}>
              <View style={styles.boxDetailsFull} >
                <Text>
                  VERSION:00
                </Text>
              </View>
          </View>
          //fecha
          <View style={[styles.blockDetails, borderStyles.borderBottom]}>

          <View style={[styles.boxDetailsMid, borderStyles.borderRight]}>
              <View style={styles.boxTextRegular}>
                <Text>FECHA DE EMISIÓN</Text>
              </View>
            </View>
            <View style={styles.boxDetailsMid}>
              <View style={styles.boxTextRegular}>
                <Text>{dateDay}</Text>
              </View>
            </View>
           
          </View>
          //CONTADOR DE PAGINAS
          <View style={styles.blockDetails}>
            <View style={styles.boxDetailsFull}>
                <Text>Pagina 1 de 1</Text>
            </View>
          </View>

        </View>


      </View>
    </>
  );
}

export { CabeceraCR };
