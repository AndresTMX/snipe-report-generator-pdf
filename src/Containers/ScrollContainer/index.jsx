import { Container } from "@mui/material";

function ScrollContainer({ children }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        overflowY: "scroll",
        height: "60vh",
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
      }}
    >
      {children}
    </Container>
  );
}

export { ScrollContainer };
