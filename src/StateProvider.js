//Setup data layer
//We  need this to track the basket
import React from "react";
import { createContext, useContext, useReducer } from "react";

//THIS is the data layer
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Thisis how we use it inside of  a component
export const useStateValue = () => useContext(StateContext);
