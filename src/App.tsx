import InputBox from "./components/InputBox"



function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black' >
       <div className='h-96 w-96 rounded-md bg-gray-700 gap-4 flex justify-center flex-col items-center'>
           <h1 className="text-2xl font-bold text-white">Login</h1>
           <InputBox Inputtype="text" placeholder="Username"/>
           <InputBox Inputtype="text" placeholder="Full Name"/>
           <InputBox Inputtype="text" placeholder="Email"/>
           <InputBox Inputtype="password" placeholder="Password"/>
           <button className="text-xl font-semibold">Signup</button>
       </div>
    </div>
  )
}
export default App