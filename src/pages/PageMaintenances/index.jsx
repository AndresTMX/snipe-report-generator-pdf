import { useState } from "react";
//hooks
import { useGetUsers } from "../../Hooks/useGetUsers";
import { usePagination } from "../../Hooks/usePagination";
//Material ui
import {Container, Box} from "@mui/material";
import { Tab } from '@mui/material';
import { TabContext } from '@mui/lab';
import { TabList } from '@mui/lab';
import { TabPanel } from '@mui/lab';

function PageMaintenances() {
  // const { dataUsers, loading, error } = useGetUsers();
  // const { searchResults, pageRender, actionsPages, filterActions, filter } = usePagination(dataUsers, search, dispatch);

  const [tabValue, setTabValue] = useState('1');

  const handleTab = (e, newValue) => {
    setTabValue(newValue);
  }

  return (
    <Container
      sx={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        paddingTop: "140px",
        width: "100%",
        height: "100vh",
      }}
    >
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTab} aria-label="lab API tabs example">
            <Tab label="Ver Mantenimientos" value="1" />
            <Tab label="Crear Mantenimientos" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Container>
            
          </Container>
        </TabPanel>
        <TabPanel value="2">Subir</TabPanel>
      </TabContext>

    </Container>
  );
}

export { PageMaintenances };
