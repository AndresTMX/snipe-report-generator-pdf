import { Paper, Typography, Button, Box, IconButton } from "@mui/material";
//icons
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { BsMouse3 } from "react-icons/bs"; //mouse
import { FiMonitor } from "react-icons/fi"; //monitor
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
import { FaListCheck, FaLaptopFile } from 'react-icons/fa6' //checliks
import { MdAdd } from "react-icons/md"; //add
import { FaTrashAlt } from "react-icons/fa"; //trash
//Hook y context
import { useContext } from "react";
import {UseModal} from '../../Hooks/useModal';
import { MaintanceContext } from "../../Context/MaintanceContext";
//helpers actions
import { validateRepeat, ToggleItem } from "../../Helpers/actionsMaintance";
//components
import {Modal} from '../../modals/modal';
import {ViewMaintances} from '../ViewMaintances';

function ItemSearch({assetForUser}) {

  // const {id, name, asset_tag, serial, model, status_label, category, manufacturer, location, assigned_to} = assetForUser

  const [state, dispatch] = useContext(MaintanceContext);
  const {modal, setModal} = UseModal();
  const { maintances } = state;
  
  const user = assetForUser[0].assigned_to?.name ? assetForUser[0].assigned_to.name : assetForUser[0].status_label.name;
  const location = assetForUser[0].location.name

  function renderIcon(device) {
    if (device === "LAPTOP") {
      return <AiOutlineLaptop />;
    }

    if (device === "GABINETE") {
      return <PiDesktopTowerDuotone />;
    }

    if (device === "MONITOR") {
      return <FiMonitor />;
    }

    if (device === "TECLADO") {
      return <BsKeyboard />;
    }

    if (device === "MOUSE") {
      return <BsMouse3 />;
    }
  }

  const toggleMaintance = (tag, id, device, user) => {
    ToggleItem(maintances, dispatch, { tag, id, device, user});
  }

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
        }}
      >

        <Box
        sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}
        >
        <Box>
          <Typography variant="h5" fontWeight={500}>
          {user}
        </Typography> 
        <Typography variant="subtitle" fontWeight={500}>
          {location}
        </Typography> 
        </Box>
        

           <IconButton variant='contained'>
            <FaListCheck/>
           </IconButton>
        </Box>


        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {assetForUser.map((item, index) => (
            <>
              <Box 
              sx={{ 
                display: "flex", 
                flexDirection: "row", 
                gap: "20px", 
                alignItems:'center', 
                justifyContent:'space-between'
               }}
               key={index}
               >
                
                <Box
                sx={{
                  display:'flex',
                  flexDirection:'row',
                  gap:'10px'
                }}
                >
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    {renderIcon(item.category.name)}
                    {item.category.name}
                  </span>

                  <span>{item.model.name}</span>

                  <span>{item.asset_tag}</span>

                  <span>NS: {item.serial}</span>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>

                  <IconButton 
                  variant="contained"
                  color='info' 
                  onClick={() => setModal(item.id)}>
                    <FaLaptopFile/>
                  </IconButton>

                  <IconButton
                    variant={validateRepeat(maintances, { tag: item.asset_tag }) ? "outlined" : "contained"}
                    color={validateRepeat(maintances, { tag: item.asset_tag }) ? "error" : "primary"}
                    onClick={() => toggleMaintance(item.asset_tag, item.id, item.category.name, user)}
                  >
                    {validateRepeat(maintances, { tag: item.asset_tag }) ? <FaTrashAlt/>:<MdAdd/> }
                  </IconButton>
                </Box>
              </Box>

            </>
          ))}
        </Box>

      </Paper>

      {modal && (
        <Modal>
          <ViewMaintances modal={modal} setModal={setModal} idAsset={modal}/>
        </Modal>)}

    </>
  );
}

export { ItemSearch };
