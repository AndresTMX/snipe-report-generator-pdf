import { Container,Radio,FormLabel,Select,MenuItem,Button,Box,IconButton} from "@mui/material";
//icons
import { RiFilterOffFill } from 'react-icons/ri';
//empresas
import { arrayCompanies } from "../../Helpers/symbols";
//ubicaciones
import { arrayLocations } from "../../Helpers/symbols";
//departamentos
import { arrayDepartments } from "../../Helpers/symbols";

function Filters({actionsPages, filterActions, filter}) {

  const {nextPage, prevPage} = actionsPages;

  const { setActives, setCompany, setLocation, setDepartment, clearFilters} = filterActions;

  const onSelectCompany = (company) => {

    if(company === 'INSTRUMENTACIÓN Y PRECISIÓN'){
      return 'IPSA'
    }

    if(company === 'CONEXIONES Y MANGUERAS INDUSTRIALES DE MINATITLAN'){
      return 'COMIND'
    }
   

    if(company === 'STAFF RECURSOS EN MOVIMIENTO'){
      return 'STAFF'
    }
   

    if(company === 'TOH INDUSTRIAL'){
      return 'TOH'
    }
   
   
  }

  const onSelectLocation = (location) => {
    let shortName

    if(location === 'CONTABILIDAD COATZACOALCOS'){
      shortName = 'Contabilidad'
    }

    if(location === 'TOH CENTRO COATZACOALCOS'){
      shortName = 'TOH Coatza'
    }

    if(location === 'RECURSOS HUMANOS COATZACOALCOS'){
      shortName = 'Recursos Humanos'
    }

    if(location === 'TOH TLAXCALA'){
      shortName = 'TOH Tlaxcala'
    }

    if(location === 'TOH TEJERIA'){
      shortName = 'TOH Tejeria'
    }

    if(location === 'COATZACOALCOS'){
      shortName = 'IPSA Coatzacoalcos'
    }
    
    if(location === 'MATAMOROS'){
      shortName = 'Taller Matamoros'
    }

    if(location === 'CORPORATIVO'){
      shortName = 'Corporativo'
    }

    if(location === 'TEJERIA'){
      shortName = 'COMIND Tejeria'
    }

    if(location === 'PARAISO'){
      shortName = 'COMIND Paraiso'
    }

    if(location === 'TUXTLA'){
      shortName = 'COMIND Tuxtla'
    }

    if(location === 'SALINA'){
      shortName = 'COMIND Salina'
    }

    if(location === 'ORDAZ'){
      shortName = 'COMIND Ordaz'
    }

    if(location === 'NORTE'){
      shortName = 'COMIND Norte'
    }

    return shortName
  }

  const onSelectDepartment = (department) => {
    let shortName 

    if(department === 'DIRECCIÓN'){
      shortName = 'Dirección'
    }

    if(department === 'CONTRALORIA'){
      shortName = 'Contraloría'
    }

    if(department === 'COORDINACIÓN DE SUCURSALES'){
      shortName = 'Coord. Sucursales'
    }

    if(department === 'CALIDAD'){
      shortName = 'Calidad'
    }

    if(department === 'ADMINISTRACIÓN'){
      shortName = 'Administración'
    }

    if(department === 'CONTABILIDAD'){
      shortName = 'Contabilidad'
    }

    if(department === 'MARKETING'){
      shortName = 'Marketing'
    }

    if(department === 'VENTAS INDUSTRIA'){
      shortName = 'Ventas Industria'
    }

    if(department === 'VENTAS MOSTRADOR'){
      shortName = 'Ventas Mostrador'
    }

    if(department === 'ALMACEN'){
      shortName = 'Almacén'
    }

    if(department === 'SISTEMAS INFORMATICOS'){
      shortName = 'Sistemas'
    }

    if(department === 'COMPRAS'){
      shortName = 'Compras'
    }

    if(department === 'RECURSOS HUMANOS'){
      shortName = 'Recursos Humanos'
    }

    return shortName;

  }

    return ( 
        <Container
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "15px" 
        }}
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
            Solo activos
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
            {filter.company? onSelectCompany(filter.company) : 'Empresa' } 
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
                  color: "white", // Cambia el color aquí del icono aqui
                },
              }}
            >
              {arrayCompanies.map((companie, index) => (
                <MenuItem key={index} value={companie.description}>{onSelectCompany(companie.description)}</MenuItem>
              ))}
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
              {arrayLocations.map((location, index) => (
                <MenuItem key={index} value={location.description}>{onSelectLocation(location.description)}</MenuItem>
              ))}
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
             {arrayDepartments.map((department, index) => (
              <MenuItem key={index} value={department.description}>{onSelectDepartment(department.description)}</MenuItem>
             ))}

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