import { useState } from "react";
//Material ui
import {Container, Box, IconButton, Button,} from "@mui/material";
//components
import { CardViewMaintance } from "../../components/CardViewMaintance";
import { UserCardMaintenances } from "../../components/UserCardMaintenances";
//hooks 
import { useGetAllMaintances } from "../../Hooks/useGettAllMaintances";
import { useGetUsers } from "../../Hooks/useGetUsers";

function PageMaintenances() {
  // const { searchResults, pageRender, actionsPages, filterActions, filter } = usePagination(dataUsers, search, dispatch);
  const {pageMaintances, loadingMaintances, errorMaintances} = useGetAllMaintances(0,10);
  const { dataUsers, loading, error } = useGetUsers();
  const [section, setSection] = useState(false);

  const handleSection = () => {
    setSection(!section)
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
      }}>

      <Button onClick={handleSection} >Cambiar de seccion</Button>

      {section && (
        <Container>
          {!loadingMaintances &&
            pageMaintances &&
            pageMaintances.map((maintance) => (
              <CardViewMaintance
                key={maintance.id}
                idAsset={maintance.asset.id}
                asset={maintance.asset.name}
                tag={maintance.asset.asset_tag}
                model={maintance.model.name}
                title={maintance.title}
                location={maintance.location.name}
                notes={maintance.notes}
                provider={maintance.supplier.name}
                cost={maintance.cost}
                type={maintance.asset_maintenance_type}
                init={maintance.start_date.date}
                end={maintance.completion_date.date}
              />
            ))}
        </Container>
      )}

      {!section && (
        <Container>
          {!loading && dataUsers && dataUsers.map((user) => (
              <UserCardMaintenances key={user.id} username={user.name} />
            ))}
        </Container>
      )}
    </Container>
  );
}

export { PageMaintenances };
