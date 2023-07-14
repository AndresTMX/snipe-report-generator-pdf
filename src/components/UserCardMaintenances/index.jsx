import { Paper, Typography } from "@mui/material";

/*
const {arrayAssets} = useAssetsWhitIdUser(idUser)
*/

function UserCardMaintenances({username, idUser}) {
    return ( 
        <Paper elevation={4} sx={{display:'flex', flexDirection:'column', gap:'15px', padding:'20px' }}>

            <Typography variant='h4' fontWeight={500}>
                {username}
            </Typography>

            <Typography variant='h4' fontWeight={500}>
                {idUser}
            </Typography>
        
        </Paper>
     );
}

export {UserCardMaintenances};

