import { Route , useNavigate } from "react-router-dom";
import { getCookie } from "../utils";


function PrivateRoute = ({ component: Component, ...rest }) => {

const accessToken =  getCookie('accessToken')
const navigate = useNavigate()


  return 
    <Route
    {...rest}
    render = {props => 
        accessToken ? (
            <Component {...props}/>
        ) : (
           navigate('/login')
        )
    }
    />
  )
}
export default PrivateRoute;