import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { Box, Container, Paper, Button, IconButton } from "@mui/material";
import { IoIosCloseCircle } from "react-icons/io";


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
            margin: "auto",
            backgroundColor: "white",
            width: "90%",
            maxWidth:'500px',
            padding: "15px",
          }}
        >
          <Container sx={{display:'flex', flexDirection: 'column', width:'100%', justifyContent:'center', gap:'20px'}}>
            <Box sx={{
              display:'flex', 
              justifyContent:'space-between', 
              }}>
                
              <span>Agregue comentarios para complementar su documento</span>

              <IconButton 
              sx={{
                position:'relative',
                left:'20px',
                bottom:'10px',
                '&& :hover':{
                  color:'red',
                  animate:'transition 300ms',
                  transition:'ease'
                }
              }}
              variant="contained" 
              onClick={() => CloseBoxComent()}>
                <IoIosCloseCircle/>
              </IconButton>
            </Box>

            <Box  sx={{display:'flex', flexDirection: 'column', width:'100%', justifyContent:'center'}}> 
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