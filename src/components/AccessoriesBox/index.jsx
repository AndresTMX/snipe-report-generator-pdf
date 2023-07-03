import '../../index.css'
//Hooks
import { useItems } from "../../Hooks/useItems";
//ActionTypes
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
//Components
import { Notification } from "../../modals/notification";
import {ThreeDots} from "../Loading/";
//Material UI
import {Box, IconButton, Container, ButtonGroup, Button, Paper } from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
//Icons
import {IoIosCloseCircle} from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';

function AccessoriesBox({
  modal,
  setModal,
  dataAccessories,
  idUser,
  dataUser,
  state,
  loadingAccessorie,
  dispatch,
}) {
  const { user, company, location, manager, email, department } = dataUser;

  const { actions, states } = useItems({
    idUser,
    user,
    company,
    location,
    manager,
    email,
    department,
  });

  const { addAccessories, deleteAccessories } = actions;

  const { countAccessories } = states;

  const { initialStore, StatesModals } = state;

  const dataRender = dataAccessories || [];
  
  const newDataRender =  dataRender.map((accessorie, index)=> {
    return {...accessorie, index}
  })

  const { storage } = initialStore;

  const AccessoriesList = storage ? storage?.accessories.map((accessorie) => accessorie.index) : [];

  const date = new Date(); // fecha actual
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // agregar ceros a la izquierda si el mes es menor a 10
  const day = date.getDate().toString().padStart(2, '0'); // agregar ceros a la izquierda si el día es menor a 10
  const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

  const AddAccessorie = (item, index) => {

    const stateVerification = JSON.parse(localStorage.getItem(idUser));

    const preState = stateVerification ? stateVerification : false;

    const repeat = preState.accessories? 
    preState.accessories.find((accessorie) => accessorie.index === index):false;

    if (repeat) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Ya haz agregado este accesorio",
      });
    } else {
      const newItem = {
        ...item,
        index
      }
      addAccessories(newItem);
    }
  };

  const DeleteAccessorie = (index) => {

    const repeat = storage.accessories.find((accessorie) => accessorie.index === index);
    let newState

    if(!repeat){
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Aun no agregas este accesorio",
      });
    }else{
      deleteAccessories(index)
    }

  }

  const CloseModal = () => {
    if(storage){
      dispatch({ type: actionTypesDoc.updateStorage, payload: storage }); 
      setModal(!modal);
    }else{
      setModal(!modal);
      const newData = JSON.parse(localStorage.getItem(idUser));
      dispatch({ type: actionTypesDoc.updateStorage, payload: {...newData, user, company, location, manager, email, department }}); 
    }
  };


  const GenerateDocument = (typeDocument) => {

    if(!storage?.typeDocument){
      dispatch({ type:actionTypesModals.setModalNotification, payload:'Selecciona el tipo de documento que deseas generar'})
    }
    
    if(storage?.assets.length == 0){
      dispatch({ type:actionTypesModals.setModalNotification, payload:'Agrega activos para generar un documento'})
    }

    if(storage.typeDocument && storage.assets.length>0){
        const document = {
            ...storage,
            typeDocument: storage.typeDocument,
            dateDay: storage.dateDay ? storage.dateDay : formattedDate,
            manager: storage?.manager,
            complete: true
        };
      
        dispatch({ type: actionTypesDoc.updateStorage, payload: document });
    }
};

  return (
    <>
      <Container sx={{display:'flex', flexDirection:'column', backgroundColor:'white'}}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            position: "relative",
            top: "10px",
            left: "-5px",
          }}
        >
          <IconButton
            sx={{
              "&:hover": {
                color: "rgb(206, 12, 12)",
                transition: "all",
                transitionDuration: "0.3s",
              },
            }}
            onClick={CloseModal}
          >
            <IoIosCloseCircle />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            paddingLeft: "20px",
            marginBottom: "10px",
          }}
        >
          <h2 className="h2">Lista de activos</h2>
          <span className="span">Accesorios agregados: {countAccessories}</span>
        </Box>

        <Container>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              "@media (max-width: 807px)": {
                flexDirection: "column",
              },
            }}
          >
            <Button
              variant="contained"
              onClick={() => GenerateDocument("MP")}
              className="button-action"
            >
              Preventivo
            </Button>
            <Button
              variant="contained"
              onClick={() => GenerateDocument("MC")}
              className="button-action"
            >
              Correctivo
            </Button>
            <Button
              variant="contained"
              onClick={() => GenerateDocument("VB")}
              className="button-action"
            >
              Baja de equipos
            </Button>
            <Button
              variant="contained"
              onClick={() => GenerateDocument("CL")}
              className="button-action"
            >
              CheckList
            </Button>
            <Button
              variant="contained"
              onClick={() => GenerateDocument("CR")}
              className="button-action"
            >
              Carta responsiva
            </Button>
          </Box>

          <Container sx={{ display: 'flex', flexDirection: 'column', height: 'auto', width:'100%'}}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>ACCESORIO</TableCell>
                  <TableCell>MARCA</TableCell>
                  <TableCell>ACCION</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                {newDataRender.map((accessorie, index) => (
                  <TableRow
                  sx={{ [`&.asset_included`]: { backgroundColor: '#d9d9d9' } }}
                  className={`asset_${
                    AccessoriesList.includes(accessorie.index) ? "included" : ""
                  }`}
                  key={index}
                  >
                    <TableCell>{accessorie.id}</TableCell>
                    <TableCell>{accessorie.name}</TableCell>
                    <TableCell>{accessorie.manufacturer?.name}</TableCell>
                    <TableCell>
                      <ButtonGroup>
                       
                        <IconButton
                          onClick={() => AddAccessorie(accessorie, index)}
                          className="button-add"
                        >
                          <MdAdd/>
                        </IconButton>

                        <IconButton
                        sx={{'&:hover':{
                          color:'rgb(206, 12, 12)',
                          transition:'all',
                          transitionDuration:'0.3s'
                        }}} 
                          onClick={() => DeleteAccessorie(index)}
                          className="button-delete"
                        >
                          <FaTrashAlt/>
                        </IconButton>

                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
                  </TableBody>
            </Table>
          </TableContainer>
          </Container>
        </Container>
      </Container>

      {!newDataRender.length && loadingAccessorie && (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alingItems:'center', height:'200px'}}>
        <h2 className='h2'>Sin activos registrados</h2>
      </Box>
      )}

      {!loadingAccessorie && (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alingItems:'center', height:'200px'}}>
        <ThreeDots />
         </Box>
      )}

      {StatesModals.modalNotification && (
        <Notification>
          <Paper  
          elevation={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "25px",
                  justifyContent: "center",
                }}>
            <span className='span'>{StatesModals.modalNotification}</span>
            <Button
              onClick={() =>
                dispatch({
                  type: actionTypesModals.setModalNotification,
                  payload: false,
                })
              }
            >
              Ok
            </Button>
          </Paper>
        </Notification>
      )}
    </>
  );
}

export { AccessoriesBox };
