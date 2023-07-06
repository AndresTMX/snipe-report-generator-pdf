import { HashRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DocContext";
import { Login } from "../src/pages/Login";
import { PageHome } from "../src/pages/home/";
import { ErrorPage } from "./pages/ErrorPage";
import { UI } from "./pages/UI";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <HashRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/Reporteador" 
            element={(
            <UI>
              <PageHome/>
            </UI>
            )} />

            <Route path="/Mantenimientos" element={<PageHome />} />

            <Route path="*" element={<ErrorPage/>} />

          </Routes>
        </DataProvider>
      </HashRouter>
    </>
  );
}

export default App;
