import axios from "axios"
import serverUrl from "../serverurl"
import { useNavigate } from "react-router-dom"

function UserPage() {

    const navigate = useNavigate()

    const handler = async() => {
           try {
               await axios.get(`${serverUrl}/api/v1/users/logout` , {withCredentials : true})

               navigate("/login")
           } catch (error) {
               throw error
           }
    }



  return (
    <div>
        <h1>logout page</h1>

        <button className="p-3 bg-slate-500 text-white rounded-lg" onClick={handler}>logout</button>
    </div>
  )
}

export default UserPage