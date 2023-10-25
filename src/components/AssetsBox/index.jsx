import "../../index.css";
//Hooks
import { useState, useRef } from "react";
import { UseModal } from "../../Hooks/useModal";
import { useItems } from "../../Hooks/useItems";
import { useMaintancesAssets } from "../../Hooks/useMaintancesAsset";
//Icons
import { IoIosCloseCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
//actionsTypes
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
//componentes
import { ViewMaintances } from "../ViewMaintances";
import { Notification } from "../../modals/notification";
import { ThreeDots } from "../Loading/";
//material UI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box, 
  IconButton, 
  Container, 
  ButtonGroup, 
  Button, 
  Paper, 
  Popper, 
  Grow, 
  ClickAwayListener, 
  MenuList, 
  MenuItem, 
  Stack, 
  Chip
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function AssetsBox({
  modal,
  setModal,
  dataAssets,
  numAssets,
  idUser,
  dataUser,
  state,
  loadingAssets,
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

  const { addItem, deleteItem } = actions;

  const isMovile = useMediaQuery('(max-width:930px)');

  const { countAssets } = states;
  const count = countAssets.toString()
  const { modal3, setModal3 } = UseModal();
  const { initialStore, StatesModals } = state;
  const { storage } = initialStore;

  const dataRender = dataAssets || [];
  const AssetsList = storage?.assets
    ? storage?.assets.map((asset) => asset.asset_tag)
    : [];

  const { Maintances, dataMaintances, loading, idAsset, setidAsset } =
    useMaintancesAssets();

  const date = new Date(); // fecha actual
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // agregar ceros a la izquierda si el mes es menor a 10
  const day = date.getDate().toString().padStart(2, "0"); // agregar ceros a la izquierda si el día es menor a 10
  const formattedDate = `${year}-${month}-${day}`; // formato YYYY-MM-DD

  const ButtonAddItem = (item) => {
    const tag = item.asset_tag;

    const stateVerification = JSON.parse(localStorage.getItem(idUser));

    const preState = stateVerification ? stateVerification : false;

    const repeat = preState.assets
      ? preState.assets.find((asset) => asset.asset_tag === tag)
      : false;

    if (repeat) {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Ya haz agregado este accesorio",
      });
    } else {
      addItem(item);
    }
  };

  const ButtonDeleteItem = (tag, idUser) => {
    const local = JSON.parse(localStorage.getItem(idUser));

    const { assets } = local;

    const repeat = assets
      ? assets.findIndex((asset) => asset.asset_tag === tag)
      : false;

    if (repeat >= 0) {
      deleteItem(tag, idUser);
    } else {
      dispatch({
        type: actionTypesModals.setModalNotification,
        payload: "Aun no has agregado este activo",
      });
    }
  };

  const GenerateDocument = (typeDocument) => {

    const currentUser =  localStorage.getItem("currentUser");
    const managerSystems = localStorage.getItem("managerSystems");

    if(typeDocument && storage.assets.length>0 && managerSystems){
      const document = {
          ...storage,
          typeDocument: typeDocument,
          dateDay: storage.dateDay ? storage.dateDay : formattedDate,
          emisor: currentUser,
          managerSystems: managerSystems,
          complete: true
      };
    
      dispatch({ type: actionTypesDoc.updateStorage, payload: document });
    }

    if(!storage?.typeDocument && !typeDocument){
      dispatch({ type:actionTypesModals.setModalNotification, payload:'Selecciona el tipo de documento que deseas generar'})
    }
    
    if(storage?.assets.length === 0){
      dispatch({ type:actionTypesModals.setModalNotification, payload:'Agrega activos para generar un documento'})
    }

  };

  const CloseModal = () => {
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
    setModal(!modal);
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
    <Container 
    sx={{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'white',
      '@media (max-width:900px)':{
        padding:'5px'
      }
      }}>
 

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
        <h2 className="h2">Activos</h2>
        <span className="span">Activos agregados: {count}</span>
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
           width:'90%',
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

        <Stack gap='5px' flexDirection='row'>
          <Chip 
          size="small"
          color='primary' 
          variant={column.ofcmi? 'contained': 'outlined'} 
          label='OFCMI'
          onClick={() => setColumn({...column, ofcmi:!column.ofcmi})}
          />

          <Chip 
          size="small"
          color='primary' 
          variant={column.description? 'contained': 'outlined'} 
          label='DESCRIPCION'
          onClick={() => setColumn({...column, description:!column.description})}
          />

          <Chip 
          size="small"
          color='primary' 
          variant={column.serial? 'contained': 'outlined'} 
          label='NS'
          onClick={() => setColumn({...column, serial:!column.serial})}
          />

        </Stack>

        <TableContainer
          sx={{
            height: "auto",
            maxHeight: "350px",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "lightgray",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow>

               {column.ofcmi && 
               <TableCell 
                sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                >OFCMI
                </TableCell>}
                { column.description && 
                <TableCell 
                sx={{
                    '@media (max-width:500px)': {
                      fontSize:'12px',
                      padding:'4px',
                      width:'150px',
                      display:'flex'
                    }
                  }}
                >DESCRIPCION</TableCell>}
                {column.serial && <TableCell 
                sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}
                >NS</TableCell>}
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

            <TableBody>
              {dataRender.map((asset) => (


                <TableRow
                  sx={{
                     [`&.asset_included`]: { backgroundColor: "#d9d9d9" },
                    }}
                  className={`asset_${
                    AssetsList.includes(asset.asset_tag) ? "included" : ""
                  }`}
                  key={asset.asset_tag}>
                  {column.ofcmi && 
                  <TableCell sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}>{asset.asset_tag.slice(6, 10)}
                  </TableCell>}

                  {column.description && 
                  <TableCell sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}>{asset.name}
                  </TableCell>}

                  {column.serial && 
                  <TableCell sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}>{asset?.serial}
                  </TableCell>}

                  <TableCell sx={{
                    '@media (max-width:900px)': {
                      fontSize:'12px',
                      padding:'4px',
                    }
                  }}>
                    <ButtonGroup>
                      <IconButton
                        onClick={() => ButtonAddItem(asset)}
                        className="button-add"
                      >
                        <MdAdd />
                      </IconButton>

                      <IconButton
                      sx={{'&:hover':{
                        color:'rgb(206, 12, 12)',
                        transition:'all',
                        transitionDuration:'0.3s'
                      }}} 
                        onClick={() =>
                          ButtonDeleteItem(asset.asset_tag, idUser)
                        }
                        className="button-delete"
                      >
                        <FaTrashAlt />
                      </IconButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      {numAssets === 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alingItems: "center",
            height: "200px",
          }}
        >
          <h2 className="h2">Sin activos registrados</h2>
        </Box>
      )}

      {!loadingAssets && numAssets > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alingItems: "center",
            height: "200px",
            margin:'auto',
          }}
        >
          <ThreeDots />
        </Box>
      )}

      {modal3 && (
        <ViewMaintances
          modal={modal3}
          setModal={setModal3}
          dataMaintances={Maintances}
        />
      )}

      {StatesModals.modalNotification && (
        <Notification>
          <Paper elevation={2} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'10px', gap:'20px'}}>
            <p className="span">{StatesModals.modalNotification}</p>
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
  );
}

export { AssetsBox };
