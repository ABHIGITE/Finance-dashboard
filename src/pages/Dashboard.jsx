import SummaryCards from "../components/SummaryCards"
import Charts from "../components/Charts"
import TransactionTable from "../components/TransactionTable"
import RoleSelector from "../components/RoleSelector"

export default function Dashboard(){

return(

<div className="p-5 space-y-5 bg-gray-100 min-h-screen">

<h1 className="text-3xl font-bold">

Finance Dashboard

</h1>

<RoleSelector/>

<SummaryCards/>

<Charts/>

<TransactionTable/>

</div>

)
}