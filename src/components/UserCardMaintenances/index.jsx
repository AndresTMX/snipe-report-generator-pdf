import { Paper, Typography } from "@mui/material";

function UserCardMaintenances({username}) {
    return ( 
        <Paper>

            <Typography variant='h4' fontWeight={500}>
                {username}
            </Typography>
        
        </Paper>
     );
}

export {UserCardMaintenances};

