import React from "react"
import { useAppContext } from "./App"

export default function NameSelection({selected, setSelected}) {
  const { names } = useAppContext(); 
  
  return <select value={selected} onChange={e => setSelected(e.target.value)} className="form-control input-focus-glow">
    {
      names.map(name => {
        return <option value={name.name}>
            {name.name}
        </option>
      })
    }
</select>
}