import "../../index.css";
//Hooks
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
import { Box, IconButton, Container, ButtonGroup, Button, Paper } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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

  const ButtonGetMaintance = (id) => {
    setidAsset(id);
    setModal3(!modal3);
  };

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

    // dispatch({ type: actionTypesDoc.updateStorage, payload: {...storage, typeDocument:typeDocument}});

    if(typeDocument && storage.assets.length>0){
      const document = {
          ...storage,
          typeDocument: typeDocument,
          dateDay: storage.dateDay ? storage.dateDay : formattedDate,
          manager: storage?.manager,
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


  return (
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
        <span className="span">Activos agregados: {count}</span>
      </Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          width: "100%",
        }}
      >
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
                <TableCell>OFCMI</TableCell>
                <TableCell>DESCRIPCION</TableCell>
                <TableCell>NS</TableCell>
                <TableCell>ACCION</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dataRender.map((asset) => (
                <TableRow
                  sx={{ [`&.asset_included`]: { backgroundColor: "#d9d9d9" } }}
                  className={`asset_${
                    AssetsList.includes(asset.asset_tag) ? "included" : ""
                  }`}
                  key={asset.asset_tag}
                >
                  <TableCell>{asset.asset_tag.slice(6, 10)}</TableCell>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset?.serial}</TableCell>
                  <TableCell>
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
