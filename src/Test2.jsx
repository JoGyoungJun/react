import { useState } from "react"

const Test2 =  ()=>{
  const [state, setState] = useState();
  const onChangeHander = (e) => {
    setState(e.target.value)
  }

  return (
  <div>
    <input name="text" onChange={onChangeHander}/>
    <div>{state}</div>
  </div>
  );
}

export default Test2