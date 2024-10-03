import { useState } from "react";
import InputBox from "../shared/InputBox";
import axios from "axios";
import serverUrl from "../serverurl";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleclick = async () => {
    const logindetails = {
      email: email,
      password: password,
    };
    try {
      await axios.post(`${serverUrl}/api/v1/users/login`, logindetails);
      navigate("/Home-page");
    } catch (error) {
      console.log(`Error :- ${error}`);
    }
  };

  const handlecreate = () => {
    navigate("/signup");
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <div className="w-[1100px] h-[450px] rounded-lg bg-white flex justify-around items-center flex-row gap-5">
        <div className="-mt-28">
          <h1 className="text-5xl font-serif">Sigh In</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <InputBox
            inputtype="text"
            plaveholderinput="email"
            userInput={email}
            onUserInputChange={(email) => setEmail(email)}
          />
          <InputBox
            inputtype="password"
            plaveholderinput="Password"
            userInput={password}
            onUserInputChange={(password) => setPassword(password)}
          />
          <div className="flex flex-row justify-between gap-10 mt-5 items-center">
            <button className="text-blue-600" onClick={handlecreate}>
              Create Account
            </button>
            <button
              onClick={handleclick}
              className="text-white bg-blue-600 p-1 rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
