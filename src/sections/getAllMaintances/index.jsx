import { useState, useContext, useEffect } from "react";
import { MaintanceContext } from "../../Context/MaintanceContext";
import { Container, Box, FormControl, Select, MenuItem, InputLabel, Button, Paper, Typography } from "@mui/material";
import { Modal } from "../../modals/modal";
import {Notification} from "../../modals/notification";
import { DataGrid, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid';
import { useGetMaintancesForDate } from "../../Hooks/useGetMaintancesForDate";
import { ViewDocumentMaintance } from "../../components/ViewDocumentMaintance";
import { ThreeDots } from "../../components/Loading";
import {months, years, findMounth } from '../../Helpers/Date'
import { switchDocument, switchNotification } from "../../Helpers/actionsMaintance";
import { actionTypes } from "../../Context/MaintanceReducer";
import { PreviewProgramMaintances } from "../../components/PreviewProgramMaintances";

function GetAllMaintances() {

  const [state, dispatch] = useContext(MaintanceContext);

  useEffect(() => {
    dispatch({
      type:actionTypes.setMaintances,
      payload:[]
    })
  },[])

  const {maintances: maintancesData} = state;
  
  const [date, setDate] = useState({
    month:'',
    year:''
  })
 
  const { fetchMaintances, maintances, loading, error} = useGetMaintancesForDate(date.year, date.month)

  const columns = [
    { field: 'col', headerName: 'ID', width: 100 },
    { field: 'col1', headerName: 'Titulo', width: 300 },
    { field: 'col2', headerName: 'Realizo', width: 250 },
    { field: 'col3', headerName: 'Inicio', width: 100 },
    { field: 'col4', headerName: 'Fin', width: 100 },
    { field: 'col5', headerName: 'Usuario', width: 300 },
    { field: 'col6', headerName: 'Proveedor', width: 200 },
    { field: 'col7', headerName: 'Tipo', width: 120 },
    { field: 'col8', headerName: 'Costo', width: 120 },
    { field: 'col9', headerName: 'OFCMI', width: 120 },
    { field: 'col10', headerName: 'Equipo', width: 120 },
    { field: 'col11', headerName: 'Ubicación', width: 120 },
    { field: 'col12', headerName: 'Compañia', width: 120 }
  ];

  const rows = maintances.length > 0 ? maintances.map((maintance) => ({
    id:maintance.id,
    col:maintance.id,
    col1:maintance.title,
    col2:maintance.user_id.name,
    col3:maintance.start_date.date,
    col4:maintance?.completion_date?.date,
    col5:maintance?.notes,
    col6:maintance.supplier?.name,
    col7:maintance?.asset_maintenance_type,
    col8:maintance?.cost,
    col9:maintance.asset.asset_tag,
    col10:maintance.asset.name,
    col11:maintance.location.name,
    col12:maintance.company.name
  })):[];

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({
    col1:false,
    col5:false,
    col6:false,
    col8:false,
    col12:false
  });

  const [selectionModel, setSelectionModel] = useState([]);

  function addUserMaintance ( arrayMaintances ) {
    return arrayMaintances.map((maintance) => ({
    id:maintance.col,
    user: maintance.col5,
    title:maintance.col1,
    admin:maintance.col2,
    start_date:maintance.col3,
    completion_date:maintance.col4,
    supplier_id:maintance.col6,
    asset_maintenance_type:maintance.col7,
    cost:maintance.col8,
    tag:maintance.col9,
    device:maintance.col10,
    location:maintance.col11,
    company:maintance.col12
  }))
  }

  const handleSelectionModelChange = (newSelection) => {
    const newState = newSelection.map((id) => rows.find((row) => row.id === id))
    setSelectionModel(newState);
    dispatch({type:actionTypes.setMaintances,  payload: addUserMaintance(newState)})
  };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbar/>
      </GridToolbarContainer>
    );
  };

  const managerSystems = localStorage.getItem("managerSystems");
  const userCurrent =  localStorage.getItem("currentUser");

    return ( 
        <>

        <Container
         sx={{
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          paddingTop: "10px",
          width: "100%",
          gap:'20px'
        }}>
          <Box
          sx={{
            display:'flex',
            gap:'10px', 
            flexDirection:'row', 
            alignItems:'center',
            '@media(max-width:950px)':{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            gridGap:'10px'
          },
          }}
          >

            <FormControl
            sx={{
              width:'180px',
            '@media(max-width:950px)':{
              width:'100%'
          },
          }}
            size="small"
            >
            <InputLabel>Selecciona el mes</InputLabel>
              <Select 
              fullWidth
              defaultValue={months[0].num}
              label={'Selecciona el mes'}
              onChange={(e) => setDate({...date, month: e.target.value})}
              >
                {months.map((month) => (
                  <MenuItem key={month.month} value={month.num}>{month.month}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
            sx={{
              width:'180px',
            '@media(max-width:950px)':{
              width:'100%'
          },
          }}
            size="small"
            >
            <InputLabel>Selecciona el año</InputLabel>
              <Select 
              defaultValue={years[0]}
              fullWidth
              label={'Selecciona el año'}
              onChange={(e) => setDate({...date, year: e.target.value})}
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button 
            sx={{
            '@media(max-width:950px)':{
              gridColumn:'span 2'
          },
            }}
            variant="contained"
            onClick={() => fetchMaintances()}
            >Consultar mantenimientos</Button>

             <Button
             sx={{
              '@media(max-width:950px)':{
                gridColumn:'span 2'
            },
              }}
              variant="contained"
              onClick={() => switchDocument(dispatch, true)}
            >
              generar documento
            </Button>

          </Box>

          <Box
          sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}
          >
            {maintances.length === 0 && !error && loading == null && (
              <p>¡Busca entre los mantenimientos realizados!</p>
            )}

            {maintances.length === 0 && !error && loading === false && (
              <p>Parece que aun no hay mentenimientos registrados en {findMounth(date.month)} {date.year}</p>
            )} 

            {loading && error === null && (
              <ThreeDots/>
            )}

            { maintances.length > 1 && !loading && !error && (
              <Box sx={{width:'100%', margin:'auto'}}>
                <DataGrid
              rows={rows}
              columns={columns}
              slots={{
                toolbar: CustomToolbar
              }}
              columnVisibilityModel={columnVisibilityModel}
              onColumnVisibilityModelChange={(newModel) =>
                setColumnVisibilityModel(newModel)
              }
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection={true}
              selectionModel={selectionModel}
              onRowSelectionModelChange={handleSelectionModelChange}

            />
              </Box>
            )}

            </Box>

        </Container>


        {state.formGenerateDocument && (
          <Modal>
            <ViewDocumentMaintance 
            state={state} 
            dispatch={dispatch}
            managerSystems={managerSystems}
            userCurrent={userCurrent}
            />
          </Modal>
        )}

        {state.documentComplete && (
          <Modal>
           <PreviewProgramMaintances 
           state={state} 
           dispatch={dispatch}
           managerSystems={managerSystems}
           userCurrent={userCurrent}
           />
          </Modal>
        )}

        {state.notification && (
          <Notification>
            <Paper
            sx={{
              display:'flex',
              flexDirection:'column',
              padding:'20px',
              gap:'10px'
            }}
            >
              <Typography variant="span" >{state.notification}</Typography>
              <Button 
              variant="contained"
              onClick={() => switchNotification(dispatch, false)}
              >
              Ok</Button>
            </Paper>
          </Notification>
        )}

        </>
     );
}

export {GetAllMaintances};