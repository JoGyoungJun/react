const Filter = ({setFilter}) => {

  const filterinput = (e) => {setFilter(e.target.value)}
return <div>
  <input type="text" onChange={filterinput}/>
</div>
}

export default Filter
