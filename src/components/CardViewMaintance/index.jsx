import { Paper, Typography } from "@mui/material";

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
    <Paper>
      <Typography variant='h4' fontWeight={500}>
        {`Mantenimiento a ${asset} con ${tag}`}
      </Typography>
    </Paper>
  );
}

export { CardViewMaintance };
