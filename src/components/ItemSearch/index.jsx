import { Paper, Typography, Button, Box, IconButton, Chip, Divider, Stack } from "@mui/material";
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
import { UseModal } from '../../Hooks/useModal';
import { MaintanceContext } from "../../Context/MaintanceContext";
//helpers actions
import { validateRepeat, ToggleItem, ToggleMultipleItems } from "../../Helpers/actionsMaintance";
//components
import {Modal} from '../../modals/modal';
import {ViewMaintances} from '../ViewMaintances';

function ItemSearch({assetForUser}) {

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

  const addMultipleMaintance = () => {
    const allMaintances = assetForUser.map((item) => {
      const newObject = {
        tag: item.asset_tag,
        id: item.id,
        device: item.category.name,
        user: item.assigned_to?.name? item.assigned_to.name:item.status_label.name
      }
      return newObject
    })

    ToggleMultipleItems(maintances, dispatch, allMaintances)
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
          '@media(max-width:900px)':{
            width:'90%',
            margin:'auto'
          }
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
          <Typography 
          variant="h5" 
          fontWeight={500}
          sx={{
            '@media(max-width:900px)':{
              fontSize:'18px'
            },
            '@media(max-width:500px)':{
              fontSize:'14px'
            }
          }}
          >
          {user}
        </Typography> 
        <Typography 
        variant="subtitle"
        fontWeight={500}
        sx={{
          '@media(max-width:900px)':{
            fontSize:'15px'
          },
          '@media(max-width:500px)':{
            fontSize:'12px'
          }
        }}
        >
          {location}
        </Typography> 
        </Box>
        

           <IconButton 
           variant='contained'
           onClick={addMultipleMaintance}
           >
            <FaListCheck/>
           </IconButton>
        </Box>


        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
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
                  alignItems:'center',
                  gap:'10px',
                  '@media (max-width:900px)':{
                    flexDirection:'column',
                    alignItems:'start'
                  },
                }}
                >


                  <Stack 
                  flexDirection='row'
                  gap='10px'
                  sx={{
                    '@media(max-width:460px)':{
                    flexDirection:'column'
                    }
                  }}
                  >
                    <Chip
                      sx={{
                        padding: '5px'
                      }}
                      color='primary'
                      size="medium"
                      label={item.category.name}
                      icon={renderIcon(item.category.name)}
                    />

                    <Chip
                      color='primary'
                      variant="outlined"
                      size="small"
                      label={item.asset_tag}
                    />

                  </Stack>

                  <Stack flexDirection='row' gap='10px'
                  sx={{
                    '@media(max-width:460px)':{
                      display:'none'
                    }
                  }}
                  >
                    <Chip
                    color='primary'
                    variant="outlined"
                    size="small"
                    label={item.model.name}
                    />

                   <Chip
                   color='primary'
                   variant="outlined"
                  size="small"
                  label={item.serial}
                  />
                  </Stack>
                 

                  

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
             {  index + 1 != assetForUser.length && 
             <Divider>
            </Divider>}
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
