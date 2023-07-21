import { useReducer, useContext, createContext } from "react";
import { initialState , reducer } from '../Context/MaintanceReducer';

const MaintanceContext = createContext();
 

const MaintanceProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return ( 
        <MaintanceContext.Provider value={[state, dispatch]}>
            {children}
        </MaintanceContext.Provider>
     );
}

export {MaintanceProvider, MaintanceContext};

function useMaintanceContext() {

    const context = useContext(MaintanceContext);

    return {context}
}

export {useMaintanceContext};