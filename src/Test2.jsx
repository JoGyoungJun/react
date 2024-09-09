import { useState } from "react"

const Test2 =  ()=>{
  const [state, setState] = useState();
  return (
  <div>
    <input name="text" onChange={(e)=>setState(e.target.value)}/>
    <div>{state}</div>
  </div>
  );
}

export default Test2