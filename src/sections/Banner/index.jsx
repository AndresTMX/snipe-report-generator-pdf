import {Box, Container} from '@mui/material/';
import banner from '../../../public/statics/banner.png';
import logo from '../../../public/statics/comind.ico';


function Banner() {

    return ( 
        <Container
        maxWidth='xxl'
        sx={{
            display:'flex',
            alignItems:'center',
            // backgroundImage: `url(${banner})`,
            backgroundImage:'url(https://comimsa.net/wp-content/uploads/2022/10/4-Diseno-fondo-Tapiz-scaled.jpg)', 
            backgroundRepeat:'repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
            objectFit:'contain',
            width: '100%',
            height: '80px',
            position:'fixed',
            zIndex:'3',
            left:'0px',
            '@media (max-width: 1050px)': {
                backgroundSize:'cover',
                backgroundPosition:'initial',
              },
        }}
        >

            <Container maxWidth='xxl' sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'90%' , margin:'auto'}}>

                <Box sx={{display:'flex', height:'60px', margin:'0px', width:'60px' , backgroundImage:`url(${logo})`, backgroundPosition:'center', backgroundSize:'cover', objectFit:'contain',}}/>

                <Box sx={{display:'flex', flexDirection:'column', height:'100%', margin:'0px', width:'auto', }}>
                    <h3 style={{color:'white', fontWeight:'500', margin:'0px'}}>Tu aliado confiable en </h3>
                    <h3 style={{color:'white', fontWeight:'500', margin:'0px'}}>Conexiones y Mangueras</h3>
                    <span style={{borderBottom:'1', borderColor:'#faa419', borderStyle:'solid', width:'300px'}}/>
                </Box>

            </Container>

        </Container>
     );
}

export {Banner};