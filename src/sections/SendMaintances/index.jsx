import { useState, useContext, useEffect  } from "react";
//Material ui
import {Box, Container, FormControl, IconButton, Select, InputLabel,  MenuItem, Button, Paper} from "@mui/material";
//context
import { MaintanceContext } from "../../Context/MaintanceContext";
//components
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
import { switchForm, switchNotification } from "../../Helpers/actionsMaintance";
import { actionTypes } from "../../Context/MaintanceReducer";
import useMediaQuery from '@mui/material/useMediaQuery';

function SendMaintances() {

    const [state, dispatch] = useContext(MaintanceContext);

    useEffect(() => {
      dispatch({
        type: actionTypes.setMaintances,
        payload:[]
      })
    }, [])

    const [select, setSelect] = useState(10)
    const {search, setSearch} = useSearcher()  
    //mediaQuery
    const isMovile = useMediaQuery('(max-width:700px)');
    const widthSearcher = isMovile? '100%': '60%';
  
    const {postMaintenance, closeNotification, closeAll, statusMaintance} = useSendMaintances();
    const {states, actions} = useGetSearch(search, select);

    const { loadingMaintances, notifications, errorMaintance } = statusMaintance;
    const {results, loading, error, input} = states;
    console.log("🚀 ~ file: index.jsx:48 ~ SendMaintances ~ results:", results)
    const {Search, setResults } = actions;
  
    const OnSelect = (e) =>{
      setSelect(e.target.value)
    }

    const Enter = (e) => {
      if(e.key === "Enter"){
          Search();
      }
  }

    const ClearSearch = () => {
      setResults(null);
      setSearch("");
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
            '@media(max-width:950px)':{
              flexDirection:'column',
              alignItems:'flex-start',
              padding:'0px',
              width:'90%',
            },
          }}
        >
          <InputSearch
            state={search}
            setState={setSearch}
            placeholder={"Busca un activo por cualquiera de sus parametros"}
            action={Search}
            width={widthSearcher}
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

          </Box>
        </Container>

        <ScrollContainer>
          {!loading && !input.length && !results && (
            <Box sx={{display:'flex', justifyContent:'center'}}>
              <span>Busca activos por alguna de sus propiedades</span>
            </Box>
          )}

          {!loading && !error && results &&
            results.map((result, index) => (
              <ItemSearch
                key={index}
                assetForUser={result}
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

        {state.formSendMaintances && (
          <Modal>
            <FormMaintance
              state={state}
              dispatch={dispatch}
              postMaintenance={postMaintenance}
            />
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

        {(notifications.length > 0)  &&(
          <Modal>
            <LoadingMaintances
              maintances={notifications}
              error={errorMaintance}
              action={closeNotification}
              clear={closeAll}
            />
          </Modal>
        )}

         {(errorMaintance != null ) &&(
          <Modal>
            <LoadingMaintances
              maintances={notifications}
              error={errorMaintance}
              action={closeNotification}
              clear={closeAll}
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