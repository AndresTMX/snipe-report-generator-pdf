import { Paper,  Container, Box, Button, IconButton, Typography, Select, MenuItem, InputLabel } from "@mui/material";
//icons
import { IoIosCloseCircle } from "react-icons/io";
//actions
import { switchDocument,  switchViewDocument } from "../../Helpers/actionsMaintance";
//components
import { UserItemMaintance } from "../UserItemMaintance";

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

          <IconButton onClick={() => switchDocument(dispatch, false)}>
            <IoIosCloseCircle />
          </IconButton>
        </Box>

        <UserItemMaintance maintances={maintances} dispatch={dispatch}/>

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