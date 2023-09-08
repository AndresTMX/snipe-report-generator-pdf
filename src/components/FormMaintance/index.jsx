//utilities
import { useEffect, useState } from "react"
//material ui
import { Button, IconButton, Typography, Box } from "@mui/material"
import { UserItemMaintance } from "../UserItemMaintance";
import { useEditMaintances } from "../../Hooks/useEditMaitnaces";
//icons
import { IoIosCloseCircle } from "react-icons/io";
//icons
import { AiOutlineLaptop } from "react-icons/ai"; //lap
import { BsKeyboard } from "react-icons/bs"; //teclado
import { BsMouse3 } from "react-icons/bs"; //mouse
import { FiMonitor } from "react-icons/fi"; //monitor
import { PiDesktopTowerDuotone } from "react-icons/pi"; //gabinete
//helpers
import { RemoveMaintances , builderMaintance, switchForm, transformDate, ClearMaintances } from "../../Helpers/actionsMaintance";
import { FormEditMaintances } from "../FormEditMaintances";
//.emv Maintenances provider
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;

function FormMaintance({state, dispatch, postMaintenance}) {

  const { maintances } = state

  const {states, actions} = useEditMaintances(maintances, dispatch)

  const { selectUser, selectItem, assetsUser }= states 
  const { updateMaintance, deleteMaintance, setSelectItem, setSelectUser } = actions

  const SendMaintenance = async (e) => {

    e.preventDefault();

    switchForm(dispatch, false)
    
    const dataMaintances = {
      title:titleMaintance,
      data:maintances,
      type:typeMaintance,
      supplier_id:parseInt(providerMaintenance),
      start_date:transformDate(dateDefault.init),
      completion_date:transformDate(dateDefault.end),
    }

    const groupMaintances = builderMaintance(dataMaintances)

    const response = await postMaintenance(groupMaintances)

    ClearMaintances(dispatch);

    
  }

  return (
    <form onSubmit={SendMaintenance}
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        width: "500px",
      }}
    >

      <Box
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}
      >
         <Typography
        variant="h3"
        fontSize="1.5rem"
        >
        Mantenimientos
        </Typography>

        <IconButton
        color="error"
        onClick={() => switchForm(dispatch, false)}
        >
          <IoIosCloseCircle/>
        </IconButton>
      </Box>

      {maintances?.length === 0 &&(
        <Typography
        variant="span"
        >
          Sin activos agregados
        </Typography>
      )}


      {selectUser && (
        <UserItemMaintance
          maintances={assetsUser}
          setSelectItem={setSelectItem}
          setSelectUser={setSelectUser}
          selectUser={selectUser}
          selectItem={selectItem}
          dispatch={dispatch} />
      )}
      
      {maintances.length > 0 && !selectUser &&(
        <UserItemMaintance
          maintances={maintances}
          setSelectItem={setSelectItem}
          setSelectUser={setSelectUser}
          selectUser={selectUser}
          selectItem={selectItem}
          dispatch={dispatch} />
      )}

      {selectUser && (
        <FormEditMaintances
        selectUser={selectUser}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        setSelectUser={setSelectUser}
        />
      )}

      {!selectUser && maintances.length > 0 && (
        <Button
          type="submit"
          variant="contained">
          Subir mantenimientos
        </Button>)}


    </form>
  );
}

export { FormMaintance };

