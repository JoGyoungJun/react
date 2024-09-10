import { useState } from "react"
import Input from "./Input";
import Button from "./Button";
import Filter from "./filter";


const Humaninfo = () => {
const [name, setName] = useState();
const [age, setAge] = useState();
const [print, setPrint] = useState([]);
const [filter, setFilter] = useState('');

return (
<div>
  <Input setName={setName} setAge={setAge}/>
  <Button name={name} age={age} print={print} setPrint={setPrint}/>
<div>
  <Filter setFilter={setFilter}/>
</div>
  <table>
  <tr><th>name</th><th>age</th></tr>
    {print.map(print => {
      return RegExp(filter).test(print.props.children[0].props.children) && print;
      })}
  </table>
</div>
) ;
}

export default Humaninfo