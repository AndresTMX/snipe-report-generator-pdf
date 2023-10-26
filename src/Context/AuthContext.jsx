import React, { createContext, useContext, useEffect } from "react";
import {getAuth,signInWithEmailAndPassword,signOut,sendPasswordResetEmail} from "firebase/auth";
import { Container, CircularProgress, Box } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppFirebase } from "../Firebase/useAppFirebase";
import { useSessionStorage } from "../Hooks/useSessionStorage";
import { useGetDataUserFirestore } from "../Firebase/useGetDataUserFirestore";
import { useGetManagerSystems } from "../Hooks/useGetManagerSystems";

//crear contexto
const AuthContext = createContext();

//funcion provider
function AuthProvider({ children }) {
  //hook para enlazar con la app de firebase
  const firebaseOn = useAppFirebase();
  //hook de navegacion entre paginas
  const navigate = useNavigate();
  //hook de sesion
  const { initSession, finalSession } = useSessionStorage();
  //funcion de inicio de sesion
  const login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;          
          navigate("/");
          resolve(user);
          initSession();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  //funcion de cierre de sesion
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
        finalSession();
      })
      .catch((error) => {
        return error;
      });
  };
  //funcion de reseteo de contraseña
  const resetPass = ({ email }) => {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve(email);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  //Se hace un objeto que contenga las funciones de sesion y se pasa como valor en el provider que recibe componentes hijos
  const auth = { login, logOut, resetPass };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

//Hook para consumir las funciones de sesion
function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
//funcion que proteje las rutas de acceder sin tener sesion iniciada
function AuthProtect(props) {
  const auth = useAuth();
  const { session, isLoading } = useSessionStorage();
  //hook que trae el usuario actual segun la sesion iniciada
  const { dataUser, loadingUser } = useGetDataUserFirestore();
  //hook que trae los datos del departamento de sistemas 
  const { dataDepartment , loading} = useGetManagerSystems();

  //al iniciar la carga de la aplicacion o recargar la pagina
  useEffect(() => {
    //consulta si hay un usuario actual en el almacenamiento local
     const currentUser =  localStorage.getItem("currentUser");
     //consulta si hay un manager de sistemas en el almacenamiento local
     const managerSystems = localStorage.getItem("managerSystems")

     //en caso de que no haya usuario actual o el usuario actual 
     //sea diferente al usuario de la sesion se actualiza al almacenamiento local
     if(!currentUser || currentUser !=  dataUser.name && !loadingUser){
      localStorage.setItem("currentUser", dataUser.name)
     }

     //si no hay manager de sistemas en el almacenamiento local se almacena en el momento
     if(!managerSystems && !loading ){
      localStorage.setItem("managerSystems", dataDepartment.manager.name)
     }

  }, [loadingUser])

   //mientras la pagina esta cargando se visualiza el componente de carga
  if (isLoading) {
    return (
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
       <Box
       sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
       }}
       >
       <CircularProgress 
        sx={{
          animationDuration: '1000ms',
        }}
        />
       </Box>
      </Container>
    );
  }
  //si no hay sesion iniciada te redirige al login
  if (!session) {
    return <Navigate to="/login" />;
  }
  //si hay sesison iniciada navega con normalidad
  return props.children;
}

export { AuthProvider, useAuth, AuthProtect };
