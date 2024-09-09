import { useState } from "react"

const Calc =  ()=>{
  const [Calc, setCalc] = useState(0);
  const inputCalc = (e) => {setCalc(e.target.value)}
  return (
  <div style={{
    width:"360px"
  , height:"480px"
  , backgroundColor: "#eeeeee"}}>
    <input name="text" onChange={inputCalc}/>
    <div>초기값 : {Calc}</div>
    
  </div>
  );
}

export default Calc