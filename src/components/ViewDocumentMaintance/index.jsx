import { Paper,  Container, Box, Button, IconButton, Typography } from "@mui/material";
//icons
import { IoIosCloseCircle } from "react-icons/io";
//actions
import { switchDocument } from "../../Helpers/actionsMaintance";

function ViewDocumentMaintance({ state, dispatch }) {

    const {maintances, user} = state;

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

        



      </Paper>
    </Container>
  );
}

export { ViewDocumentMaintance };