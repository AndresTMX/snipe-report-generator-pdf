import { Paper, IconButton } from "@mui/material";
// icons
import { Viewer } from "../PDFViewer";
import { IoIosCloseCircle } from "react-icons/io";
import { ProgramMaintances } from "../../PDF/ProgramMaintances";
import { switchViewDocument, assetsForUser , extractLocation, extractNameCompany} from "../../Helpers/actionsMaintance";

function PreviewProgramMaintances({state, dispatch}) {

    const {maintances} = state;
    const location = extractLocation(maintances)
    const company = extractNameCompany(maintances)
    const dataUsers = assetsForUser(maintances, 'user')


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
        <Viewer>
          <ProgramMaintances location={location} company={company} dataUsers={dataUsers}/>
        </Viewer>
      </Paper>
     );
}

export {PreviewProgramMaintances};