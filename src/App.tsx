import { BrowserRouter, Route , Routes } from 'react-router-dom'
import SignupPage from './components/Signup/SignupPage'
import Login from './components/Login/Login'
import UserPage from './components/UserPage/UserPage'

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/user' element={<UserPage/>}/>
     </Routes>
     </BrowserRouter>
  )
}
export default App