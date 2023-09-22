import { Container } from "@mui/material";

function ScrollContainer({ children, height }) {

  const Heigth =  height? height : "60vh";

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        overflowY: "scroll",
        height: Heigth,
        paddingTop:'20px',
        paddingBottom:'20px',
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
        '@media(max-width:700px)':{
          paddingLeft:'0px',
          paddingRight:'0px',
        }
      }}
    >
      {children}
    </Container>
  );
}

export { ScrollContainer };
