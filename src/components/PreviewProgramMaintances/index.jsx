import { Paper, IconButton, CircularProgress, Container } from "@mui/material";
// icons
import { Viewer } from "../PDFViewer";
import { IoIosCloseCircle } from "react-icons/io";
import { ProgramMaintances } from "../../PDF/ProgramMaintances";
import { switchViewDocument, assetsForUser , extractLocation, extractNameCompany} from "../../Helpers/actionsMaintance";
import { useImagePDF } from "../../Hooks/useImagePDF";
import { useProgramMaintances } from "../../Hooks/useProgramMaintances";

function PreviewProgramMaintances({state, dispatch}) {

    const {maintances} = state;
    const location = extractLocation(maintances)
    const company = extractNameCompany(maintances)
    const dataUsers = assetsForUser(maintances, 'user')

    const {image} = useImagePDF(company)
    const { configState, loading, updateMonthComplete } = useProgramMaintances(location)


    return ( 
        <Paper
        elevation={4}
        sx={{ 
            width: '80%',
            height: '80%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-end', 
            padding: '10px', 
            gap: '10px'
        }}>
        <IconButton
          color="error"
          onClick={() => switchViewDocument(dispatch, false)}
        >
            <IoIosCloseCircle/>
        </IconButton>
        {loading === false && (<Viewer>
          <ProgramMaintances dataUsers={dataUsers} image={image} configState={configState} />
        </Viewer>)}

        {loading && (<Container
         sx={{ 
          width: '80%',
          height: '80%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent:'center', 
          }}>
          <CircularProgress/>
        </Container>)}

      </Paper>
     );
}

export {PreviewProgramMaintances};