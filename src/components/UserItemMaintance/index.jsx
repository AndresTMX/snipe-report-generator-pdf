import { Typography, Box, IconButton,  Container, Button, Paper } from "@mui/material";
//icons
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { BsMouse3 } from "react-icons/bs"; //mouse
import { FiMonitor } from "react-icons/fi"; //monitor
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
//scrolling
import { ScrollContainer } from "../../Containers/ScrollContainer";
//helpers
import { ToggleItem , assetsForUser } from "../../Helpers/actionsMaintance";
import { useState, useEffect } from "react";

function UserItemMaintance({maintances, dispatch}) {

  const [select, setSelect] = useState(false);

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
  
  const toggleUser = (indexUser) => {    
    const selected = assetsForUser(maintances, 'user').findIndex((item, index) => index === indexUser)
    if(select === selected){
      setSelect(false)
    }else{
      setSelect(selected)
    }
  }

  return (
    <>
        {maintances?.length === 0 && (
          <Typography variant="span">Sin activos agregados</Typography>
        )}

        {maintances?.length > 0 && (
          <ScrollContainer height={"200px"}>
            <Box sx={{ display: "flex", flexDirection: "column", gap:'10px' }}>
            {assetsGroup.map((assetUser, index) => (
              <Paper
                onClick={() => toggleUser(index)}
                elevation={2}
                key={index}
                sx={{ display: "flex", flexDirection: "column", gap: "5px", backgroundColor:`${select === index? '#edf4fc':'white'}`, borderRadius:'5px', padding:'10px' }}
              >
                <Typography variant="span">{assetUser[0].user? assetUser[0].user : 'NO ASIGNADO'}</Typography>
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
                      color={select === index? "warning":"error" }
                      size="small"
                      startIcon={renderIcon(asset.device)}
                      onClick={() => ToggleItem(assetsGroup, dispatch, asset )}
                    >
                      {asset.tag}
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

