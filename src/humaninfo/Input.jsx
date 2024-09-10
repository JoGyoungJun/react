const Input = ({setName,setAge}) => {
  const inputName = (e) => {setName(e.target.value)}
  const inputAge = (e) => {setAge(e.target.value)}
return (
<div>
  <div>
    <p>name : </p><input type="text" onChange={inputName}/> 
  </div>
  <div>
    <p>age : </p><input type="text" onChange={inputAge}/> 
  </div>
</div>
);
}

export default Input