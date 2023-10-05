import "../../index.css";
//Hooks
import { useRef, useState } from "react";
import { useItems } from "../../Hooks/useItems";
//ActionTypes
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
//Components
import { Notification } from "../../modals/notification";
import { ThreeDots } from "../Loading/";
//Material UI
import {
  Box,
  IconButton,
  Container,
  ButtonGroup,
  Button,
  Paper,
  Stack,
  Chip,
  Popper, 
  Grow,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
//Icons
import { IoIosCloseCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

function AccessoriesBox({
  modal,
  setModal,
  dataAccessories,
  numAccessories,
  idUser,
  dataUser,
  state,
  loadingAccessorie,
  dispatch,
}) {
  const { user, company, location, manager, email, department } = dataUser;
  const isMovile = useMediaQuery('(max-width:930px)');
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
  const count = countAccessories.toString();
  const { initialStore, StatesModals } = state;
  const { storage } = initialStore;
  const dataRender = dataAccessories || [];
  const newDataRender = dataRender
    ? dataRender.map((accessorie, accesorieIndex) => {
        return { ...accessorie, accesorieIndex };
      })
    : [];
  const AccessoriesList = storage?.accessories? storage.accessories.map((accessorie) => accessorie.index):[];

  const date = new Date(); // fecha actual
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // agregar ceros a la izquierda si el mes es menor a 10
  const day = date.getDate().toString().padStart(2, "0"); // agregar ceros a la izquierda si el día es menor a 10
  const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

  const AddAccessorie = (item, index) => {
    const stateVerification = JSON.parse(localStorage.getItem(idUser));

    const preState = stateVerification ? stateVerification : false;

    const repeat = preState.accessories
      ? preState.accessories.find((accessorie) => accessorie.index === index)
      : false;

    if (repeat) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Ya haz agregado este accesorio",
      });
    } else {
      const newItem = {
        ...item,
        index,
      };
      addAccessories(newItem);
    }
  };

  const DeleteAccessorie = (index) => {
    const repeat = storage.accessories.find(
      (accessorie) => accessorie.index === index
    );

    if (!repeat) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Aun no agregas este accesorio",
      });
    } else {
      deleteAccessories(index);
    }
  };

  const CloseModal = () => {
    if (storage) {
      dispatch({ type: actionTypesDoc.updateStorage, payload: storage });
      setModal(!modal);
    } else {
      setModal(!modal);
      const newData = JSON.parse(localStorage.getItem(idUser));
      dispatch({
        type: actionTypesDoc.updateStorage,
        payload: {
          ...newData,
          user,
          company,
          location,
          manager,
          email,
          department,
        },
      });
    }
  };

  const GenerateDocument = (typeDocument) => {

    const currentUser =  localStorage.getItem("currentUser");
    const managerSystems = localStorage.getItem("managerSystems");

    if(!currentUser || !managerSystems){
      dispatch({ type:actionTypesModals.setModalNotification, payload:'Configura el usuario emisor'})
    }

    if (typeDocument && storage.assets.length>0 && currentUser && managerSystems) {
      const document = {
        ...storage,
        typeDocument: typeDocument,
        dateDay: storage.dateDay ? storage.dateDay : formattedDate,
        manager: storage?.manager,
        emisor: currentUser,
        managerSystems: managerSystems,
        complete: true,
      };

      dispatch({ type: actionTypesDoc.updateStorage, payload: document });
    }

    if (!storage?.typeDocument && !typeDocument) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Selecciona el tipo de documento que deseas generar",
      });
    }

    if (storage?.accessories.length == 0) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Agrega accesorios para generar un documento",
      });
    }

  };

  const options = [
    { title: 'Preventivo', value: 'MP' },
    { title: 'Correctivo', value: 'MC' },
    { title: 'Vale de baja', value: 'VB' },
    { title: 'CheckList', value: 'CL' },
    { title: 'Carta Responsiva', value: 'CR' }
  ];

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [column, setColumn] = useState({ofcmi:true, description:true, serial:true})

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMultiClick = () => {
    GenerateDocument(options[selectedIndex].value)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };



  return (
    <>
      <Container
        sx={{
          display:'flex',
          flexDirection:'column',
          backgroundColor:'white',
          '@media (max-width:900px)':{
            padding:'5px'
          }
          }}
      >

        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            marginBottom: "10px",
            alignItems:'flex-start',
            justifyContent:'space-between'
          }}
        >
          <Stack>
             <h2 className="h2">Accesorios</h2>
             <span className="span">Accesorios agregados: {count}</span>
          </Stack>

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

        <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          width: "100%",
          gap:'10px',
          '@media(max-width:900px)':{
            padding:'0px'
          }
        }}
        >
          <Box
           sx={{
            display: "flex",
            gap: "10px",
            '@media(max-width:930px)':{
              flexDirection:'column',
            }
          }}
          >
          {!isMovile && (
          <>
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
          </>
         )}

         {isMovile && (
           <>
           <ButtonGroup variant="contained">
             <Button 
             fullWidth
             onClick={handleMultiClick}
             >{options[selectedIndex].title}</Button>
             <Button
           size="small"
           aria-controls={open ? 'split-button-menu' : undefined}
           aria-expanded={open ? 'true' : undefined}
           onClick={handleToggle}
         >
           <MdAdd />
         </Button>
 
           </ButtonGroup>
 
           <Popper
         sx={{
           zIndex: 1,
           display:'flex',
           width:'86%',
           height:'100vh',
           justifyContent:'flex-end',
           alignItems:'center',
         }}
         open={open}
         anchorEl={anchorRef.current}
         role={undefined}
         transition
         disablePortal
       >
         {({ TransitionProps, placement }) => (
           <Grow
             {...TransitionProps}
             style={{
               transformOrigin:
                 placement === 'bottom' ? 'center top' : 'center bottom',
             }}
           >
             <Paper
             sx={{
              height:'250px',
              position:'relative',
              top:'-10px',

             }}
             >
               <ClickAwayListener onClickAway={handleClose}>
                 <MenuList autoFocusItem>
                   {options.map((option, index) => (
                     <MenuItem
                       key={index}
                       selected={index === selectedIndex}
                       onClick={(event) => handleMenuItemClick(event, index)}
                     >
                       {option.title}
                     </MenuItem>
                   ))}
                 </MenuList>
               </ClickAwayListener>
             </Paper>
           </Grow>
         )}
       </Popper>
           </>
         )}
          </Box>

          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              width: "100%",
              margin:'auto',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell 
                     sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                    >ID</TableCell>
                    <TableCell 
                     sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                    >ACCESORIO</TableCell>
                    <TableCell 
                     sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                    >MARCA</TableCell>
                    <TableCell 
                     sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                    >ACCION</TableCell>
                  </TableRow>
                </TableHead>

                {numAccessories > 0 && (
                  <TableBody>
                    {newDataRender.map((accessorie, accesorieIndex) => (
                      <TableRow
                        sx={{
                          [`&.asset_included`]: { backgroundColor: "#d9d9d9" },
                        }}
                        className={`asset_${
                          AccessoriesList.includes(accessorie.accesorieIndex)
                            ? "included"
                            : ""
                        }`}
                        key={accesorieIndex}
                      >
                        <TableCell 
                         sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                        >{accessorie.id}</TableCell>
                        <TableCell 
                         sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                        >{accessorie.name}</TableCell>
                        <TableCell 
                         sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                        >{accessorie.manufacturer?.name}</TableCell>
                        <TableCell>
                          <ButtonGroup>
                            <IconButton
                              onClick={() => AddAccessorie(accessorie, accesorieIndex)}
                              className="button-add"
                            >
                              <MdAdd />
                            </IconButton>

                            <IconButton
                              sx={{
                                "&:hover": {
                                  color: "rgb(206, 12, 12)",
                                  transition: "all",
                                  transitionDuration: "0.3s",
                                },
                              }}
                              onClick={() => DeleteAccessorie(accesorieIndex)}
                              className="button-delete"
                            >
                              <FaTrashAlt />
                            </IconButton>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>

            {numAccessories === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alingItems: "center",
                  height: "200px",
                  width: "100%",
                  textAlign:'center',
                }}
              >
                <h2 className="h2">Sin accesorios registrados</h2>
              </Box>
            )}

            {!loadingAccessorie && numAccessories > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alingItems: "center",
                  height: "200px",
                }}
              >
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
                  }}
                >
                  <span className="span">{StatesModals.modalNotification}</span>
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
          </Container>
        </Container>
      </Container>
    </>
  );
}

export { AccessoriesBox };
