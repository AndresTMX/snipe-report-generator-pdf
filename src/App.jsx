import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { PageHome } from "./pages/home/";
import { Navigator } from "./sections/Navigator/";
import { DataProvider } from "./Context/DocContext";
import { Footer } from "./sections/Footer/";
import { Banner } from "./sections/Banner";

function App() {
  return (
    <ScopedCssBaseline>
      <DataProvider>
        <Banner/>
        <Navigator />
        <PageHome />
      </DataProvider>
      <Footer />
    </ScopedCssBaseline>
  );
}

export default App;
