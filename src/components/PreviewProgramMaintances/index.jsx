import { Paper, IconButton, CircularProgress, Container,Stack, Button, Box, Typography } from "@mui/material";
// icons
import { Viewer } from "../PDFViewer";
import { IoIosCloseCircle } from "react-icons/io";
import { ProgramMaintances } from "../../PDF/ProgramMaintances";
import { switchViewDocument, assetsForUser , extractLocation, extractNameCompany, calcCostTotal} from "../../Helpers/actionsMaintance";
import { useImagePDF } from "../../Hooks/useImagePDF";
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";
import { PDFDownloadLink } from "@react-pdf/renderer";
import useMediaQuery from "@mui/material/useMediaQuery";

function PreviewProgramMaintances({state, dispatch, managerSystems, userCurrent}) {

   const isMovile = useMediaQuery('(max-width:900px)');

    const {maintances} = state;
    const location = maintances?.length>0? extractLocation(maintances):"";
    const company = maintances?.length>0? extractNameCompany(maintances):"";
    const dataUsers = maintances?.length>0? assetsForUser(maintances, 'user'):"";
    const totalCostMaintances = calcCostTotal(maintances);
    const {image} = useImagePDF(company)
    const { configState, loading, updateMonthComplete } = useProgramMaintances(location)


    return ( 
        <Paper
        elevation={4}
        sx={{ 
            width: '80%',
            height: 'auto', 
            maxHeight:'80%',
            display: 'flex', 
            flexDirection: 'column', 
            padding: '10px', 
            gap: '10px',
        }}>

        <Stack 
        flexDirection='row' 
        justifyContent={isMovile ? 'flex-end' : 'space-between' }
        
        >

        { !isMovile && <ButtonDownload 
          dataUsers={dataUsers} 
          image={image} 
          configState={configState}
          managerSystems={managerSystems}
          userCurrent={userCurrent}
          total={totalCostMaintances}
          />}

          <IconButton
            color="error"
            onClick={() => switchViewDocument(dispatch, false)}
          >
            <IoIosCloseCircle />
          </IconButton>

        </Stack>

        <Box 
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'20px'
        }}
        >
          <Typography>
            Vista previa no disponibe
          </Typography>
          <ButtonDownload 
          dataUsers={dataUsers} 
          image={image} 
          configState={configState}
          managerSystems={managerSystems}
          userCurrent={userCurrent}
          total={totalCostMaintances}
          />
        </Box>

        {!loading && maintances?.length > 0 && !isMovile &&
        (<Viewer>
          <ProgramMaintances 
            dataUsers={dataUsers} 
            image={image} 
            configState={configState}
            managerSystems={managerSystems}
            userCurrent={userCurrent}
            total={totalCostMaintances}
            />
        </Viewer>)}

        {loading && !isMovile &&
        (<Container
         sx={{ 
          width: '80%',
          height: '80%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent:'center', 
          }}>
          <CircularProgress/>
        </Container>)}

      </Paper>
     );
}

export {PreviewProgramMaintances};

function ButtonDownload({dataUsers, image, configState, managerSystems, userCurrent, totalCostMaintances}) {

  const sucursal = dataUsers[0][0].location 
  const title= dataUsers[0][0].title

  const titleDocument = `PROGRAMA DE MANTENIMIENTOS PREVENTIVOS DE ${sucursal} ${title.split(" ")[3]} ${title.split(" ")[4]}`

  return(
      <PDFDownloadLink
      document={<ProgramMaintances 
          dataUsers={dataUsers}
          image={image} 
          configState={configState}
          managerSystems={managerSystems}
          userCurrent={userCurrent}
          total={totalCostMaintances}
          />}
        fileName={titleDocument}
          >

          {({ blob, url, loading, error }) =>
              loading ? (
                  <Button
                      variant="contained"
                  >Cargando...</Button>
              ) : (
                  <Button
                      variant="contained"
                      sx={{
                        '@media (max-width:900px)':{
                          alignItems:'center',
                          justifyContent:'center'
                        }
                      }}
                  >Descargar</Button>
              )
          }

      
          
      </PDFDownloadLink>
  )   
}