import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id:1, text:'Flower', amount:-20},
        {id:3, text:'Book', amount:400},
        {id:2, text:'Salary', amount:-20},
        {id:4, text:'Transport', amount:-20},
    ]
}

// create global context

export const GlobalContext = createContext(initialState)

// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch]  = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
      dispatch({
          type:'DELETE_TRANSACTION',
          payload:id
      })
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
      }
    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    )
}