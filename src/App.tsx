import { BrowserRouter, Route , Routes } from 'react-router-dom'
import SignupPage from './components/Signup/SignupPage'
import Login from './components/Login/Login'
import { HomePage } from "./components";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Home-page"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App