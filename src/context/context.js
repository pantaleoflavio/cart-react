import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { DATA_FETCHING_FAIL, DATA_FETCHING_STARTED, DATA_FETCHING_SUCCESS } from "./actions";
import axios from "axios";
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    total: 0,
    itemCounter: 0,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // using useReducer with initial state
    const [state, dispatch] = useReducer(reducer, initialState);

    // data fetching
    useEffect(()=>{
        //IIFE
        (async() =>{
            dispatch({type: DATA_FETCHING_STARTED})
            try {
               const response = await axios.get(url);
               dispatch({
                type: DATA_FETCHING_SUCCESS,
                payload: response.data.data,
            }) 
            } catch (error) {
                dispatch({type: DATA_FETCHING_FAIL})
            }
        })()
    }, [])
    return (
        <AppContext.Provider value={{
            ...state,
        }}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };