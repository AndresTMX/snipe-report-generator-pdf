import { ItemSelectMonths } from "../../components/ItemSelectMonths";
import { arrayLocations } from "../../Helpers/symbols";
import { Container } from "@mui/material";
import { ScrollContainer } from "../../Containers/ScrollContainer";

function ProgramMaintances() {
    return (
        <>
           <ScrollContainer 
           height={'75vh'}
           >
           <Container
            sx={{
                display:'flex',
                flexDirection:'column',
                gap:'20px',
                '@media(max-width:700px)':{
                    paddingLeft:'2px',
                    paddingRight:'2px',
                }
            }}
            >
                {arrayLocations.map((location, index) => (
                        <ItemSelectMonths location={location} key={index}/>
                ))}
            </Container>
           </ScrollContainer>
        </>
    );
}

export { ProgramMaintances };