import "../../index.css";
import { useState } from "react";
import { ViewItems } from "../ViewItems";
import { AssetsBox } from "../AssetsBox";
import { Modal } from "../../modals/modal";
import { useGetAssetsUser } from "../../Hooks/useGetAssetsUser";
import { UseModal } from "../../Hooks/useModal";
import { AccessoriesBox } from "../AccessoriesBox";
import {LicensesBox} from '../LicensesBox';
//icons
import { BsHeadset } from "react-icons/bs";
import {AiOutlineDesktop} from 'react-icons/ai'
import {ImKey} from 'react-icons/im';
import { MdLocationPin } from 'react-icons/md';
import {IoIosArrowDown} from 'react-icons/io';
//helper
import {transfromValues} from "../../Helpers/textFormat";
//hooks
import {useImagePDF} from '../../Hooks/useImagePDF';
import { usegetAccesoriesUser } from "../../Hooks/useAccesoriesUser";
//types
import { actionTypes as actionTypesDoc } from "../../Context/DocReducer";
//material UI
import {Card, Paper, CardHeader, Avatar, CardContent, Box, Collapse  } from '@mui/material/';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import useMediaQuery from "@mui/material/useMediaQuery";

function UserCard({
  id,
  user,
  department,
  manager,
  avatar,
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
  
  const { nameUser, nameCompany, nameDepartment, nameLocation, nameManager, nameJobtitle } = transfromValues(user, company, department, location, manager, jobtitle)
  
  const [expanded, setExpanded] = useState(false);
  const { dataAssets, get, SetGet, idUser, loading } = useGetAssetsUser(id);  
  const { dataAccesories, Aget, getAccesories, loadingAccessorie } = usegetAccesoriesUser(id);
  const { modal, setModal, modal2, setModal2, modal3, setModal3 } = UseModal();
  const [dataUser, setDataUser] = useState({
    user: "",
    company: "",
    location: "",
    manager:"",
    email:"",
    department:"",
  });
  
  const {image} = useImagePDF(nameCompany);
  const isMovile = useMediaQuery('(max-width:1200px)');

  const ButtongetActives = () => {
  
    const data = JSON.parse(localStorage.getItem(idUser));

    if(!data){
    SetGet(!get);
    setModal(!modal);
    setDataUser({ user: nameUser, company: nameCompany, location: nameLocation , manager: nameManager , email, department: nameDepartment});
    }else{
      SetGet(!get);
      setModal(!modal);
      setDataUser({ user: nameUser, company: nameCompany, location: nameLocation , manager: nameManager , email, department: nameDepartment});
      dispatch({type: actionTypesDoc.updateStorage, payload: {...data, user:nameUser, company:nameCompany, location:nameLocation, manager:nameManager, email, department:nameDepartment}})
    }
  
  };

  const ButtongetAccesories = () => {
    const data = JSON.parse(localStorage.getItem(idUser));
      getAccesories(!Aget);
      setModal2(!modal2);
      setDataUser({ user: nameUser, company: nameCompany, location: nameLocation , manager: nameManager , email, department: nameDepartment});
      dispatch({type: actionTypesDoc.updateStorage, payload: {...data, user:nameUser, company:nameCompany, location:nameLocation, manager:nameManager, email, department:nameDepartment}})
  };

  const ButtongetMoreInfoUser = () => {
    setModal3(!modal3)
  };
  
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
          border:'2px', 
          borderStyle:'solid', 
          borderColor:'#d9d9d9',
          '@media (max-width:600px)': {
           width:'90%',
           margin:'auto'    
           },
         }}
        >
          <Card 
          sx={{
            height:'100%',
           }}>
            <CardHeader
            sx={{
              height:'100px',
              '@media(max-width:1200px)':{
                padding:'0px',
                flexDirection:'row',
                width:'100%',
                margin:'auto',
                textAlign:'start',
                gap:'15px',
                justifyContent:'space-between'
              }
            }}
              avatar={
                <Avatar
                  sx={{
                    backgroundColor: "white",
                    border: "2px",
                    borderColor: "#0071bb",
                    borderStyle: "solid",
                    '@media(max-width:1200px)':{
                      display:'flex',
                      height:'30px',
                      width:'30px',
                      position:'relative',
                      left:'15px'
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
              '@media(max-width:1200px)':{
                display:'none'
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
              size={isMovile? 'small':'medium'}
              aria-label="Activos"
               title='Ver Activos'
              onClick={() => ButtongetActives()}>
                 <AiOutlineDesktop/>
                 <span className="textIcon">{assets}</span>
              </IconButton>

              <IconButton 
              size={isMovile? 'small':'medium'}
              aria-label="Accesorios"
              title='Ver Accesorios'
              onClick={()=> ButtongetAccesories()}>
               <BsHeadset/>
               <span className="textIcon">{accesories}</span>
              </IconButton>

              <IconButton
              size={isMovile? 'small':'medium'}
              aria-label="Licencias"
              title='Ver Licencias'
              onClick={() => ButtongetMoreInfoUser()}
              >
               <ImKey/>
               <span className="textIcon">{licences}</span>
              </IconButton>

              <ExpandMore
                size={isMovile? 'small':'medium'}
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <IoIosArrowDown/>
              </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>

            <CardContent sx={{ fontSize: "0.875rem" }}>

            <Box
             sx={{ 
              display:'none',
              '@media(max-width:1200px)':{
                display:'flex',
                flexDirection:'column'
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
          
            <LicensesBox idUser={id} licencesNum={licences} closeBox={ButtongetMoreInfoUser} />
        </Modal>
      )}
    </>
  );
}

export { UserCard };
