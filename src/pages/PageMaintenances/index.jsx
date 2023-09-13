import { useState } from "react"
//Material ui
import {Box, Tabs, Tab} from "@mui/material"
//components
import { CustomTabPanel } from "../../sections/CustomPanel"
import {UserConfig} from '../../components/UserConfig'
//CustomTabs
import {SendMaintances} from '../../sections/SendMaintances'
import { GetAllMaintances } from "../../sections/getAllMaintances"
import { ProgramMaintances } from "../../sections/ProgramMaintances"
import { useContext } from "react"
import { DocContext } from "../../Context/DocContext"

function PageMaintenances() {

  const [value, setValue] = useState(1);
  //hook del contexto
  const [state, dispatch] = useContext(DocContext);
  //Destructuracion de los estados del contexto
  const { StatesModals } = state;

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

      {StatesModals.modalConfig && (
        <UserConfig state={state} dispatch={dispatch}/>
      )}

    </>
  );
}

export { PageMaintenances };

