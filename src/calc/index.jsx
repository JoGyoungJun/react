import { useState } from "react"
import Input from "./Input";
import Button from "./Button";


const Calc =  ()=>{
  const [result, setResult] = useState(0);
  const [target, setTarget] = useState(0);
  const [print, setPrint] = useState([<div>초기값 : 0</div>]);

  return (
  <div style={{
    width:"360px"
  , height:"480px"
  , backgroundColor: "#eeeeee"}}>
    <Input setResult={setResult}/>
    <Button target={target} result={result} setPrint={setPrint} setTarget={setTarget} print={print} />
    {print.map(print => print)}
  </div>
  );
}

export default Calc