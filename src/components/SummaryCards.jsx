import { useContext } from "react"
import { FinanceContext } from "../context/FinanceContext"

export default function SummaryCards(){

const {transactions}=useContext(FinanceContext)

const income=transactions
.filter(t=>t.type==="income")
.reduce((acc,t)=>acc+t.amount,0)

const expense=transactions
.filter(t=>t.type==="expense")
.reduce((acc,t)=>acc+t.amount,0)

const balance=income-expense

return(

<div className="grid md:grid-cols-3 gap-4">

<Card title="Balance" value={balance}/>
<Card title="Income" value={income}/>
<Card title="Expense" value={expense}/>

</div>

)
}

function Card({title,value}){

return(

<div className="bg-white shadow p-5 rounded-xl">

<h2 className="text-gray-500">{title}</h2>

<p className="text-2xl font-bold">
₹{value}
</p>

</div>

)

}