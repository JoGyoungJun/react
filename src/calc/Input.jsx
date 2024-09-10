const Input = ({setResult}) => {
  const inputCalc = (e) => {setResult(Number(e.target.value))}
  return <input id="a" name="number" onChange={inputCalc}/>
}

export default Input