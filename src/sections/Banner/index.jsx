import Box from '@mui/material/Box';
//            backgroundImage:'url("https://comimsa.net/wp-content/uploads/2022/10/4-Diseno-fondo-Tapiz-scaled.jpg")',
import banner from '../../../public/statics/banner.png'


function Banner() {
    return ( 
        <Box
        sx={{
            backgroundImage:'url("../../../public/statics/banner.png")',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
            objectFit:'contain',
            width: '100%',
            height: '170px',
            position:'fixed',
            zIndex:'3',
            top:'-10px',
            '@media (max-width: 1050px)': {
                backgroundSize:'cover',
                backgroundPosition:'initial',
              },
        }}
        />
     );
}

export {Banner};