import { useMaintancesWhitIdAssets } from "../../Hooks/useMaintancesWhitIdAssets";
import { Paper } from "@mui/material";

function ITemMaintance({ IdUser }) {
  
    const { maintancesForUser, loadingMaitances, errorMaintance, loading } = useMaintancesWhitIdAssets(IdUser);
  
    const renderMaintanceItems = () => {
      if (loadingMaitances || loading && !errorMaintance ) {
        return (<Paper elevation={4}>Cargando...</Paper>)
      }
  
      if (errorMaintance) {
        return (<Paper elevation={4}>{errorMaintance.message}</Paper>)
      }

      if (!errorMaintance && !loading || !loadingMaitances) {
        return (<Paper elevation={4}>Sin mantenimientos registrados</Paper>)
      }
  
      return (
        !loadingMaitances && maintancesForUser && !errorMaintance &&
        maintancesForUser.map((item) => (
          <Paper elevation={4} key={item.id}>
            {item.title}
          </Paper>
        ))
      );
    };
  
    return <>{renderMaintanceItems()}</>;
  }
  
  export { ITemMaintance };