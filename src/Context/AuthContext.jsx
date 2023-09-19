import React, { createContext, useContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Container, CircularProgress } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppFirebase } from "../Firebase/useAppFirebase";
import { useSessionStorage } from "../Hooks/useSessionStorage";
import { ThreeDots } from "../components/Loading";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const firebaseOn = useAppFirebase();
  const navigate = useNavigate();
  const { initSession, finalSession } = useSessionStorage();

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

  const auth = { login, logOut, resetPass };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function AuthProtect(props) {
  const auth = useAuth();
  const { session, isLoading } = useSessionStorage();

  if (isLoading) {
    return (
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vh",
          height: "100vh",
        }}
      >
        <CircularProgress 
        sx={{
          animationDuration: '1000ms',
        }}
        />
      </Container>
    );
  }

  if (!session) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export { AuthProvider, useAuth, AuthProtect };
