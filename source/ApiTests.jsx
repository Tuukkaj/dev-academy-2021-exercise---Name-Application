import React, { useEffect, useState } from "react"

import { useAppContext } from "./App"
import TASKS from "./constants/tasks"
import NameSelection from "./NameSelection"
import TaskButtons from "./TaskButtons"

function getUrl(task, name = "") {
  switch(task) {
    case TASKS.task1: return "/api/names/popular"
    case TASKS.task2: return "/api/names/alphabetical"
    case TASKS.task3: return "/api/names/total"
    case TASKS.task4: return "/api/names/amount/" + name
    default: throw new Error("No task specified")
  }
}


export default function ApiTests() {
  const {localization: loc, names} = useAppContext()
  const [ task, setTask ] = useState(TASKS.task1)
  const [ result, setResult ] = useState(null)
  const [ selected, setSelected ] = useState(names[0].name)

  useEffect(() => {
    const url = getUrl(task, selected);
    fetch(url)
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(err => console.log(err, "Something went wrong when fetching names"))

  }, [task, selected])

  return <div className="row">
  <div className="col"> 
      <div className="row mt-5">
        <div className="col">
          <h3>{loc.backendImplentation}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TaskButtons currentTask={task} setTask={setTask}/>
          <br/>
          {
              Object.keys(TASKS).map((key,index) => {
                let url = window.location.origin + getUrl(TASKS[key], selected)
                return <div key={url}>
                    <a href={url}>{index + 1}: {url}</a>
                  </div>
              })
            }
          <br/>
          {task === TASKS.task4 ? <NameSelection selected={selected} setSelected={setSelected} /> : null}
          <br/>
          <pre className="text-left">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      </div>
  </div>
</div>

}