import { useState } from "react";
//Material ui
import {Box, Tabs, Tab} from "@mui/material";
//components
import { CustomTabPanel } from "../../sections/CustomPanel";
//CustomTabs
import {SendMaintances} from '../../sections/SendMaintances'
import {ConstructionState} from '../../sections/Construction';

function PageMaintenances() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          paddingTop: "140px",
          width: "100%",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Subir mantenimientos" />
            <Tab label="Generar Programa" />
            <Tab label="Programar mantenimientos" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <SendMaintances/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <ConstructionState/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ConstructionState/>
        </CustomTabPanel> 
      </Box>

    </>
  );
}

export { PageMaintenances };

