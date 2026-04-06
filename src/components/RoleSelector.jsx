import { useContext } from "react"
import { FinanceContext } from "../context/FinanceContext"

export default function RoleSelector(){

const {role,setRole}=useContext(FinanceContext)

return(

<select
value={role}
onChange={e=>setRole(e.target.value)}
className="border p-2"
>

<option value="viewer">Viewer</option>

<option value="admin">Admin</option>

</select>

)

}