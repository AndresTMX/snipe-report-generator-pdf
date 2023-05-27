import { PDFViewer } from "@react-pdf/renderer";

function Viewer({children}) {
    return ( 
        <>
        <PDFViewer style={{width:'100%', height:'100%'}}>
            {children}
        </PDFViewer>
        </>
     );
}

export {Viewer};