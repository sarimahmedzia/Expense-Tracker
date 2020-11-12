//import { createContext } from 'react'

import React, {createContext, useReducer} from "react"

import TransactionReducer from './transReducer'
const initialTransactions = [
    { amount: 100, desc: "Cash" },
    { amount: 400, desc: "Book" },
    { amount: 200, desc: "Camera" }
    
]

export const TransactionContext=createContext(initialTransactions)

//let [state,dispatch]=useReducer(TransactionReducer,initialTransactions  )

export const TransactionProvider=({children})=>{
     
 let [state,dispatch]=useReducer(TransactionReducer,initialTransactions  )

 function addTransaction(transObj){
     dispatch({
         type:'ADD_TRANSACTION',
         payload:{
             amount: transObj.amount,
              desc: transObj.desc 
            
         },
     }) 
 }

 function deleteTransaction(transObj){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:{
            amount:transObj.amount,
            desc:transObj.desc
        },
        
    })
}
 return(


    <div>
    
     <TransactionContext.Provider value={{transactions:state,addTransaction,deleteTransaction}}>

      

{children}
     </TransactionContext.Provider>
     </div>
     

 )
}