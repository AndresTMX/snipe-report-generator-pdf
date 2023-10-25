/*/
Este hook ejecuta la funcion getAccesoriesUser, 
para esto primero la importa, junto con useState
/*/
import { useState } from "react";
import { getAccesoriesUser } from "../API/index";

/*/
El hook llamado usegetAccesoriesUser recibe un idUser, 
y devuelve => dataAccesories, loadingAccessorie, error, fetchAccesoriesUSer
/*/
function usegetAccesoriesUser(idUser) {
  
  //Se usa useState para inicializar variables que despues 
  //se actualizaran segun el comportamiento de la funcion 
  const [dataAccesories, setDataAccesories] = useState(null);
  const [loadingAccessorie, setLoading] = useState(false);
  const [error, setError] = useState(false);

     /*/Esta funcion realiza la peticion a la api utilizando un
     tryCatch para manejar los errores, en caso de haber. 

     Si todo va bien se ejecuta lo que esta dentro del try{}
     en caso contrario se ejcuta el catch.
     /*/
      const fetchAccesoriesUSer = async () => {
        setLoading(false)
        try {
          //result alamacenara el resultado de la consulta hecha a travez de la funcion getAccesories
          const result = await getAccesoriesUser(idUser);
          console.log("🚀 ~ file: useAccesoriesUser.js:30 ~ fetchAccesoriesUSer ~ result:", result)
          //una vez obtenido el resultado actualizamos el estado dataAccesories con lo que almacenamos en result
          setDataAccesories(result);
          //actualizamos el estado de carga a true
          setLoading(true);
        } catch (error) {
          setError(error)
          setLoading(true);
        }
      };

  return { dataAccesories, loadingAccessorie, error, fetchAccesoriesUSer };
}
export { usegetAccesoriesUser };
