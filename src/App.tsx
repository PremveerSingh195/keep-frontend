import { BrowserRouter, Route , Routes } from 'react-router-dom'
import SignupPage from './components/Signup/SignupPage'
import { HomePage } from './components'
import Login from './components/Login/Login'

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
  )
}
export default App