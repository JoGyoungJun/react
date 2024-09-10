const Button = ({name, age, print, setPrint}) =>{
  return <button onClick={()=> setPrint([...print, <tr><th>{name}</th><th>{age}</th></tr>])}>등록</button>
}

export default Button;