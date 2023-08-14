import { getMaintancesForDate } from "../API";
import { useState } from "react";

function useGetMaintancesForDate(year,  month) {

    const [maintances, setMaintances] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const fetchMaintances = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await getMaintancesForDate(year, month)
            setMaintances(response)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
        
    }

    return { fetchMaintances, maintances, loading, error}
}

export {useGetMaintancesForDate};