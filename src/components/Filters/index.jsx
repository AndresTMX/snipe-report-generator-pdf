import {
  Container,
  Radio,
  FormLabel,
  Select,
  MenuItem,
  Button,
  Box,
  IconButton,
} from "@mui/material";
//icons
import { RiFilterOffFill } from 'react-icons/ri';
//empresas
import {comind, ipsa, toh, staff} from '../../Helpers/symbols';
//ubicaciones
import {
  contabilidad,
  tohCentro,
  rh,
  tohTlaxcala,
  tohTejeria,
  coatza,
  matamoros,
  corpo,
  tejeria,
  paraiso,
  tuxtla,
  salina,
  ordaz,
  norte,
} from "../../Helpers/symbols";
//departamentos
import {
  direccion,
  contraloria,
  sucursales,
  calidad,
  admon,
  contaduria,
  marketing,
  ventasInd,
  ventasMost,
  almacen,
  sistemas,
  compras,
  recursosH,
} from "../../Helpers/symbols";

function Filters({actionsPages, filterActions, filter}) {
  const {nextPage, prevPage} = actionsPages;
  const { setActives, setCompany, setLocation, setDepartment, clearFilters} = filterActions;

  const onSelectCompany = (company) => {

    let shortName

    if(company === comind.description){
      shortName = 'COMIND';
    }

    if(company === ipsa.description){
      shortName = 'IPSA';
    }

    if(company === staff.description){
      shortName = 'STAFF';
    }

    if(company === toh.description){
      shortName = 'TOH';
    }

    return shortName
  }

  const onSelectLocation = (location) => {
    let shortName

    if(location === contabilidad.description){
      shortName = 'Contabilidad'
    }

    if(location === tohCentro.description){
      shortName = 'TOH Coatza'
    }

    if(location === rh.description){
      shortName = 'Recursos Humanos'
    }

    if(location === tohTlaxcala.description){
      shortName = 'TOH Tlaxcala'
    }

    if(location === tohTejeria.description){
      shortName = 'TOH Tejeria'
    }

    if(location === coatza.description){
      shortName = 'IPSA Coatzacoalcos'
    }
    
    if(location === matamoros.description){
      shortName = 'Taller Matamoros'
    }

    if(location === corpo.description){
      shortName = 'Corporativo'
    }

    if(location === tejeria.description){
      shortName = 'COMIND Tejeria'
    }

    if(location === paraiso.description){
      shortName = 'COMIND Paraiso'
    }

    if(location === tuxtla.description){
      shortName = 'COMIND Tuxtla'
    }

    if(location === salina.description){
      shortName = 'COMIND Salina'
    }

    if(location === ordaz.description){
      shortName = 'COMIND Ordaz'
    }

    if(location === norte.description){
      shortName = 'COMIND Norte'
    }

    return shortName
  }

  const onSelectDepartment = (department) => {
    let shortName 

    if(department === direccion.description){
      shortName = 'Dirección'
    }

    if(department === contraloria.description){
      shortName = 'Contraloría'
    }

    if(department === sucursales.description){
      shortName = 'Coord. Sucursales'
    }

    if(department === calidad.description){
      shortName = 'Calidad'
    }

    if(department === admon.description){
      shortName = 'Administración'
    }

    if(department === contaduria.description){
      shortName = 'Contabilidad'
    }

    if(department === marketing.description){
      shortName = 'Marketing'
    }

    if(department === ventasInd.description){
      shortName = 'Ventas Industria'
    }

    if(department === ventasMost.description){
      shortName = 'Ventas Mostrador'
    }

    if(department === almacen.description){
      shortName = 'Almacén'
    }

    if(department === sistemas.description){
      shortName = 'Sistemas'
    }

    if(department === compras.description){
      shortName = 'Compras'
    }

    if(department === recursosH.description){
      shortName = 'Recursos Humanos'
    }

    return shortName;

  }

    return ( 
        <Container
        sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <Box
          sx={{
            background: "#0071BB",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "auto",
            alignItems: "center",
            justifyContent: 'space-around',
            color: "white",
            gap: "8px",
            borderRadius:'4px'
          }}
          >
          {/* Icon */}
          <FormLabel
            sx={{
              display: "flex",
              color: "white",
              alignItems:"center",
              height: "100%",
              gap: "5px",
            }}
          >

            <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton onClick={clearFilters} title="Limpiar filtros" size="small" sx={{color:'white', fontSize:'1.1rem'}}>
                <RiFilterOffFill/>
            </IconButton>
            </Box>

          </FormLabel>
          {/* Actives */}
          <FormLabel
            sx={{
              color: "white",
              fontSize: "16px",
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
          {/* Empresa */}
          <FormLabel
            sx={{
              display:'flex',
              color: "white",
              fontSize: "16px",
              height: "auto",
              alignItems:'flex-start',
            }}
          >
            {filter.company? onSelectCompany(filter.company): 'Empresa' } 
            <Select
              onChange={(e) => setCompany((e.target.value))}
              value={!filter.company?'': filter.company}
              renderValue={()=> {return null}}
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                color:'white',
                fontSize:'0.8rem',
                "& .MuiSelect-icon": {
                  color: "white", // Cambia el color aquí
                },
              }}
            >
              <MenuItem value={comind.description}>COMIND</MenuItem>
              <MenuItem value={ipsa.description}>IPSA</MenuItem>
              <MenuItem value={staff.description}>STAFF</MenuItem>
              <MenuItem value={toh.description}>TOH</MenuItem>
            </Select>
          </FormLabel>
          {/* Sucursal */}
          <FormLabel
           sx={{
            display:'flex',
            color: "white",
            fontSize: "16px",
            height: "auto",
            alignItems:'flex-start',
          }}
          >
            {filter.location? onSelectLocation(filter.location): 'Sucursal'}
            <Select
            onChange={(e)=> setLocation(e.target.value)}
            value={filter.location?filter.location:''}
            renderValue={()=> {return null}}
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                color:'white',
                fontSize:'0.8rem',
                "& .MuiSelect-icon": {
                  color: "white",
                },
              }}
            >
              <MenuItem value={corpo.description}>Corporativo</MenuItem>
              <MenuItem value={coatza.description}>Coatza</MenuItem>
              <MenuItem value={contabilidad.description}>Contabilidad</MenuItem>
              <MenuItem value={matamoros.description}>Matamoros</MenuItem>
              <MenuItem value={tohCentro.description}>TOH Coatza</MenuItem>
              <MenuItem value={rh.description}>RH</MenuItem>
              <MenuItem value={ordaz.description}>Ordaz</MenuItem>
              <MenuItem value={norte.description}>Norte</MenuItem>
              <MenuItem value={salina.description}>Salina Cruz</MenuItem>
              <MenuItem value={tohTlaxcala.description}>Tlaxcala</MenuItem>
              <MenuItem value={tohTejeria.description}>Tejeria TOH</MenuItem>
              <MenuItem value={tejeria.description}>Tejeria COMIND</MenuItem>
              <MenuItem value={paraiso.description}>Paraiso</MenuItem>
              <MenuItem value={tuxtla.description}>Tuxtla</MenuItem>
            </Select>
          </FormLabel>
          {/* Departamento */}
          <FormLabel
             sx={{
              display:'flex',
              color: "white",
              fontSize: "16px",
              height: "auto",
              alignItems:'flex-start',
            }}
          >
            {filter.department? onSelectDepartment(filter.department): 'Departamento'}
            <Select
              value={filter.department? filter.department:''}
              onChange={(e)=> setDepartment(e.target.value)}
              renderValue={()=> {return null}}
              size="small"
              variant="standard"
              disableUnderline
              sx={{
                color:'white',
                fontSize:'0.8rem',
                "& .MuiSelect-icon": {
                  color: "white",
                },
              }}
            >
              <MenuItem value={direccion.description}>Dirección</MenuItem>
              <MenuItem value={contraloria.description}>Contraloría</MenuItem>
              <MenuItem value={sucursales.description}>Coord. Sucursales</MenuItem>
              <MenuItem value={admon.description}>Administración</MenuItem>
              <MenuItem value={calidad.description}>Calidad</MenuItem>
              <MenuItem value={compras.description}>Compras</MenuItem>
              <MenuItem value={sistemas.description}>Sistemas</MenuItem>
              <MenuItem value={ventasMost.description}>Ventas Mostrador</MenuItem>
              <MenuItem value={ventasInd.description}>Ventas Industria</MenuItem>
              <MenuItem value={recursosH.description}>Recursos Humanos</MenuItem>
              <MenuItem value={almacen.description}>Almacén</MenuItem>
              <MenuItem value={marketing.description}>Marketing</MenuItem>
              <MenuItem value={contaduria.description}>Contabilidad</MenuItem>

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
            size="medium"
          >
            Anterior
          </Button>
          <Button
            onClick={() => nextPage()}
            variant="contained"
            size="medium"
          >
            Siguiente
          </Button>
        </Box>

      </Container>
     );
}

export {Filters};