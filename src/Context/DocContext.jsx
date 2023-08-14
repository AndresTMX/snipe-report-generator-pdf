import React, { createContext, useReducer } from "react";
import { initialStore, reducer as reducerDocReducer } from "./DocReducer";
import { StatesModals, reducer as reducerStatesModals } from "./StatesModalsReducer";

const DocContext = createContext();

const DataProvider = ({ children }) => {

  const combineReducers = (state, action) => ({
    initialStore: reducerDocReducer(state.initialStore, action),
    StatesModals: reducerStatesModals(state.StatesModals, action)
  });

  const [state, dispatch] = useReducer(combineReducers, {
    initialStore: initialStore,
    StatesModals: StatesModals
  });

  return (
    <DocContext.Provider value={[state, dispatch]}>
      {children}
    </DocContext.Provider>
  );
};

export { DataProvider, DocContext };


