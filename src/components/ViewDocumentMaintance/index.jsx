import { Paper,  Container, Box, Button, Typography, IconButton } from "@mui/material";
//actions
import { switchDocument,  switchViewDocument } from "../../Helpers/actionsMaintance";
//components
import { UserItemMaintance } from "../UserItemMaintance";
import { ChipProgramMaintance } from "../ChipProgramMaintance";
// icons
import { IoIosCloseCircle } from "react-icons/io";


function ViewDocumentMaintance({ state, dispatch }) {

  const {maintances} = state;

  const GenerateDocument = () => {
    switchDocument(dispatch, false)
    switchViewDocument(dispatch, true)
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

       { maintances?.length > 0 &&( <ChipProgramMaintance maintances={maintances} />)}

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