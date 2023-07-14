import { Paper, Typography } from "@mui/material";

/*
const {NameUser} = useGetNameUserWhitIdAsset(idAsset)
const {arrayMaintanceForUser} = useAssetsMaintancesForUser(arrayMaintance, idUser)
*/

function CardViewMaintance({ idAsset,
  asset,
  tag,
  model,
  title,
  location,
  notes,
  provider,
  cost,
  type,
  init,
  end}) {
  return (
    <Paper elevation={4} sx={{display:'flex', flexDirection:'column', gap:'15px', padding:'20px' }}>
      <Typography variant='h4' fontWeight={500}>
        {`Mantenimiento a ${asset} con ${tag}`}
      </Typography>


    </Paper>
  );
}

export { CardViewMaintance };
