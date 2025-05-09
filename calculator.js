import React, { useState } from 'react';
const App=()=>{
const [val,setVal]=useState("")

const cal=()=>{
  try{
    setVal(eval(val).toString())
  } catch {
    setVal("error")
  }
}
const add=(k)=>{
  setVal(prev=>prev+k)
}
const rs=()=>{
  setVal("")
}


return(
  <div>
    <input
    type="text"
    value={val}
    readOnly
    />
    <div>
      {["1","2","3","4","5","6","7","8","9","0","+","-","*","/","="].map((k)=>(

        <button key={k}
        onClick={k==="=" ? cal:()=> add(k)}
        >{k}</button>
      ))}
      <button onClick={rs}>reset</button>
    </div>
  </div>
)
}
export default App
