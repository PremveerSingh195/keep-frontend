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
      navigate("/");
    } catch (error) {
      console.log(`Error :- ${error}`);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-50 flex justify-center items-center">
      <div className="w-96 h-96 bg-slate-600 flex justify-center items-center flex-col gap-5">
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
        <button
          onClick={handleclick}
          className="text-xl font-semibold text-white bg-red-600 hover:bg-red-700 p-2 rounded-xl"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
