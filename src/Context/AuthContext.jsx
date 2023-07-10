import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppFirebase } from "../Firebase/useAppFirebase";

const AuthContext = createContext();

function AuthProvider({children}) {
    const firebaseOn = useAppFirebase();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {

      const newAuth = getAuth()
      const unsubscribe = newAuth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          sessionStorage.setItem(currentUser.uid, JSON.stringify(currentUser));
          setUser(currentUser);
          console.log('agrega sesion')
        } else {
          sessionStorage.removeItem(user.uid);
          setUser(null);
          console.log('elimina sesion')
        } 
        
      });
  
      return () => {
        unsubscribe();
      };
    }, [user]);

    const login = ({ email, password }) => {
        return new Promise((resolve, reject) => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              setUser(user);
              navigate('/Reporteador');
              resolve(user);
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
          setUser(null);
          navigate('/');
        })
        .catch((error) => {
          return error
        });
      };

    const resetPass = ({email}) => {
        return new Promise((resolve, reject) => {
            const auth = getAuth();
            sendPasswordResetEmail(auth, email)
            .then(() => {
                resolve(email)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
     
    const auth = {user, login, logOut, resetPass, setUser}

    return ( 
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
     );
}

function useAuth () {
    const auth = useContext(AuthContext);
    return auth;
}

function AuthProtect(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/" />;
  }

  return props.children;
}


export {AuthProvider, useAuth, AuthProtect};