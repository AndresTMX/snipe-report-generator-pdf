import { useState } from "react";
//Material ui
import {Box, Container, FormControl, IconButton, Select, InputLabel,  MenuItem} from "@mui/material";
//components
import { ItemSearch } from "../../components/ItemSearch";
import { UserCardMaintenances } from "../../components/UserCardMaintenances";
// import { CustomTabPanel } from "../../sections/CustomPanel";
import { ScrollContainer } from "../../Containers/ScrollContainer";
//hooks 
import { useSearcher } from "../../components/Searcher/useSearcher";
//helpers

//constructionState
import { ConstructionState } from "../../sections/Construction";
import { InputSearch } from "../../components/Searcher";
import { useGetSearch } from "../../Hooks/useGetSearch";
import {ThreeDots} from '../../components/Loading';
//icons
import { FaTrashAlt } from "react-icons/fa";

function PageMaintenances() {

  const [select, setSelect] = useState()
  const {search, setSearch} = useSearcher()  
  const {results, loading, error, input, Search, ClearSearch, Enter} = useGetSearch(search, select)

  const OnSelect = (e) =>{
    setSelect(e.target.value)
  }

  // const [section, setSection] = useState(0);

  // const handleSection = (e, newValue) => {
  //   setSection(newValue)
  // }

  return (
    <Container
      sx={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        paddingTop: "140px",
        width: "100%",
        height: "100vh",
      }}>

        <Container sx={{display:'flex', width:'100%', padding:'20px',gap:'15px',  alignItems:'center', justifyContent:'space-between'}}>
          <InputSearch
          state={search}
          setState={setSearch}
          placeholder={'Busca un activo por cualquiera de sus parametros'}
          action={Search}
          width={'60%'}
          onKey={Enter}
          />

          <Box sx={{display:'flex', gap:'10px', alignItems:'center', justifyContent:'center', left:'10%'}}>
          <IconButton onClick={ClearSearch}>
            <FaTrashAlt/>
          </IconButton>

          <FormControl 
          sx={{width:'140px'}}
          >
          <InputLabel>Limite de resultados</InputLabel>
            <Select
            value={select}
            label={'Limite de resultados'}
            onChange={OnSelect}
            defaultValue={10}
            >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
          </Box>

        </Container>
        
        <ScrollContainer>

           {!loading && !input && !input.length && (
            <h2>Busca activos por  alguna de sus propiedades</h2>
           )}

          {!loading && !error && results &&
           results.map((result) => (
            <ItemSearch
            key={result.id}
            name={result.name}
            tag={result.asset_tag}
            serial={result?.serial}
            model={result.model}
            status={result.status_label}
            category={result.category?.name}
            brand={result.manufacturer?.name}
            location={result.location?.name}
            userData={result.assigned_to}
            />
           ))}

           {loading && !error && input &&(
            <ThreeDots/>
           )}

        </ScrollContainer>



      {/* <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={section}
            onChange={handleSection}
            aria-label="basic tabs example"
          >
            <Tab label="Ver Mantenimientos" />
            <Tab label="Crear Mantenimientos" />
          </Tabs>
        </Box>

        <CustomTabPanel value={section} index={0}>
          <ScrollContainer>
            {!loading &&
              dataUsersSlice &&
              dataUsersSlice.map((user) => (
                <CardViewMaintance key={user.id} IdUser={user.id} user={user.name} location={user.location?.name}/>
              ))}
          </ScrollContainer>
        </CustomTabPanel>

        <CustomTabPanel value={section} index={1}>
          <ScrollContainer>
            {!loading &&
              dataUsers.map((user) => (
                <UserCardMaintenances key={user.id} username={user.name} idUser={user.id} />
              ))}
          </ScrollContainer>
        </CustomTabPanel>
      </Box> */}

      {/* <ConstructionState/> */}

    </Container>
  );
}

export { PageMaintenances };
