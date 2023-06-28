//styles
import '../../index.css'
//Hook
import {useGetLicenses} from '../../Hooks/useGetLicenses';
//Componente
import {ViewItems} from '../ViewItems/';
import { ThreeDots } from '../Loading/';
import {ItemLicense} from '../ItemLicense/';
//Material UI
import {Box, IconButton, Container, ButtonGroup, Button, Paper } from '@mui/material';

function LicensesBox({idUser, closeBox}) {

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
        <ViewItems>
          {loading && (
            <div className="container-loading">
              <ThreeDots />
            </div>
          )}

          {!loading && !renderMap.length && (
            <Container  sx={{display:'flex', flexDirection:'column', gap:'10px', width:'100%'}}>
              <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
              <p className='title'>Sin licencias asignadas</p>
                <Button className="button-close" onClick={closeBox}>
                  x
                </Button>
              </Box>
            </Container>
          )}

          {!loading && renderMap.length && (
            <Container
            sx={{display:'flex', flexDirection:'column', gap:'10px', width:'100%'}}>
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
        </ViewItems>
      </>
    );
}

export {LicensesBox};