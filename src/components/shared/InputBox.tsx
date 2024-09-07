import React from "react";

interface InputBoxtype  {
    inputtype : string;
    plaveholderinput : string;
    userInput : string;
    onUserInputChange : (input : string) => void
}


const InputBox : React.FC<InputBoxtype> = ({
    inputtype,
    plaveholderinput = "",
    userInput,
    onUserInputChange,
}) => {
  return (
     <input 
     type={inputtype}
     placeholder={plaveholderinput}
     className="text-black bg-white h-10 w-60 text-center rounded-md"
     value = {userInput}
     onChange={(e)=> onUserInputChange(e.target.value)}
    />
  )
}
export default InputBox