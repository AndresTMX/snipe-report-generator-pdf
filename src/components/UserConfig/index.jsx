import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { actionTypes as actionTypesDocs } from "../../Context/DocReducer";
//hooks
import { useState } from "react";
import { useGetDataUserFirestore } from "../../Firebase/useGetDataUserFirestore";
import { useGetManagerSystems } from "../../Hooks/useGetManagerSystems";
//components
import { Modal } from "../../modals/modal";
//icons
import { IoIosCloseCircle } from "react-icons/io";
import {MdModeEditOutline} from 'react-icons/md';
// materialUI
import { Box, Button, Paper, FormControl, InputLabel, Select, MenuItem, CircularProgress, TextField, Stack , IconButton, Skeleton  } from "@mui/material";

function UserConfig({ state, dispatch }) {

  const { initialStore, StatesModals } = state;

  const [username, setUsername] = useState({ edit:false, value:'' })
  const [key, setKey] = useState({ edit:false, value:'' })

  const { dataUser, editDataUser } = useGetDataUserFirestore();
  const { dataDepartment, loading } = useGetManagerSystems();
  const managerSystems = dataDepartment? dataDepartment.manager.name: 'Error al cargar';

  const closeModal = () => {
    dispatch({type: actionTypesModals.setModalConfig, payload: false})
  }

  const updateName = () => {
    setUsername({
      ...username,
      edit: !username.edit
    })
  }

  const updateKey = () => {
    setKey({
      ...key,
      edit: !key.edit
    })
  }

  const updateUser = () => {
    editDataUser({ username, key})
  }

  return (
    <>
        <Modal>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding:'20px',
              gap:'20px'
            }}
          >

            <Stack 
            width='100%'
            flexDirection='row' 
            justifyContent='space-between'
            gap='30px'
            >

              <strong>Configuraciones de usuario</strong>
             
               <IconButton 
              variant="contained"
              onClick={closeModal}
              size="small"
              >
                <IoIosCloseCircle/>
              </IconButton>
            </Stack>
             

            <Box 
            sx={{
              display:'flex',
              flexDirection:'column',
              gap:'10px'
            }}
            >
              <Box
              sx={{
                display:'flex',
                flexDirection:'column',
                gap:'10px'
              }}
              >
              <strong>Lider de sistemas</strong>
              {!loading && <span>{managerSystems}</span>}
              {loading && <Skeleton variant="rounded" width={200} height={20}/>}
              </Box>
             
             <strong>Información de usuario</strong>

              <FormControl
               sx={{
                display:'flex',
                flexDirection:'row',
                gap:'10px'
              }}
              >
                <TextField
                onChange={(e) => setUsername({...username, value: e.target.value})}
                value={!username.edit? dataUser.name: username.value}
                error={username.edit? true : false}
                />
                <Button 
                onClick={updateName}
                size="small"
                variant='contained'
                color={username.edit? 'error' : 'primary'}
                >
                  {username.edit? 'cancel': 'edit'}
                </Button>
              </FormControl>

              <FormControl
               sx={{
                display:'flex',
                flexDirection:'row',
                gap:'10px'
              }}
              >
                <TextField 
                onChange={(e) => setKey({...key, value: e.target.value})}
                value={!key.edit? dataUser.apiKey: key.value}
                error={key.edit? true : false}
                />
                <Button 
                onClick={updateKey}
                size="small"
                variant='contained'
                color={key.edit? 'error': 'primary'}
                >
                  {key.edit? 'cancel' : 'edit'}
                </Button>
              </FormControl>

              <Button 
              variant='contained'
              onClick={updateUser}
              >
                Guardar cambios
              </Button>
              
            </Box>

          </Paper>
        </Modal>
    </>
  );
}

export { UserConfig };
