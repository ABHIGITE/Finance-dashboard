import { LineChart,Line,PieChart,Pie,Tooltip,XAxis,YAxis,CartesianGrid} from "recharts"

import { useContext } from "react"
import { FinanceContext } from "../context/FinanceContext"

export default function Charts(){

const {transactions}=useContext(FinanceContext)

const monthlyData=transactions.map(t=>({

month:t.date,
amount:t.amount

}))

const categoryData=Object.values(

transactions.reduce((acc,t)=>{

if(!acc[t.category])
acc[t.category]={name:t.category,value:0}

acc[t.category].value+=t.amount

return acc

},{})
)

return(

<div className="grid md:grid-cols-2 gap-5">

<div className="bg-white p-4 rounded-xl shadow">

<h2>Monthly Trend</h2>

<LineChart width={350} height={250} data={monthlyData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line type="monotone" dataKey="amount"/>

</LineChart>

</div>

<div className="bg-white p-4 rounded-xl shadow">

<h2>Category Breakdown</h2>

<PieChart width={350} height={250}>

<Pie data={categoryData}
dataKey="value"
nameKey="name"
outerRadius={80}
/>

<Tooltip/>

</PieChart>

</div>

</div>

)
}