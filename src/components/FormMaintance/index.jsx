//material ui
import { Button, IconButton, Typography, Box } from "@mui/material"
import { UserItemMaintance } from "../UserItemMaintance";
import { useEditMaintances } from "../../Hooks/useEditMaitnaces";
//icons
import { IoIosCloseCircle } from "react-icons/io";
//helpers
import { builderMaintance, switchForm, transformDate, ClearMaintances } from "../../Helpers/actionsMaintance";
import { FormEditMaintances } from "../FormEditMaintances";
//components
import { FormAllEditMaintances } from "../FormAllEditMaintances";
//.emv Maintenances provider
const providerMaintenance = import.meta.env.VITE_PROVIDER_MAINTENANCES;

function FormMaintance({state, dispatch, postMaintenance}) {

  const { maintances } = state

  const {states, actions} = useEditMaintances(maintances, dispatch, true)
  const { selectUser, typeItem, titleMaintance, currentDate, editAll }= states 
  const { updateMaintance, setSelectUser, setEditAll, updateAllMaintances } = actions

  const SendMaintenance = async (e) => {

    e.preventDefault();

    switchForm(dispatch, false)
    
    const dataMaintances = {
      title:titleMaintance,
      data:maintances,
      type:'Preventivo',
      supplier_id:parseInt(providerMaintenance),
      start_date:transformDate(currentDate),
      completion_date:transformDate(currentDate),
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
        width: "90%",
        maxWidth:'500px'
      }}
    >

      <Box
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
       
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
      
      {maintances.length > 0 && !selectUser && !editAll &&(
        <UserItemMaintance
          maintances={maintances}
          setSelectUser={setSelectUser}
          selectUser={selectUser}
          typeItem={typeItem}
          dispatch={dispatch} />
      )}

      {selectUser && (
        <FormEditMaintances
        selectUser={selectUser}
        setSelectUser={setSelectUser}
        update={updateMaintance}
        />
      )}

      {editAll && maintances.length > 0 && (
        <FormAllEditMaintances 
        setEditAll={setEditAll}
        updateAll={updateAllMaintances}
        />
      )}

        {!selectUser && maintances.length > 0 && !editAll &&(
         <Button
         onClick={() => setEditAll(!editAll)}
          variant="outlined">
          Editar todos
        </Button>)}

      {!selectUser && maintances.length > 0 && !editAll && (
        <Button
          type="submit"
          variant="contained">
          Subir mantenimientos
        </Button>)}


    </form>
  );
}

export { FormMaintance };

