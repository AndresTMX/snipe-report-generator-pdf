import {
  Container,
  Radio,
  FormLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import {LuFilter} from 'react-icons/lu'

function Filters({nextPage, prevPage, setActives, filter}) {
    return ( 
        <Container
        sx={{ display: "flex", flexDirection: "column", gap: "15px", borderRadius:'4px' }}
      >
        <Box
          sx={{
            background: "#0071BB",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "40px",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            gap: "15px",
            paddingLeft: "10px",
            fontSize: "12px",
          }}
        >
          <FormLabel
            sx={{
              color: "white",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              height: "100%",
              gap: "5px",
            }}
          >
            <Box>
              <LuFilter />
            </Box>
            <span>Filtrar</span>
          </FormLabel>

          <FormLabel
            sx={{
              color: "white",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}>
            Solo acivos
            <Radio
            onClick={()=> setActives()}
            value={filter.actives}
            checked={filter.actives}
              size="small"
              sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
            />
          </FormLabel>

          <FormLabel
            sx={{
              color: "white",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            Empresa
            <Select
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-icon": {
                  color: "white", // Cambia el color aquí
                },
              }}
            >
              <MenuItem>Conexiones Y Mangueras</MenuItem>
              <MenuItem>Instrumentación y Precisión</MenuItem>
              <MenuItem>Staff Recursos En Movimiento</MenuItem>
              <MenuItem>TOH Industrial</MenuItem>
            </Select>
          </FormLabel>

          <FormLabel
            sx={{
              color: "white",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            Sucursal
            <Select
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-icon": {
                  color: "white", // Cambia el color aquí
                },
              }}
            >
              <MenuItem>COMNID Corporativo</MenuItem>
              <MenuItem>IPSA Coatzacoalcos</MenuItem>
              <MenuItem>TOH Coatzacoalcos</MenuItem>
              <MenuItem>COMIND Ordaz</MenuItem>
            </Select>
          </FormLabel>

          <FormLabel
            sx={{
              color: "white",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            Departamento
            <Select
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                "& .MuiSelect-icon": {
                  color: "white", // Cambia el color aquí
                },
              }}
            >
              <MenuItem>Dirección</MenuItem>
              <MenuItem>Compras</MenuItem>
              <MenuItem>Calidad</MenuItem>
              <MenuItem>Sistemas</MenuItem>
              <MenuItem>Administración</MenuItem>
              <MenuItem>Ventas Mostrador</MenuItem>
              <MenuItem>Ventas Industria</MenuItem>
              <MenuItem>Recursos Humanos</MenuItem>
            </Select>
          </FormLabel>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            onClick={() => prevPage()}
            variant="contained"
            size="small"
          >
            Anterior
          </Button>
          <Button
            onClick={() => nextPage()}
            variant="contained"
            size="small"
          >
            Siguiente
          </Button>
        </Box>
      </Container>
     );
}

export {Filters};