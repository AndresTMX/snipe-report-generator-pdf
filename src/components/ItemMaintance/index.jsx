import { useMaintancesWhitIdAssets } from "../../Hooks/useMaintancesWhitIdAssets";
import { Paper } from "@mui/material";

function ITemMaintance({ IdUser }) {
  const { maintancesForUser, loadingMaitances, errorMaintance } = useMaintancesWhitIdAssets(IdUser);
  // console.log("🚀 ~ file: index.jsx:6 ~ ITemMaintance ~ maintancesForUser:", maintancesForUser)

  return (
    <>
    
    {(loadingMaitances) && (
      <Paper elevation={4}>Cargando...</Paper>
    )}
{/* 
    {(errorMaintance && !loadingMaitances) && (
      <Paper elevation={4}>{errorMaintance.message}</Paper>
    )} */}

    {(!errorMaintance && !loadingMaitances && maintancesForUser.length === 0) && (
      <Paper elevation={4}>Sin mantenimientos registrados</Paper>
    )}

    {(!loadingMaitances && maintancesForUser) && (
      maintancesForUser.map((item) => (
        <Paper elevation={4} key={item.id}>
          {item.id}
        </Paper>))
    )}

    </>
  );
}

export { ITemMaintance };
