import { useState } from "react";

function useSendNotification() {

    
    const [notifications, setNotifications] = useState([])
    
    function formatNotifications(notifications){
        return notifications.map((notification) => ({
            status: notification.data.status,
            assetId: notification.data.payload.asset_id,
            data:  notification.data.payload,
            message: notification.data.messages
        }));
    }

    const closeNotification = (assetId) => {
        const arraySends = notifications.filter(item => item.assetId != assetId );
        const newState = arraySends.length > 0 ? arraySends : [];
        setNotifications(newState)
    }

    return {notifications, formatNotifications, setNotifications, closeNotification}
}

export {useSendNotification};