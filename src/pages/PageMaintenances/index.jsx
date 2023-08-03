import { useState, useContext,  } from "react";
//Material ui
import {Box, Container, FormControl, IconButton, Select, InputLabel,  MenuItem, Button, Paper} from "@mui/material";
//context
import { MaintanceContext } from "../../Context/MaintanceContext";
//components
import { ItemSearch } from "../../components/ItemSearch";
import { UserCardMaintenances } from "../../components/UserCardMaintenances";
import { ViewDocumentMaintance } from "../../components/ViewDocumentMaintance";
import { FormMaintance } from "../../components/FormMaintance";
import {Modal} from '../../modals/modal';
import {Notification} from '../../modals/notification';
import { LoadingMaintances } from "../../components/LoadingMaintances";
// import { CustomTabPanel } from "../../sections/CustomPanel";
import { ScrollContainer } from "../../Containers/ScrollContainer";
//hooks 
import { useSearcher } from "../../components/Searcher/useSearcher";
import { useSendMaintances } from "../../Hooks/useSendMaintances";
//helpers
import { actionTypes } from "../../Context/MaintanceReducer";
//constructionState
import { ConstructionState } from "../../sections/Construction";
import { InputSearch } from "../../components/Searcher";
import { useGetSearch } from "../../Hooks/useGetSearch";
import {ThreeDots} from '../../components/Loading';
//icons
import { FaTrashAlt } from "react-icons/fa";
//helpers actions
import { switchForm, switchDocument } from "../../Helpers/actionsMaintance";
import { switchNotification } from "../../Helpers/actionsMaintance";

function PageMaintenances() {
  const [state, dispatch] = useContext(MaintanceContext);

  const [select, setSelect] = useState(10)
  const {search, setSearch} = useSearcher()  

  const {postMaintenance, loading: loadingMaintances, error: errorMaintance} = useSendMaintances(dispatch);
  const {results, loading, error, input, Search, ClearSearch, Enter} = useGetSearch(search, select, setSearch);

  const OnSelect = (e) =>{
    setSelect(e.target.value)
  }

  return (
    <Container
      sx={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        paddingTop: "140px",
        width: "100%",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          width: "100%",
          padding: "20px",
          gap: "15px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InputSearch
          state={search}
          setState={setSearch}
          placeholder={"Busca un activo por cualquiera de sus parametros"}
          action={Search}
          width={"60%"}
          onKey={Enter}
        />

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            left: "10%",
          }}
        >
          <IconButton onClick={ClearSearch}>
            <FaTrashAlt />
          </IconButton>

          <FormControl sx={{ width: "80px" }}>
            <InputLabel>Limite</InputLabel>
            <Select
              value={select}
              label={"Limite"}
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
          <Button
            variant="contained"
            onClick={() => switchForm(dispatch, true)}
          >
            Mantenimientos
          </Button>
          <Button
            variant="contained"
            onClick={() => switchDocument(dispatch, true)}
          >
            Documento
          </Button>
        </Box>
      </Container>

      <ScrollContainer>
        {!loading && !input && !input.length && (
          <h2>Busca activos por alguna de sus propiedades</h2>
        )}

        {!loading &&
          !error &&
          results &&
          results.map((result) => (
            <ItemSearch
              key={result.id}
              id={result.id}
              name={result.name}
              tag={result.asset_tag}
              serial={result?.serial}
              model={result.model?.name}
              status={result.status_label?.name}
              category={result.category?.name}
              brand={result.manufacturer?.name}
              location={result.location?.name}
              userData={result.assigned_to}
            />
          ))}

        {loading && !error && input && <ThreeDots />}
      </ScrollContainer>

      {state.form && (
        <Modal>
          <FormMaintance state={state} dispatch={dispatch} postMaintenance={postMaintenance} />
        </Modal>
      )}

      {state.document && (
        <Modal>
          <ViewDocumentMaintance state={state} dispatch={dispatch}/>
        </Modal>
      )}

      {state.notification && (
        <Notification>
          <Paper
            elevation={4}
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              gap: "15px",
            }}
          >
            <strong>{state.notification}</strong>
            <Button
              variant="container"
              onClick={() => switchNotification(dispatch, false)}
            >
              Ok
            </Button>
          </Paper>
        </Notification>
      )}

      {state.maintances.length > 0 && 
      (<Modal>
        <LoadingMaintances maintances={state.maintances} dispatch={dispatch} />
      </Modal>)}

      {loadingMaintances && 
      (<Modal>
        <ThreeDots/>
      </Modal>)}

      {/* <ConstructionState/> */}
    </Container>
  );
}

export { PageMaintenances };
