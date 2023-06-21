import "./pages/home/";
import { PageHome } from "./pages/home/";
import { Navigator } from "./sections/Navigator/";
import { DataProvider } from "./Context/DocContext";
import { Footer } from "./sections/Footer/";

function App() {
  return (
    <div className="App">
      <DataProvider>  
        <Navigator />
        <PageHome />
      </DataProvider>
      <Footer />
    </div>
  ); 
}

export default App;
