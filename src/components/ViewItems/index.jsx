import { Paper } from "@mui/material";
function ViewItems({ children }) {
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "withe",
        width: "fit-content",
        padding: "10px",
        borderRadius:'4px',
        maxWidth:'90%'
      }}
    >
      {children}
    </Paper>
  );
}

export { ViewItems };
