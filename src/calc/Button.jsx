import { type } from "./type";

const Button = ({target, result, setPrint, setTarget, print}) => {
  return (<div>{type.map(type =>
  <button onClick={() => {
    const calcResult = type.func(target,result);
    setPrint([...print, <div>{target} {type.name} {result} = {calcResult}</div>]);
    setTarget(calcResult);
    }}>{type.name}</button>)}</div>);

}

export default Button
