import { useState } from "react";
import { SendMaintance } from "../API";
import { useSendNotification } from "./useSendNotification";
import {useGetDataUserFirestore} from '../Firebase/useGetDataUserFirestore'

function useSendMaintances() {
    const {notifications, formatNotifications, setNotifications, closeNotification} = useSendNotification()
    const {dataUser, loadingUser} = useGetDataUserFirestore();
    const [loadingMaintances, setLoading] = useState(null)
    const [errorMaintance, setError] = useState(null)
    const {apiKey} = dataUser;

    const postMaintenance = async (arrayMaintances) => {
        try {
          setLoading(true)
          const responses = await Promise.all(arrayMaintances.map(maintance => SendMaintance(maintance, apiKey)));          
          setNotifications(formatNotifications(responses));
          setLoading(false)
        } catch (error) {          
          setError(error);
          setLoading(false);
        }
      };

    
    const closeAll = () => {
      setNotifications([])
      setError(null)
    }
    
    const statusMaintance = {loadingMaintances, errorMaintance, notifications}

    return {postMaintenance, closeNotification, statusMaintance, closeAll}


}

export {useSendMaintances};