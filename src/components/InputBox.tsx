type InputBoxProps ={
    Inputtype : string
    placeholder : string
}


function InputBox(
  {
    Inputtype,
    placeholder
  } : InputBoxProps
) {
  return (
    <div>
        <input 
        type={Inputtype}
        className="h-10 w-64 bg-slate-100 text-black rounded-md text-center"
        placeholder={placeholder}
         />
    </div>
  )
}

export default InputBox