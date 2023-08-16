import { Paper, Typography, Button, Box, IconButton } from "@mui/material";
//icons
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { BsMouse3 } from "react-icons/bs"; //mouse
import { FiMonitor } from "react-icons/fi"; //monitor
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
//Hook y context
import { useContext } from "react";
import {UseModal} from '../../Hooks/useModal';
import { MaintanceContext } from "../../Context/MaintanceContext";
//helpers actions
import { validateRepeat, ToggleItem } from "../../Helpers/actionsMaintance";
//components
import {Modal} from '../../modals/modal';
import {ViewMaintances} from '../ViewMaintances';

function ItemSearch({
  id,
  name,
  tag,
  serial,
  model,
  status,
  device,
  brand,
  location,
  userData,
}) {
  const [state, dispatch] = useContext(MaintanceContext);
  const {modal, setModal} = UseModal()
  const { maintances } = state;
  
  const user = userData?.name ? userData.name : status;
  const renderButton = validateRepeat(maintances, { tag, id, device, user });
  const variant = renderButton ? "outlined" : "contained";
  const color = renderButton ? "error" : "primary";

  function renderIcon(device) {
    if (device === "LAPTOP") {
      return <AiOutlineLaptop />;
    }

    if (device === "GABINETE") {
      return <PiDesktopTowerDuotone />;
    }

    if (device === "MONITOR") {
      return <FiMonitor />;
    }

    if (device === "TECLADO") {
      return <BsKeyboard />;
    }

    if (device === "MOUSE") {
      return <BsMouse3 />;
    }
  }

  const toggleMaintance = () => {
    ToggleItem(maintances, dispatch, { tag, id, device, user});
  }


  return (
    <>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
        }}
      >
        <Typography variant="h5" fontWeight={500}>
          {user}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {renderIcon(device)}
            {device}
          </span>

          <span>{model}</span>

          <span>{tag}</span>

          <span>NS: {serial}</span>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>

          <Button variant="contained" onClick={() => setModal(!modal)}>
            Ver mantenimientos
          </Button>

          <Button
            variant={variant}
            color={color}
            onClick={toggleMaintance}
          >
            Agregar mantenimiento
          </Button>
        </Box>
      </Paper>

      {modal && (
        <Modal>
          <ViewMaintances modal={modal} setModal={setModal} idAsset={id}/>
        </Modal>)}

    </>
  );
}

export { ItemSearch };
