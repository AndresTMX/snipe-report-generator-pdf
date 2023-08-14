import { useState } from "react"

function useSearcher() {

    const [search, setSearch] = useState('')

    return {search, setSearch};
}

export {useSearcher};