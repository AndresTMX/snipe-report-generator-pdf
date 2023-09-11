import { useState } from "react"
//icons
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
import {MdModeEditOutline} from 'react-icons/md'; //edit
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { FiMonitor } from "react-icons/fi"; //monitor
import { BsMouse3 } from "react-icons/bs"; //mouse
//materialui
import {  Box, Button, Tabs, Tab } from "@mui/material"
import { FormsMaintancesItem } from "../FromsMaintanceItem";


function FormEditMaintances({dispatch, selectUser, setSelectUser, update}) {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

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

    return ( 
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"

          >
            {selectUser.map((item) => (
              <Tab key={item.id}
              label={item.tag}
              icon={renderIcon(item.device)} 
              iconPosition="start"
              disabled={!item.editable? true : false }
              />
            ))}
          </Tabs>
        </Box>

        {selectUser.map((item, index) => (
          <FormsMaintancesItem 
          key={index}
          item={item}
          index={index}
          value={value} 
          setSelectUser={setSelectUser}
          update={update}/>
        ))}

      </Box>
     );
}

export {FormEditMaintances};