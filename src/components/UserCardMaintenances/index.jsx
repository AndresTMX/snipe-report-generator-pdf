import { Paper, Typography } from "@mui/material";

function UserCardMaintenances({IdUser, username}) {
    return ( 
        <Paper elevation={4} sx={{display:'flex', flexDirection:'column', gap:'15px', padding:'20px' }}>

            <Typography variant='h4' fontWeight={500}>
                {username}
            </Typography>
        
        </Paper>
     );
}

export {UserCardMaintenances};

