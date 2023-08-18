import { Paper, IconButton } from "@mui/material";
// icons
import { Viewer } from "../PDFViewer";
import { IoIosCloseCircle } from "react-icons/io";
import { ProgramMaintances } from "../../PDF/ProgramMaintances";
import { switchViewDocument, assetsForUser , extractNameCompany} from "../../Helpers/actionsMaintance";

function PreviewProgramMaintances({state, dispatch}) {

    const {maintances} = state;
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
          <ProgramMaintances company={company} storage={dataUsers}/>
        </Viewer>
      </Paper>
     );
}

export {PreviewProgramMaintances};