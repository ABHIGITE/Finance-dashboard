import { useContext,useState } from "react"
import { FinanceContext } from "../context/FinanceContext"

export default function TransactionTable(){

const {transactions}=useContext(FinanceContext)

const [search,setSearch]=useState("")

const filtered=transactions.filter(t=>

t.category.toLowerCase()
.includes(search.toLowerCase())

)

return(

<div className="bg-white p-5 rounded-xl shadow">

<input
placeholder="Search category..."
className="border p-2 mb-3"
onChange={e=>setSearch(e.target.value)}
/>

<table className="w-full">

<thead>

<tr>

<th>Date</th>
<th>Amount</th>
<th>Category</th>
<th>Type</th>

</tr>

</thead>

<tbody>

{

filtered.map(t=>(

<tr key={t.id}>

<td>{t.date}</td>

<td>₹{t.amount}</td>

<td>{t.category}</td>

<td>{t.type}</td>

</tr>

))

}

</tbody>

</table>

</div>

)
}