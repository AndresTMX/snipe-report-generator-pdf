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
            display: 'flex', 
            width: '90%',
            height: '90%', 
            flexDirection: 'column', 
            padding: '10px', 
            gap: '10px',
        }}>

        <Stack 
        flexDirection='row' 
        justifyContent='space-between'
        >

        <ButtonDownload 
          dataUsers={dataUsers} 
          image={image} 
          configState={configState}
          managerSystems={managerSystems}
          userCurrent={userCurrent}
          maintances={maintances}
          />

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
          width:'100%',
          heigth:'100%',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'20px'
        }}
        >
        
        </Box>

        {!loading && maintances?.length > 0 &&
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

function ButtonDownload({dataUsers, image, configState, managerSystems, userCurrent, maintances}) {

  const sucursal = dataUsers[0][0].location 
  const title= dataUsers[0][0].title
  const total = calcCostTotal(maintances)
  const titleDocument = `PROGRAMA DE MANTENIMIENTOS PREVENTIVOS DE ${sucursal} ${title.split(" ")[3]} ${title.split(" ")[4]}`
  return(
    <PDFDownloadLink
      document={
        <ProgramMaintances
          dataUsers={dataUsers}
          image={image}
          configState={configState}
          managerSystems={managerSystems}
          userCurrent={userCurrent}
          total={total}
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