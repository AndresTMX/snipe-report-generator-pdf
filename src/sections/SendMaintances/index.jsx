import { useState, useContext,  } from "react";
//Material ui
import {Box, Container, FormControl, IconButton, Select, InputLabel,  MenuItem, Button, Paper, Tabs, Tab} from "@mui/material";
//context
import { MaintanceContext } from "../../Context/MaintanceContext";
//components
import { ViewDocumentMaintance } from "../../components/ViewDocumentMaintance";
import { LoadingMaintances } from "../../components/LoadingMaintances";
import { ScrollContainer } from "../../Containers/ScrollContainer";
import { FormMaintance } from "../../components/FormMaintance";
import { ItemSearch } from "../../components/ItemSearch";
import { InputSearch } from "../../components/Searcher";
import {Notification} from '../../modals/notification';
import {ThreeDots} from '../../components/Loading';
import {Modal} from '../../modals/modal';
//hooks 
import { useSearcher } from "../../components/Searcher/useSearcher";
import { useSendMaintances } from "../../Hooks/useSendMaintances";
import { useGetSearch } from "../../Hooks/useGetSearch";
//icons
import { FaTrashAlt } from "react-icons/fa";
//helpers actions
import { switchForm, switchDocument, switchNotification } from "../../Helpers/actionsMaintance";


function SendMaintances() {

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
          paddingTop: "10px",
          width: "100%",
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

            <FormControl sx={{ width: "80px" }}>
              <InputLabel>Limite</InputLabel>
              <Select
                size="small"
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

            <IconButton onClick={ClearSearch}>
              <FaTrashAlt />
            </IconButton>

            {/* <Button
              variant="contained"
              onClick={() => switchDocument(dispatch, true)}
            >
              Documento
            </Button> */}
          </Box>
        </Container>

        <ScrollContainer>
          {!loading && !input.length && !results && (
            <Box sx={{display:'flex', justifyContent:'center'}}>
              <span>Busca activos por alguna de sus propiedades</span>
            </Box>
          )}

          {!loading && !error && results &&
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

          {loading && !error && input && (
             <Box
             sx={{display:'flex', justifyContent:'center'}}
             >
              <ThreeDots />
             </Box>
          )}
        </ScrollContainer>

        {state.form && (
          <Modal>
            <FormMaintance
              state={state}
              dispatch={dispatch}
              postMaintenance={postMaintenance}
            />
          </Modal>
        )}

        {/* {state.document && (
          <Modal>
            <ViewDocumentMaintance state={state} dispatch={dispatch} />
          </Modal>
        )} */}

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

        {state.maintances.length > 0 && (
          <Modal>
            <LoadingMaintances
              maintances={state.maintances}
              dispatch={dispatch}
            />
          </Modal>
        )}

        {loadingMaintances && (
          <Modal>
            <ThreeDots />
          </Modal>
        )}

      </Container>
     );
}

export {SendMaintances};