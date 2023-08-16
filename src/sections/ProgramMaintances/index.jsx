import { ItemSelectMonths } from "../../components/ItemSelectMonths";
import { arrayLocations } from "../../Helpers/symbols";
import { Paper, Container } from "@mui/material";
import { ScrollContainer } from "../../Containers/ScrollContainer";

function ProgramMaintances() {
    return (
        <>
           <ScrollContainer>
           <Container
            sx={{
                display:'flex',
                flexDirection:'column',
                gap:'20px'
            }}
            >
                {arrayLocations.map((location) => (
                    <Paper
                        square={false}
                        key={location.description}
                        elevation={4}
                    >
                        <ItemSelectMonths location={location} />
                    </Paper>
                ))}
            </Container>
           </ScrollContainer>
        </>
    );
}

export { ProgramMaintances };