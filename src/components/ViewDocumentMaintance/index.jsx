import { Paper,  Container, Box, Button, Typography, IconButton} from "@mui/material";
//actions
import { switchDocument,  switchViewDocument } from "../../Helpers/actionsMaintance";
//components
import { UserItemMaintance } from "../UserItemMaintance";
import { ChipProgramMaintance } from "../ChipProgramMaintance";
import { FormEditMaintances } from "../FormEditMaintances";
import { MiniSearcher } from "../MiniSearcher";
// icons
import { IoIosCloseCircle } from "react-icons/io";
//hooks
import { useSearcher } from "../Searcher/useSearcher";
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";
import { extractLocation, switchNotification } from "../../Helpers/actionsMaintance";
import { useEditMaintances } from "../../Hooks/useEditMaitnaces";
import useMediaQuery from "@mui/material/useMediaQuery";

function ViewDocumentMaintance({ state, dispatch, managerSystems, userCurrent}) {

  const {maintances} = state;
  
  const {search, setSearch} = useSearcher()
  const {states, actions} = useEditMaintances(maintances, dispatch, false)
  const isMovile = useMediaQuery('(max-width:950px)');
  const { selectUser, typeItem }= states 
  const { updateMaintance, setSelectUser, Toggle } = actions
  const location = maintances?.length > 0? extractLocation(maintances):"";
  const { configState, loading, updateMonthComplete } = useProgramMaintances(location)

  const GenerateDocument = () => {

    const message = maintances?.length === 0 ?
     "Aún no haz agregado mantenimientos a la lista" 
     : "Configura el usuario emisor"
    if(maintances?.length > 0 && managerSystems && userCurrent){
      switchDocument(dispatch, false)
      switchViewDocument(dispatch, true)
    }else{
      switchDocument(dispatch, false)
      switchNotification(dispatch, message)
    }
    
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowY:'auto',
        maxHeight:'90vh',
        paddingTop:'150px',
        paddingBottom:'20px'
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          width: "90%",
          maxWidth:'500px',
          height:'auto',          
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
          <Typography 
          variant={isMovile? 'span': 'h5'}>
            Configuracion de documento
          </Typography>

          <IconButton 
          variant="contained" 
          color="error"
          onClick={() => switchDocument(dispatch, false)} >
            <IoIosCloseCircle/>
          </IconButton>

        </Box>

        {maintances?.length === 0 && (
          <Typography variant="span">Sin activos agregados</Typography>
        )}

        {maintances.length > 0 && !selectUser &&(
        <UserItemMaintance
          maintances={maintances}
          setSelectUser={setSelectUser}
          selectUser={selectUser}
          dispatch={dispatch}
          typeItem={typeItem} />
      )}

      {selectUser && (
        <FormEditMaintances
        selectUser={selectUser}
        setSelectUser={setSelectUser}
        update={updateMaintance}
        />
      )}

       {!selectUser && maintances?.length > 0 &&
       <MiniSearcher 
       maintances={maintances}
       limit={10}
       Toggle={Toggle}
       />}

        {maintances?.length > 0 && !selectUser && 
        (<ChipProgramMaintance 
        configState={configState} 
        loading={loading} 
        updateMonthComplete={updateMonthComplete} />)}

        {maintances?.length > 0 && !selectUser &&
        (<Button
        onClick={GenerateDocument} 
        variant="contained">
        Generar documento
        </Button>)}

      </Paper>
    </Container>
  );
}

export { ViewDocumentMaintance };