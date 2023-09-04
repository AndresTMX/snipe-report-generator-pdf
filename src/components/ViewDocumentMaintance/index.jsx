import { Paper,  Container, Box, Button, Typography, IconButton } from "@mui/material";
//actions
import { switchDocument,  switchViewDocument } from "../../Helpers/actionsMaintance";
//components
import { UserItemMaintance } from "../UserItemMaintance";
import { ChipProgramMaintance } from "../ChipProgramMaintance";
// icons
import { IoIosCloseCircle } from "react-icons/io";
//hooks
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";
import { extractLocation, switchNotification } from "../../Helpers/actionsMaintance";


function ViewDocumentMaintance({ state, dispatch }) {

  const {maintances} = state;

  const location = maintances?.length > 0? extractLocation(maintances):"";
    
  const { configState, loading, updateMonthComplete } = useProgramMaintances(location)

  const GenerateDocument = () => {
    if(maintances?.length > 0){
      switchDocument(dispatch, false)
      switchViewDocument(dispatch, true)
    }else{
      switchDocument(dispatch, false)
      switchNotification(dispatch, "Aún no haz agregado mantenimientos a la lista")
    }
    
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          width: "500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Configuracion de documento</Typography>

          <IconButton variant="contained" onClick={() => switchDocument(dispatch, false)} >
            <IoIosCloseCircle/>
          </IconButton>

        </Box>

        <UserItemMaintance maintances={maintances} dispatch={dispatch}/>

        {maintances?.length > 0 && <ChipProgramMaintance 
        configState={configState} 
        loading={loading} 
        updateMonthComplete={updateMonthComplete} />}

        <Button
        onClick={GenerateDocument} 
        variant="contained">
        Generar documento
        </Button>

      </Paper>
    </Container>
  );
}

export { ViewDocumentMaintance };