import React from "react";

interface InputBoxtype  {
    inputtype : string;
    plaveholderinput : string
}


const InputBox : React.FC<InputBoxtype> = ({
    inputtype,
    plaveholderinput = ""
}) => {
  return (
     <input 
     type={inputtype}
     placeholder={plaveholderinput}
     className="text-black bg-white h-10 w-60 text-center"
      />
  )
}
export default InputBox