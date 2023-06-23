import "./userContainer.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function UserContainer({ children, prevPage, nextPage }) {
  return (
    <>
      <Grid container spacing={1} justifyContent='center' sx={{ width: '100%'}}>
        {children}
      </Grid>
    </>
  );
}

export { UserContainer };
{
  /* <div className="container-buttons">
        <button onClick={() => prevPage()}>Anterior</button>
        <button onClick={() => nextPage()}>Siguiente</button>
    </div> */
}
