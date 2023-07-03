import { Navigator } from "./sections/Navigator/";
import { DataProvider } from "./Context/DocContext";
import { Banner } from "./sections/Banner";

function App({children}) {
  return (
      <DataProvider>
        <Banner />
        <Navigator />
        {children}
      </DataProvider>
  );
}

export default App;
