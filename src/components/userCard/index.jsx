import "../../index.css";
import { useState } from "react";
import { ViewItems } from "../ViewItems";
import { AssetsBox } from "../AssetsBox";
import { Modal } from "../../modals/modal";
import { useGetAssetsUser } from "../../Hooks/useGetAssetsUser";
import { UseModal } from "../../Hooks/useModal";
import { AccessoriesBox } from "../AccessoriesBox";
import { LicensesBox } from '../LicensesBox';
//icons
import { BsHeadset } from "react-icons/bs";
import { AiOutlineDesktop } from 'react-icons/ai'
import { ImKey } from 'react-icons/im';
import { MdLocationPin } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
//helper
import { transfromValues } from "../../Helpers/textFormat";
//hooks
import { useImagePDF } from '../../Hooks/useImagePDF';
import { usegetAccesoriesUser } from "../../Hooks/useAccesoriesUser";
//types
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
//material UI
import { Card, Paper, CardHeader, Avatar, CardContent, Box, Collapse } from '@mui/material/';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from "@mui/material/useMediaQuery";

function UserCard({
  id,
  user,
  department,
  manager,
  location,
  company,
  accesories,
  licences,
  assets,
  email,
  state,
  jobtitle,
  dispatch
}) {

  /*/
  transformValues recibe todos los datos de un usuario y revisa que ninguno este vacio, 
  en caso de estarlo reemplaza el string vacio por un texto "No asignado"
  /*/
  const { nameUser, nameCompany, nameDepartment, nameLocation, nameManager, nameJobtitle } 
  = transfromValues(user, company, department, location, manager, jobtitle)

   /*/
  expanded es el estado que determina si la card del usuario se extiende
  para mostrar mas informacion o se queda en su estado noraml 
  /*/
  const [expanded, setExpanded] = useState(false);

   /*/
  useGetAssetsUser es el hook encargado de traer los activos del usuario
  /*/
  const { dataAssets, idUser, loading, fetchAssetsUser } = useGetAssetsUser(id);
  /*/
  usegetAccesoriesUser es el hook encargado de traer los accesorios del usuario
  /*/
  const { dataAccesories, loadingAccessorie, fetchAccesoriesUSer } = usegetAccesoriesUser(id);
   console.log("🚀 ~ file: index.jsx:68 ~ dataAccesories:", dataAccesories)
   /*/
  useModal es un hook que concentra varios estados para determinar que modal esta abierto o cerrado
  modal => modal de Activos
  modal2 => modal de accesorios
  modal3 => modal de licencias
  /*/
  const { modal, setModal, modal2, setModal2, modal3, setModal3 } = UseModal();

   /*/
   dataUser es un estado, su funcion es solo tomar los datos pasados al componente y formatearlos
  /*/
  const [dataUser, setDataUser] = useState({
    user: "",
    company: "",
    location: "",
    manager: "",
    email: "",
    department: "",
  });

  //Un hook sencillo que asigna una imagen dependiendo del nombre de la compañia del usuario
  const { image } = useImagePDF(nameCompany);
  //isMovile es una variable que se obtiene mediante useMediaQuery un hook de materialUi que nos dice si la pantalla es menor a 1200px
  const isMovile = useMediaQuery('(max-width:1200px)');

  //funcion que responde al boton de activos
  const ButtongetActives = () => {

    const data = JSON.parse(localStorage.getItem(idUser));
    fetchAssetsUser();
    setModal(!modal);
    setDataUser({ user: nameUser, company: nameCompany, location: nameLocation, manager: nameManager, email, department: nameDepartment });

    if (data) {
      dispatch({ type: actionTypesDoc.updateStorage, payload: { ...data, user: nameUser, company: nameCompany, location: nameLocation, manager: nameManager, email, department: nameDepartment } })
    }

  };
  //funcion que responde al boton de accesorios
  const ButtongetAccesories = () => {
    const data = JSON.parse(localStorage.getItem(id));
    fetchAccesoriesUSer();
    setModal2(!modal2);
    setDataUser({ user: nameUser, company: nameCompany, location: nameLocation, manager: nameManager, email, department: nameDepartment });
    if(data){
      dispatch({ type: actionTypesDoc.updateStorage, payload: { ...data, user: nameUser, company: nameCompany, location: nameLocation, manager: nameManager, email, department: nameDepartment } })
    }
  };
  //funcion que responde al boton de licencias
  const ButtonGetLicences = () => {
    setModal3(!modal3)
  };
  //NO TOCAR
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  //funcion que responde al boton de expandir card del usuario
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid item>
        <Paper
          elevation={8}
          sx={{
            width: "250px",
            height: 'auto',
            backgroundColor: "#d9d9d9",
            border: '2px',
            borderStyle: 'solid',
            borderColor: '#d9d9d9',
            '@media (max-width:600px)': {
              width: '90%',
              margin: 'auto'
            },
          }}
        >
          <Card
            sx={{
              height: '100%',
            }}>
            <CardHeader
              sx={{
                height: '100px',
                '@media(max-width:1200px)': {
                  padding: '0px',
                  flexDirection: 'row',
                  width: '100%',
                  margin: 'auto',
                  textAlign: 'start',
                  gap: '15px',
                  justifyContent: 'space-between'
                }
              }}
              avatar={
                <Avatar
                  sx={{
                    backgroundColor: "white",
                    border: "2px",
                    borderColor: "#0071bb",
                    borderStyle: "solid",
                    '@media(max-width:1200px)': {
                      display: 'flex',
                      height: '30px',
                      width: '30px',
                      position: 'relative',
                      left: '15px'
                    }
                  }}
                >
                  <img
                    style={{
                      height: "90%",
                      width: "90%",
                      objectFit: "contain",
                    }}
                    src={image}
                  />
                </Avatar>
              }
              title={nameUser}
              subheader={nameJobtitle}
            />

            <CardContent
              sx={{
                fontSize: "0.875rem",
                '@media(max-width:1200px)': {
                  display: 'none'
                }
              }}>
              <Box>
                <h4 className="h4">Departamento</h4>
                <span className="span">{nameDepartment} </span>
              </Box>
            </CardContent>

            <CardActions
              disableSpacing
            >
              <IconButton
                size={isMovile ? 'small' : 'medium'}
                aria-label="Activos"
                title='Ver Activos'
                onClick={() => ButtongetActives()}>
                <AiOutlineDesktop />
                <span className="textIcon">{assets}</span>
              </IconButton>

              <IconButton
                size={isMovile ? 'small' : 'medium'}
                aria-label="Accesorios"
                title='Ver Accesorios'
                onClick={() => ButtongetAccesories()}>
                <BsHeadset />
                <span className="textIcon">{accesories}</span>
              </IconButton>

              <IconButton
                size={isMovile ? 'small' : 'medium'}
                aria-label="Licencias"
                title='Ver Licencias'
                onClick={() => ButtonGetLicences()}
              >
                <ImKey />
                <span className="textIcon">{licences}</span>
              </IconButton>

              <ExpandMore
                size={isMovile ? 'small' : 'medium'}
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <IoIosArrowDown />
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>

              <CardContent sx={{ fontSize: "0.875rem" }}>

                <Box
                  sx={{
                    display: 'none',
                    '@media(max-width:1200px)': {
                      display: 'flex',
                      flexDirection: 'column'
                    }
                  }}
                >
                  <h4 className="h4">Departamento</h4>
                  <span className="span">{nameDepartment} </span>
                </Box>

                <Box>
                  <h4 className="h4">Empresa</h4>
                  <span className="span">{nameCompany}</span>
                </Box>

                <Box>
                  <h4 className="h4">Jefe Inmediato</h4>
                  <span className="span">{nameManager}</span>
                </Box>

              </CardContent>

            </Collapse>

            <Box
              sx={{
                position: "relative",
                bottom: "2px",
                right: "-5px",
                display: "flex",
              }}
            >
              <span>
                <MdLocationPin />
              </span>
              <h4 className="h4">{nameLocation}</h4>
            </Box>
          </Card>
        </Paper>
      </Grid>
      
      {/* los estados modal, modal2, modal3 funcionan como switches para mostar las ventanas */}

      {modal && (
        <Modal>
          <ViewItems>
            <AssetsBox
              modal={modal}
              setModal={setModal}
              numAssets={assets}
              dataAssets={dataAssets}
              idUser={id}
              dataUser={dataUser}
              state={state}
              loadingAssets={loading}
              dispatch={dispatch}
            />
          </ViewItems>
        </Modal>
      )}

      {modal2 && (
        <Modal>
          <ViewItems>
            <AccessoriesBox
              modal={modal2}
              numAccessories={accesories}
              setModal={setModal2}
              dataAccessories={dataAccesories}
              idUser={idUser}
              dataUser={dataUser}
              state={state}
              loadingAccessorie={loadingAccessorie}
              dispatch={dispatch}
            />
          </ViewItems>
        </Modal>
      )}

      {modal3 && (
        <Modal>
          <LicensesBox idUser={id} licencesNum={licences} closeBox={ButtonGetLicences} />
        </Modal>
      )}
    </>
  );
}

export { UserCard };
