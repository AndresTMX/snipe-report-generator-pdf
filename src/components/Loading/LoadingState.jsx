import { useState } from "react";

function LoadingState(){

    const [loading, setLoading] = useState(false);

    return {loading, setLoading}
}

export {LoadingState};