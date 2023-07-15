import { Paper, Typography } from "@mui/material";

/*
const {arrayAssets} = useAssetsWhitIdUser(idUser)
*/

/*
 key={maintance.id}
 asset={maintance.asset.name}
 idAsset={maintance.asset.id}
 model={maintance.model.name}
 title={maintance.title}
 location={maintance.location.name}
 notes={maintance.notes}
 provider={maintance.supplier.name}
 cost={maintance.cost}
 type={maintance.asset_maintenance_type}
 init={maintance.start_date.date}
 end={maintance.completion_date.date}
 tag={maintance.asset.asset_tag}
*/

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

