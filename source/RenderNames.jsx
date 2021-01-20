import React, {useState} from "react"
import { useAppContext } from "./App";
import TASKS from "./constants/tasks"
import NameSelection from "./NameSelection";

function NameTable({names, loc}) {
  let rows = names.map(name => {
    return <tr key={name.name}>
      <td>{name.name}</td>
      <td>{name.amount}</td>
    </tr>
  })

  return <table className="table table-striped">
    <thead className="bg-danger text-white">
      <tr>
        <th>{loc.name}</th>
        <th>{loc.amount}</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

function Task1({names, loc}) {
  let sorted = names.sort((a,b) => b.amount - a.amount)
  return <NameTable names={sorted} loc={loc}/>
}

function Task2({names, loc}) {
  let sorted = names.sort((a,b) => a.name.localeCompare(b.name))
  return <NameTable names={sorted} loc={loc}/>
}

function Task3({names, loc}) {
  let total = 0; 
  names.forEach(name => total += name.amount)
  return <h3>{loc.total} {total}</h3>
}

function Task4({names, loc}) {
  const [selected, setSelected] = useState(names[0].name)

  return <div className="row align-items-center">
      <div className="col">
        <NameSelection selected={selected} setSelected={setSelected} />
      </div>
      <div className="col">
          <h3>{loc.amount}: {names.find(name => name.name === selected)?.amount}</h3>
      </div>
    </div>
}

export default function RenderNames({task}) {
  const {localization: loc, names} = useAppContext()

  switch(task) {
    case TASKS.task1: return <Task1 names={names} loc={loc}/>
    case TASKS.task2: return <Task2 names={names} loc={loc}/>
    case TASKS.task3: return <Task3 names={names} loc={loc}/>
    case TASKS.task4: return <Task4 names={names} loc={loc}/>
    default: return null
  } 
}