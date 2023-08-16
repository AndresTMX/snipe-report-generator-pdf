import { useState } from "react"
//Material ui
import {Box, Tabs, Tab} from "@mui/material"
//components
import { CustomTabPanel } from "../../sections/CustomPanel"
import { GetAllMaintances } from "../../sections/getAllMaintances"
//CustomTabs
import {SendMaintances} from '../../sections/SendMaintances'
import {ConstructionState} from '../../sections/Construction'
import { ProgramMaintances } from "../../sections/ProgramMaintances"

function PageMaintenances() {

  const [value, setValue] = useState(1);

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
            <Tab label="Programar mantenimientos" />
            <Tab label="Subir mantenimientos" />
            <Tab label="Generar Programa" />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
        <ProgramMaintances/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <SendMaintances/>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <GetAllMaintances/>
        </CustomTabPanel> 
      </Box>

    </>
  );
}

export { PageMaintenances };

