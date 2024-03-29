//fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//components and pages
import { HashRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DocContext";
import { MaintanceProvider } from "./Context/MaintanceContext";
import { Login } from "../src/pages/Login";
import { PageHome } from "../src/pages/home/";
import { PageMaintenances } from "./pages/PageMaintenances";
import { ErrorPage } from "./pages/ErrorPage";
import { UI } from "./pages/UI";
//autenticator
import { AuthProvider, AuthProtect } from "./Context/AuthContext.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <DataProvider>
            <Routes>
              
              <Route path="/login" element={<Login />} />

              <Route
                path="/"
                element={
                  <AuthProtect>
                    <UI>
                      <PageHome />
                    </UI>
                  </AuthProtect>
                }
              />

              <Route
                path="/Mantenimientos"
                element={
                  <AuthProtect>
                    <MaintanceProvider>
                      <UI>
                        <PageMaintenances/>
                      </UI>
                    </MaintanceProvider>
                  </AuthProtect>
                }
              />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </DataProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
