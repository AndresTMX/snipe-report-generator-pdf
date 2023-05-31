//icon
import {GrDocumentPdf} from  'react-icons/gr';
import  './notDocState.css';

function NotDocState() {

    return ( 
        <div className="no-document-state">
        <span>
        <GrDocumentPdf/>
        </span>
        <h2>Aun sin documentos</h2> 
      </div>
     );
}

export {NotDocState};