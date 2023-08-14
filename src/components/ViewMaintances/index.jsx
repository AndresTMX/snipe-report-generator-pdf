//material UI
import { Box, Button, IconButton, Container, Paper, Typography } from '@mui/material';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
//Icons
import { IoIosCloseCircle } from "react-icons/io";
import {IoIosSad} from "react-icons/io";
//hooks
import {useMaintancesAssets} from '../../Hooks/useMaintancesAsset';
//components
import { ThreeDots } from '../Loading';
import { useState } from 'react';

function ViewMaintances({modal, setModal, idAsset, nameUser, dispatch}) {

    const {dataMaintances, loading, error} = useMaintancesAssets(idAsset);

    const columns = [
      { field: 'col', headerName: 'ID', width: 50 },
      { field: 'col1', headerName: 'Titulo', width: 300 },
      { field: 'col2', headerName: 'Realizo', width: 250 },
      { field: 'col3', headerName: 'Inicio', width: 100 },
      { field: 'col4', headerName: 'Fin', width: 100 },
      { field: 'col5', headerName: 'Notas', width: 300 },
      { field: 'col6', headerName: 'Proveedor', width: 200 },
      { field: 'col7', headerName: 'Tipo', width: 120 },
      { field: 'col8', headerName: 'Costo', width: 120 },
    ];

    const rows = dataMaintances.length > 0 ? dataMaintances.map((maintance) => ({
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
    })):[];

    const [columnVisibilityModel, setColumnVisibilityModel] = useState({
      col1:false,
      col5:false,
      col6:false,
      col8:false
    });

    const [selectionModel, setSelectionModel] = useState([]);

    const handleSelectionModelChange = (newSelection) => {
      setSelectionModel(newSelection.map((id) => rows.find((row) => row.id === id)));
    };

    function addUserMaintance ( arrayMaintances, name ) {
      return arrayMaintances.map((maintance) => ({
        id:maintance.col,
        user: name,
        title:maintance.col1,
        admin:maintance.col2,
        init:maintance.col3,
        end:maintance.col4,
        provider:maintance.col6,
        type:maintance.col7,
        cost:maintance.col8
      }))
    }

    return (
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          maxWidth: "700px",
          maxHeight: "60vh",
          overflowX: "auto",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "lightgray",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "gray",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Typography variant="h5" fontWeight="500">
            Mantenimientos realizados
          </Typography>

          <IconButton onClick={() => setModal(!modal)}>
            <IoIosCloseCircle />
          </IconButton>
        </Box>

        {loading && error === null && (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <ThreeDots />
          </Container>
        )}

        {!loading && error === null && rows.length === 0 && (
          <Container
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "auto",
              width: "100%",
              padding: "20px",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="span" fontWeight="500">
              {"Sin mantenimientos registrados"}
            </Typography>
            <Typography variant="h2">
              <IoIosSad />
            </Typography>
          </Container>
        )}

        {!loading && error === null && rows.length > 0 && (
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{
              toolbar: GridToolbar
            }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
            }
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection={true}
            selectionModel={selectionModel}
            onRowSelectionModelChange={handleSelectionModelChange}
            
          />
        )}
      </Paper>
    );
}

export {ViewMaintances};