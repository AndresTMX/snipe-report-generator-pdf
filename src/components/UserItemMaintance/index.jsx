import { useState } from "react";
//icons
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
import {MdModeEditOutline} from 'react-icons/md'; //edit
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { FiMonitor } from "react-icons/fi"; //monitor
import { BsMouse3 } from "react-icons/bs"; //mouse
import {BiSolidSave} from 'react-icons/bi'//save
//scrolling
import { ScrollContainer } from "../../Containers/ScrollContainer";
import { Typography, Box, IconButton, Button, Paper,  Stack} from "@mui/material";
//helpers
import { ToggleItem , assetsForUser } from "../../Helpers/actionsMaintance";

function UserItemMaintance({maintances, selectUser, setSelectUser, dispatch}) {
  
  const assetsGroup = assetsForUser(maintances, 'user')
  
  function renderIcon(category) {
    if (category.toLowerCase().includes("laptop")) {
      return <AiOutlineLaptop />;
    }
    
    if (category.toLowerCase().includes("gabinete")) {
      return <PiDesktopTowerDuotone />;
    }
    
    if (category.toLowerCase().includes("monitor")) {
      return <FiMonitor />;
    }
    
    if (category.toLowerCase().includes("teclado")) {
      return <BsKeyboard />;
    }
    
    if (category.toLowerCase().includes("mouse")) {
      return <BsMouse3 />;
    }
  }
  
  const toggleUser = (nameUser) => {    
    const selected = maintances.filter((item) => item.notes === nameUser)
    if(selectUser === selected){
      setSelectUser(null)
    }else{
      setSelectUser(selected)
    }
  }

  return (
    <>

        {maintances?.length > 0 && (
          <ScrollContainer height={"250px"}>
            <Box sx={{ display: "flex", flexDirection: "column", gap:'10px', padding:'5px' }}>
            {assetsGroup.map((assetUser, index) => (
              <Paper
                elevation={2}
                key={index}
                sx={{ display: "flex", flexDirection: "column", gap: "5px", backgroundColor:`${selectUser === index? '#edf4fc':'white'}`, borderRadius:'5px', padding:'10px' }}
              >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                  <Typography variant="span" fontSize='12px' >{assetUser[0].user ? assetUser[0].user : 'NO ASIGNADO'}</Typography>
                  <IconButton
                   onClick={() =>  toggleUser(assetUser[0].user)}
                  >
                     <MdModeEditOutline />
                  </IconButton>
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    flexWrap: "wrap",
                  }}
                >
                  {assetUser.map((asset) => (
                    <Button
                      key={asset.id}
                      variant="outlined"
                      color={'error'}
                      size="small"
                      startIcon={renderIcon(asset.device)}
                      onClick={() => ToggleItem(maintances, dispatch, asset )}
                    >
                      {asset.tag.split('-')[1]}
                    </Button>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
          </ScrollContainer>
        )}

      </>
    );
}

export {UserItemMaintance};

