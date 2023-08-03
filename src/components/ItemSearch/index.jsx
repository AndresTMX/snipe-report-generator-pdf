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
import { actionTypes } from "../../Context/MaintanceReducer";
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
  category,
  brand,
  location,
  userData,
}) {
  const [state, dispatch] = useContext(MaintanceContext);
  const {modal, setModal, modal2, setModal2, modal3, setModal3} = UseModal()
  const { listTags } = state;

  const renderButton = validateRepeat(listTags, { tag, id, category });
  const variant = renderButton ? "outlined" : "contained";
  const color = renderButton ? "error" : "primary";

  function renderIcon(category) {
    if (category === "LAPTOP") {
      return <AiOutlineLaptop />;
    }

    if (category === "GABINETE") {
      return <PiDesktopTowerDuotone />;
    }

    if (category === "MONITOR") {
      return <FiMonitor />;
    }

    if (category === "TECLADO") {
      return <BsKeyboard />;
    }

    if (category === "MOUSE") {
      return <BsMouse3 />;
    }
  }

  const nameUser = userData?.name ? userData.name : status;

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
          {nameUser}
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
            {renderIcon(category)}
            {category}
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
            onClick={() =>
              ToggleItem(listTags, dispatch, { tag, id, category })
            }
          >
            Agregar mantenimiento
          </Button>
        </Box>
      </Paper>

      {modal && (
        <Modal>
          <ViewMaintances modal={modal} setModal={setModal} idAsset={id} />
        </Modal>)}

    </>
  );
}

export { ItemSearch };
