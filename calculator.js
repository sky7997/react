import Raect,{useState} from "react"
const App=()=>{
  const [val,setVal]=useState("")
  const calf=(t)=>{
    if (t!=="="){
      setVal(prev=>prev+t)
    }else {
      try {
        const ans=eval(val)
      setVal(ans.toString())
      }
      catch {
        setVal("error")
      }
    }
  }
  const clr=()=>{
    setVal("")
  }
return(
  <div>
    <input
    type="text"
    value={val}
    />
    {["1","2","3","4","5","6","7","8","9","0","+","-","*","/","="].map((t,i)=>(
    <button key={i} onClick={()=>calf(t)}>{t}</button>
   
  ))}
   <button onClick={clr}>Clear</button>
  </div>
)
}
export default App
