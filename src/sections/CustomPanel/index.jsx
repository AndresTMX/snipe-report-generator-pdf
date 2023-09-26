import { Box } from "@mui/material";

function CustomTabPanel({children, value, index}) {
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Box sx={{ 
            p: 4,
            '@media(max-width:700px)':{
            padding:'10px'
          },
           }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  export {CustomTabPanel}