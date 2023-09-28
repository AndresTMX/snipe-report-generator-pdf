import { useEffect, useState } from "react";
import { getSearch } from "../API";
import { filterResults, assetsForSearcher } from "../Helpers/actionsMaintance";

function useGetSearch(search, limit) {

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
                const resultsFiltered = filterResults(results);                                     
                const resultsFilteredForUser = assetsForSearcher(resultsFiltered, 'assigned_to', 'status_label')         
                setResults(resultsFilteredForUser);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }

        fetchSearch();
    }

    const actions = {Search, setResults }

    const states = {results, loading, error, input}
 
    
    return {actions, states}
}

export {useGetSearch};