import { useState } from "react";
//Material ui
import {Container, Box, IconButton, Button,} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//components
import { CardViewMaintance } from "../../components/CardViewMaintance";
import { UserCardMaintenances } from "../../components/UserCardMaintenances";
import { CustomTabPanel } from "../../sections/CustomPanel";
import { ScrollContainer } from "../../Containers/ScrollContainer";
//hooks 
import { useGetAllMaintances } from "../../Hooks/useGettAllMaintances";
import { useGetUsers } from "../../Hooks/useGetUsers";
//helpers
import { filterUsersActives } from "../../Helpers/filterUsers";

function PageMaintenances() {
  // const { searchResults, pageRender, actionsPages, filterActions, filter } = usePagination(dataUsers, search, dispatch);
  
  // const {pageMaintances, loadingMaintances, errorMaintances} = useGetAllMaintances(0,10);
  const { dataUsers, loading, error } = useGetUsers();
  const dataUsersSlice = dataUsers? filterUsersActives(dataUsers).slice(0,10): [];
  const [section, setSection] = useState(0);

  const handleSection = (e, newValue) => {
    setSection(newValue)
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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={section}
            onChange={handleSection}
            aria-label="basic tabs example"
          >
            <Tab label="Ver Mantenimientos" />
            <Tab label="Crear Mantenimientos" />
          </Tabs>
        </Box>

        <CustomTabPanel value={section} index={0}>
          <ScrollContainer>
            {!loading &&
              dataUsers &&
              dataUsersSlice &&
              dataUsersSlice.map((user) => (
                <CardViewMaintance key={user.id} IdUser={user.id} user={user.name} location={user.location?.name}/>
              ))}
          </ScrollContainer>
        </CustomTabPanel>

        <CustomTabPanel value={section} index={1}>
          <ScrollContainer>
            {!loading &&
              dataUsers &&
              dataUsers.map((user) => (
                <UserCardMaintenances key={user.id} username={user.name} idUser={user.id} />
              ))}
          </ScrollContainer>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}

export { PageMaintenances };
