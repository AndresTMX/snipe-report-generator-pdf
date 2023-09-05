import { Typography, Box, IconButton, Button, Paper,  Stack} from "@mui/material";
//icons
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { BsMouse3 } from "react-icons/bs"; //mouse
import { FiMonitor } from "react-icons/fi"; //monitor
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
import {MdModeEditOutline} from 'react-icons/md'; //edit
import {BiSolidSave} from 'react-icons/bi'
//scrolling
import { ScrollContainer } from "../../Containers/ScrollContainer";
//helpers
import { ToggleItem , assetsForUser, editMaintances } from "../../Helpers/actionsMaintance";
import { useState } from "react";

function UserItemMaintance({maintances, title, type, date, setEdit, updateStates, dispatch}) {
console.log("🚀 ~ file: index.jsx:17 ~ UserItemMaintance ~ maintances:", maintances)

  const [select, setSelect] = useState(false);
  const [colorButton,setColorButton] = useState("error");
  const [selectButton, setSelectButton] = useState(null);

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
    setSelectButton(null)
    setEdit(false)
    if(select === selected){
      setSelect(false)
      setColorButton('error')
    }else{
      setSelect(selected)
      setColorButton('primary')
    }
  }

  const saveConfig = (indexAsset) => {
    setSelectButton(indexAsset)
    // const savedTitle = maintances[indexAsset]?.title? maintances[indexAsset].title : title;
    // const savedType = maintances[indexAsset]?.asset_maintenance_type? maintances[indexAsset].asset_maintenance_type : type;
    // const savedDateInit = maintances[indexAsset]?.start_date? maintances[indexAsset].start_date : date.init;
    // const savedDateEnd = maintances[indexAsset]?.completion_date? maintances[indexAsset].completion_date : date.end;
    // updateStates(savedTitle, savedType, savedDateInit, savedDateEnd);
    const arrayAssetsForUser = assetsGroup[select];
    const newItem = {
      ...arrayAssetsForUser[indexAsset],
      title:title,
      asset_maintenance_type: type,
      start_date:date.init,
      completion_date:date.end,
    }
    updateStates(title, type, date.init, date.end)
    editMaintances(maintances, dispatch, newItem)
  }

  const changueColorBotton = (indexAsset) => {
    if(selectButton != indexAsset){
      return colorButton
    }else{
      setEdit(true)
      return 'warning'
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
                elevation={2}
                key={index}
                sx={{ display: "flex", flexDirection: "column", gap: "5px", backgroundColor:`${select === index? '#edf4fc':'white'}`, borderRadius:'5px', padding:'10px' }}
              >
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                  <Typography variant="span">{assetUser[0].user ? assetUser[0].user : 'NO ASIGNADO'}</Typography>
                  <IconButton
                   onClick={() =>  toggleUser(index)}
                  >
                    { selectButton != index && <MdModeEditOutline />}
                    { selectButton != null && select === index && <BiSolidSave/>}
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
                  {assetUser.map((asset, indexAsset) => (
                    <Button
                      key={asset.id}
                      variant="outlined"
                      color={select === index? changueColorBotton(indexAsset): 'error'}
                      size="small"
                      startIcon={renderIcon(asset.device)}
                      onClick={() => select === index? saveConfig(indexAsset) : ToggleItem(maintances, dispatch, asset )}
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

