import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

function useSessionStorage() {
  const [session, setSession] = useState(false)
  const [error, setError] = useState(null)
  const [user, setUser] = useState(null)
  const [key, setKey] = useState(null)
  const [isLoading, setIsLoading] = useState(true) // Variable de estado para indicar si se están cargando los datos de sesión

  useEffect(() => {
    try {
      const newAuth = getAuth();
      newAuth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          setKey(currentUser.uid)
          setUser(currentUser)
          setSession(currentUser)
        } else {
          setSession(null)
        }
        setTimeout(()=>{setIsLoading(false);},1000)
      });

      if (key != null) {
        const MySession = sessionStorage.getItem(key)
        let MySessionInJson

        if (!MySession) {
          sessionStorage.setItem(key, JSON.stringify(user))
          MySessionInJson = user
        } else {
          MySessionInJson = JSON.parse(MySession)
        }

        setSession(MySessionInJson)
      }
    } catch (error) {
      setError(error)
      console.log(error)
    }
  }, [ ]);

  const initSession = () => {
    try {
      sessionStorage.setItem(key, JSON.stringify(user))
      setSession(user)
    } catch (error) {
      console.log(error)
    }
  };

  const finalSession = () => {
    sessionStorage.removeItem(key)
    setSession(null)
  };

  return { session, error, isLoading, initSession, finalSession }
}

export { useSessionStorage };
