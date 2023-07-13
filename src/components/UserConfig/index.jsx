import { actionTypes as actionTypesDocs } from "../../Context/DocReducer";
import { actionTypes as actionTypesModals } from "../../Context/StatesModalsReducer";
import { ThreeDots } from "../../components/Loading/";
import { useGetUsersSystems } from "../../Hooks/useGetUsersSystems";
import { Modal } from "../../modals/modal";
import { Box, Button, Container, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function UserConfig({ state, dispatch }) {
  const { initialStore, StatesModals } = state;
  const { storage } = initialStore ? initialStore : {};
  const { dataDepartment, dataUserSystems, loading } = useGetUsersSystems();
  const managerSystems = dataDepartment? dataDepartment.manager.name: 'Error al cargar información de usuario';
  const dataUsers = dataUserSystems? dataUserSystems.map((user) => ({
        name: user.name,
        id: user.id
      }))
    : [];


  const onSelect = (event) => {
    let newState = {
      ...storage,
      emisor: event.target.value,
      managerSystems:managerSystems
    };
    dispatch({ type: actionTypesDocs.updateStorage, payload: newState });
  };

  const closeModal = () => {
    dispatch({type: actionTypesModals.setModalConfig, payload: false})
  }

  return (
    <>
      {loading && (
        <Modal>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <ThreeDots />
          </Paper>
        </Modal>
      )}

      {!loading && (
        <Modal>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding:'20px'
            }}
          >
              <Button 
              variant="contained"
              onClick={closeModal}
              size="small"
              sx={{position:'relative', right:'-40%' }}>x</Button>
            <Box>

              <h3>Configuraciones de usuario</h3>
              <h4>Lider de sistemas</h4>
              <p>{managerSystems}</p>
              
              <FormControl fullWidth>

                <InputLabel> Usuario emisor </InputLabel>

                <Select label="Usuario emisor" onChange={onSelect}>
                {!loading && (dataUsers.map((user) => (
                  <MenuItem key={user.id} value={user.name}>
                    {user.name}
                  </MenuItem>
                )))}
              </Select>

              </FormControl>
              
            </Box>

          </Paper>
        </Modal>
      )}
    </>
  );
}

export { UserConfig };
