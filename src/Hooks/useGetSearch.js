import { useEffect, useState } from "react";
import { getSearch } from "../API";

function useGetSearch(search, limit, setSearch) {

    const [input, setInput] = useState('')    
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(false);
        setError(false);
        setInput(search)
    }, [search, limit])


    const Search = async () => {

        setLoading(true)
        const fetchSearch = async () => {
            try {
                const results = await getSearch(input, limit);
                setResults(results);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }

        fetchSearch();
    }

    const Enter = (e) => {
        if(event.key === "Enter"){
            Search();
        }
    }
 
    const ClearSearch = () => {
        setResults(null);
        setSearch("");
    }
    
    return {results, loading, error, input, Search, ClearSearch, Enter}
}

export {useGetSearch};