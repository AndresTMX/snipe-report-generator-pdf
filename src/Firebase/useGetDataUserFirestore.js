import { useEffect,  useState } from "react";
import { useAppFirebase } from "./useAppFirebase";
import { useSessionStorage } from "../Hooks/useSessionStorage";
import { doc, getDoc, updateDoc, addDoc } from "firebase/firestore";

function useGetDataUserFirestore() {

    const { session } = useSessionStorage();

    //se conecta a la base de datos de firestore
    const {db} = useAppFirebase();
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [dataUser, setDataUser] = useState({
        id:'',
        name:'',
        email:'',
        apiKey:''
    });

    useEffect(()=> {
        if(session){
            const {uid, email} = session
            
            const userRef = doc(db, "infoUsers", uid)

            const getData = async() => {
                try {
                const data = await getDataUser(userRef)
                setDataUser({...dataUser, name: data.name, apiKey:data.key, id:uid, email: email})
                setLoading(false)
                } catch (error) {
                setError(error)
                }
            }

            getData();
        }
        
    }, [session])

    const getDataUser = async (userRef) => {
        const userInfo = await getDoc(userRef)
        if (userInfo.exists()) {
            return userInfo.data()
        } else {
            return false
        }
    }

    const editDataUser = async (data) => {
        const userRef = doc(db, "infoUsers", dataUser.id)
        const userInfo = await getDoc(userRef)
        const dataInfo = userInfo.data()

        const {username, key} = data

        let newInfo

        if(userInfo.exists()){
            newInfo = {
                 name: username.value != '' ? username.value : dataInfo.name ,
                 key: key.value != '' ? key.value : dataInfo.key
                }
            }

        if(newInfo.key != dataInfo.key || newInfo.name != dataInfo.name){
            const resolve = await updateDoc(userRef, {...newInfo})
        }else{
            console.log('misma info')
        }
            
    }


    return {editDataUser, dataUser}

}

export {useGetDataUserFirestore};