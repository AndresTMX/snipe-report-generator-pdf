import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { Box, Container, Paper, Button } from "@mui/material";

function DocStoreCardComent({state, dispatch}) {

    const { initialStore, StatesModals } = state? state: {};
    const { storage } = initialStore? initialStore: {};
    const {coment} = storage? storage: 'valor random';

    const CloseBoxComent = () => {
    
        const newState = { ...storage, coment: "" };
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState,
        });
    
        dispatch({
          type: actionTypesModals.setModalComent,
          payload: !StatesModals.modalComent,
        });
      };
    
      const OnChangueText = (event) => {

        const newState = { ...storage, coment: event.target.value, complete:false };
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState
        });
      };
    
      const AddComentDocument = () => {
    
        const newState = { ...storage, coment };
    
        dispatch({
          type: actionTypesDoc.updateStorage,
          payload: newState
        });
    
        dispatch({
          type: actionTypesModals.setModalComent,
          payload: !StatesModals.modalComent
        });
      };

    return (
      <>
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "auto",
            backgroundColor: "white",
            width: "auto",
            padding: "20px",
          }}
        >
          <Container sx={{display:'flex', flexDirection: 'column', width:'100%', justifyContent:'center', gap:'30px'}}>
            <Box sx={{display:'flex',  width:'100%', justifyContent:'end' }}>
              <Button variant="contained" onClick={() => CloseBoxComent()}>x</Button>
            </Box>

            <Box  sx={{display:'flex', flexDirection: 'column', width:'100%', justifyContent:'center', gap:'4px'}}> 
            <span>Agregue comentarios para complementar su documento</span>
            <textarea
              style={{ display:'flex', margin:'0px', height:'120px', padding:'15px', fontSize:'1.2rem'}}
              onChange={(event) => OnChangueText(event)}
              value={coment}
            />
            </Box>

            <Box >
              <Button fullWidth variant="contained" onClick={() => AddComentDocument()}>
                Agregar comentarios
              </Button>
            </Box>
          </Container>
        </Paper>
      </>
    );
}

export {DocStoreCardComent};