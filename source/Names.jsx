import React, {useState} from "react"

import { useAppContext } from "./App"
import TaskButtons from "./TaskButtons"
import RenderNames from "./RenderNames"
import TASKS from "./constants/tasks"

export default function Names() {
  const { localization: loc, names } = useAppContext();
  const [ task, setTask ] = useState(TASKS.task1)

  return <div className="row">
    <div className="col"> 
        <div className="row mt-5">
          <div className="col">
            <h3>{loc.frontendImplentation}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TaskButtons currentTask={task} setTask={setTask}/>
            <br/>
            <br/>
            <RenderNames task={task}/>
          </div>
        </div>
    </div>
  </div>
}
