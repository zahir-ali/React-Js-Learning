// import Submit from "./submit"
import { useTransition } from "react";
import './App.css'

function UseTransition() {
  const [pending, startTransition] = useTransition();
  const handleButton = ()=>{

  startTransition(async ()=> {
       await new Promise(res => setTimeout(res, 2000));
  })
   
  }
  return (
    <div> 
    <button disabled={pending} onClick={handleButton}>click</button>
    {
      pending && <p>Loading...</p>
    }
    </div>
  )
}
export default UseTransition;