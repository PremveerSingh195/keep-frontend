import { useNavigate } from "react-router-dom"
import InputBox from "../shared/InputBox"
import { useState } from "react"
import axios from "axios"

function SignupPage() {

  const navigate = useNavigate()

  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [fullname , setFullName] = useState("")
  const [password , setPassword] = useState("")
  const [selectedImage , setSelectedImage] = useState<File | null>(null)

  const handleImageSelect = ( e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
     setSelectedImage(e.target.files[0])
    }
}

  const handleclick = async ()=>{
 
   try {
    await axios.post('')
   } catch (error) {
    
   }

    navigate("/login")
  }



  
  return (
    <div className="w-screen h-screen flex  justify-center items-center">
      
      <div className="w-96 h-96 bg-slate-500 rounded-md flex flex-col justify-center items-center gap-2"> 
        <h1 className="text-xl font-bold text-white">Sign up</h1>
        <InputBox 
        inputtype = "text" 
        plaveholderinput = "username" 
        userInput= {username} 
        onUserInputChange= {(username)=>setUsername(username)}/>
        <InputBox 
        inputtype = "text" 
        plaveholderinput = "email" 
        userInput= {email} 
        onUserInputChange= {(email)=>setEmail(email)}/>
        <InputBox 
        inputtype = "text" 
        plaveholderinput = "fullname" 
        userInput= {fullname}
        onUserInputChange= {(fullname)=>setFullName(fullname)}/>
        <InputBox 
        inputtype = "password" 
        plaveholderinput = "password" 
        userInput= {password} 
        onUserInputChange= {(password)=>setPassword(password)}/>
        <input 
        type="file" 
        accept="image/*" 
        className="ml-24 text-white"
        onChange={handleImageSelect}/>
        {
          selectedImage && (
            <div>
              <p> Selected File : {selectedImage.name}</p>
            </div>
          )
        }
        <button className="text-xl bg-red-600 rounded-xl hover:bg-red-700 text-white p-2 font-semibold" onClick={handleclick}>Submit</button>
      </div>
    </div>
  )
}

export default SignupPage