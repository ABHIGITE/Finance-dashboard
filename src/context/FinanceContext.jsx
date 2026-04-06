import { createContext, useState, useEffect } from "react";
import { initialTransactions } from "../data/mockData";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {

const [transactions,setTransactions]=useState(()=>{
const saved = localStorage.getItem("transactions")
return saved ? JSON.parse(saved) : initialTransactions
})

const [role,setRole]=useState("viewer")

useEffect(()=>{
localStorage.setItem("transactions",
JSON.stringify(transactions))
},[transactions])

const addTransaction=(txn)=>{
setTransactions([...transactions,txn])
}

return(
<FinanceContext.Provider
value={{
transactions,
setTransactions,
addTransaction,
role,
setRole
}}
>
{children}
</FinanceContext.Provider>
)
}