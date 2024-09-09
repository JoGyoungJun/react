import { useState } from "react"

const Test2 =  ()=>{
  const [state, setState] = useState("");
  const [logs, setLogs] = useState([]);
  const onChangeHander = (e) => {
    setState(e.target.value)
    setLogs([...logs, e.target.value])
  }

  return (
  <div>
    <input name="text" onChange={onChangeHander}/>
    {logs.maps(str => <p>{str}</p>)}
  </div>
  );
}

export default Test2