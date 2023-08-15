import { Typography, Box, IconButton,  Container, Button } from "@mui/material";
//icons
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { BsMouse3 } from "react-icons/bs"; //mouse
import { FiMonitor } from "react-icons/fi"; //monitor
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
//scrolling
import { ScrollContainer } from "../../Containers/ScrollContainer";
//helpers
import { ToggleItem } from "../../Helpers/actionsMaintance";

function UserItemMaintance({maintances, dispatch}) {

    function assetsForUser (array, property) {
       const groups = {} 
       array.forEach(obj => {
        const propValue = obj[property];
        if(!groups[propValue]){
            groups[propValue] = []
        }
        groups[propValue].push(obj)
       })

       return Object.values(groups);
    }

    function renderIcon(category) {
        if (category === "LAPTOP") {
          return <AiOutlineLaptop />;
        }
    
        if (category === "GABINETE") {
          return <PiDesktopTowerDuotone />;
        }
    
        if (category === "MONITOR") {
          return <FiMonitor />;
        }
    
        if (category === "TECLADO") {
          return <BsKeyboard />;
        }
    
        if (category === "MOUSE") {
          return <BsMouse3 />;
        }
    }

    const TagsForUser = assetsForUser(maintances, 'nameUser')


    return (
      <>
        {maintances?.length === 0 && (
          <Typography variant="span">Sin activos agregados</Typography>
        )}

        {maintances?.length > 0 && (
          <ScrollContainer height={"200px"}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {TagsForUser.map((assetUser, index) => (
              <Box
                key={index}
                sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Typography variant="span">{assetUser[0].nameUser}</Typography>
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
                      key={asset.tag}
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={renderIcon(asset.category)}
                      onClick={() => ToggleItem(maintances, dispatch, asset )}
                    >
                      {asset.tag}
                    </Button>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          </ScrollContainer>
        )}

      </>
    );
}

export {UserItemMaintance};

