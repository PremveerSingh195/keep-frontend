import { useNavigate } from "react-router-dom";
import InputBox from "../shared/InputBox";
import { useState } from "react";
import axios from "axios";
import serverUrl from "../serverurl";

function SignupPage() {
  const navigate = useNavigate();

  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [Fullname, setFullname] = useState("");
  const [password, setpassword] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleclick = async () => {
    try {
      const formData = new FormData();

      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("Fullname", Fullname);
      formData.append("password", password);

      if (selectedImage) {
        formData.append("avatar", selectedImage);
      }

      await axios.post(`${serverUrl}/api/v1/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("/api/v1/users/register");
      navigate("/login");
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  return (
    <div className="w-screen h-screen flex bg-slate-300   justify-center items-center">
      <div className="w-96 h-96 bg-white rounded-md flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl font-bold text-white">Sign up</h1>
        <InputBox
          inputtype="text"
          plaveholderinput="userName"
          userInput={userName}
          onUserInputChange={(userName) => setuserName(userName)}
        />
        <InputBox
          inputtype="text"
          plaveholderinput="email"
          userInput={email}
          onUserInputChange={(email) => setemail(email)}
        />
        <InputBox
          inputtype="text"
          plaveholderinput="Fullname"
          userInput={Fullname}
          onUserInputChange={(Fullname) => setFullname(Fullname)}
        />
        <InputBox
          inputtype="password"
          plaveholderinput="password"
          userInput={password}
          onUserInputChange={(password) => setpassword(password)}
        />
        <input
          type="file"
          accept="image/*"
          className="ml-24 text-white"
          onChange={handleImageSelect}
        />
        {selectedImage && (
          <div>
            <p> Selected File : {selectedImage.name}</p>
          </div>
        )}
        <button
          className="text-xl bg-blue-600 rounded-xl hover:bg-blue-700 text-white p-2 font-semibold"
          onClick={handleclick}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignupPage;