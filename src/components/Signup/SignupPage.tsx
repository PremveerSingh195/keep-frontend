import { useNavigate } from "react-router-dom"
import InputBox from "../shared/InputBox"

function SignupPage() {

  const navigate = useNavigate()

  const handleclick = ()=>{
    navigate("/login")
  }



  return (
    <div className="w-screen h-screen flex  justify-center items-center">
      
      <div className="w-96 h-96 bg-slate-500 rounded-md flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl font-bold text-white">Sign up</h1>
        <InputBox inputtype = "text" plaveholderinput = "username"/>
        <InputBox inputtype = "text" plaveholderinput = "email"/>
        <InputBox inputtype = "text" plaveholderinput = "fullname"/>
        <InputBox inputtype = "password" plaveholderinput = "password"/>
        <input type="file" accept="image/*"  className="items-center flex justify-center"/>
        <button className="text-xl bg-red-600 rounded-xl hover:bg-red-700 text-white p-2 font-semibold" onClick={handleclick}>Submit</button>  
      </div>

    </div>
  )
}

export default SignupPage