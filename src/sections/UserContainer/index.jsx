import Grid from "@mui/material/Unstable_Grid2";

function UserContainer({ children, prevPage, nextPage }) {
  return (
    <>
      <Grid 
      container
      spacing={1.5} 
      justifyContent='center' 
      sx={{  paddingTop:'20px' ,
             paddingBottom:'20px' ,
             heigth:'auto',
             width: '100%',
             overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "lightgray",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "gray",
          }, 
          '@media (max-width: 600px)': {
          display:'flex',
          flexDirection:'column',
          width:'100%',      
          },
          }}>
        {children}
      </Grid>
    </>
  );
}

export { UserContainer };