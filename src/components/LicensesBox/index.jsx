//styles
import '../../index.css'
//Hook
import {useGetLicenses} from '../../Hooks/useGetLicenses';
//Componente
import { ThreeDots } from '../Loading/';
import {ItemLicense} from '../ItemLicense/';
//Material UI
import {Box, IconButton, Container, ButtonGroup, Button, Paper } from '@mui/material';

function LicensesBox({idUser, licencesNum , closeBox}) {

    const {dataLicenses, loading} = useGetLicenses(idUser);

    function MapData(array){
        if(array){
            return array.map((data) => ({
            id:data.id,
            license: data.name,
            manufacturer:data.manufacturer?.name,
            category: data.category?.name,
            expiration: data.expiration_date,
            notes: data.notes
        }))
        }else{
            return false
        }
    }

    const renderMap = MapData(dataLicenses);

    return (
      <>
        <Container sx={{width:'auto'}}>
          
          {loading && licencesNum > 0 && (
            <Paper elevation={2} sx={{backgroundColor:'white', padding:'10px'}}>
              <ThreeDots />
            </Paper>
          )}

          {licencesNum === 0 && (
            <Paper  sx={{display:'flex', flexDirection:'column', gap:'10px', width:'300px', padding:'10px', backgroundColor:'white'}}>
              <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
              <p className='title'>Sin licencias asignadas</p>
              </Box>
                <Button className="button-close" onClick={closeBox}>
                  Ok
                </Button>
            </Paper>
          )}

          {!loading && licencesNum>0 && (
            <Container
            sx={{display:'flex', flexDirection:'column', gap:'10px', width:'100%',  backgroundColor:'white', height:'330px', padding:'20px',  overflowY:'auto',
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "lightgray",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "gray",
            }, }}>
              <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
              <h2 className='title'>Licencias Asignadas</h2>
                <Button onClick={closeBox}>
                  x
                </Button>
              </Box>

              {renderMap.map((license) => (
                <ItemLicense
                  key={license.id}
                  license={license.license}
                  manufacturer={license.manufacturer}
                  category={license.category}
                  expiration={license.expiration}
                  notes={license.notes}
                />
              ))}
            </Container>
          )}
        </Container>
      </>
    );
}

export {LicensesBox};