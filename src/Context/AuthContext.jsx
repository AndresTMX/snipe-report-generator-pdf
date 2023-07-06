import React, { createContext, useContext, useReducer, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppFirebase } from "../Firebase/useAppFirebase";

const AuthContext = createContext();

function AuthProvider({children}) {
    const firebaseOn = useAppFirebase();
    const [user, setUser] = useState(null);

    const login = ({email, password}) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             
             const user = userCredential.user;
             setUser(user);
             Navigate('/Reporteador');

       })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
            alert(errorMessage);
       });

     }
     
    const auth = {user, login}

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


export {AuthProvider, useAuth};