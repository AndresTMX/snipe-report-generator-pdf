import { PageHome } from "./pages/home/";
import { Navigator } from "./sections/Navigator/";
import { DataProvider } from "./Context/DocContext";
import { Banner } from "./sections/Banner";

function App() {
  return (
      <DataProvider>
        <Banner />
        <Navigator />
        <PageHome />
      </DataProvider>
  );
}

export default App;
