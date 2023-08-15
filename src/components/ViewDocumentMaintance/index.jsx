import { Paper,  Container, Box, Button, IconButton, Typography, Select, MenuItem, InputLabel } from "@mui/material";
//icons
import { IoIosCloseCircle } from "react-icons/io";
//actions
import { switchDocument } from "../../Helpers/actionsMaintance";
//components
import { UserItemMaintance } from "../UserItemMaintance";

function ViewDocumentMaintance({ state, dispatch }) {

    const {maintances} = state;

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

        <Typography variant="span" >Activos por usuario</Typography>

        <UserItemMaintance maintances={maintances} dispatch={dispatch}/>

        <Typography variant="span">Mes en el que se realizo </Typography>

        <Select
        label="Mes"
        value="Enero"
        >
          <MenuItem value='Enero' >Enero</MenuItem>
          <MenuItem value='Febrero' >Febrero</MenuItem>
        </Select>

        <Typography variant="span">Emisor</Typography>
        <Select
        label="Emisor"
        value="Oscar"
        >
          <MenuItem value='Oscar' >Oscar</MenuItem>
          <MenuItem value='Andres' >Andres</MenuItem>
        </Select>


        <Button variant="contained">Generar documento</Button>

      </Paper>
    </Container>
  );
}

export { ViewDocumentMaintance };