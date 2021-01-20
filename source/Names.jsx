import React, {useState} from "react"

import { useAppContext } from "./App"
import TaskButtons from "./TaskButtons"
import RenderNames from "./RenderNames"

export const TASKS = {
  task1: "taskOne",
  task2: "taskTwo",
  task3: "taskThree",
  task4: "taskFour"
}

export default function Names() {
  const { localization: loc, names } = useAppContext();
  const [ task, setTask ] = useState(TASKS.task1)

  return <div className="row">
    <div className="col"> 
        <div className="mt-3 text-center">
          <h1>{loc.devAcademy}</h1>
          <p>{loc.devAcademyExplanation}</p>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h3>{loc.frontendImplentation}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TaskButtons allTasks={TASKS} currentTask={task} setTask={setTask}/>
            <br/>
            <br/>
            <RenderNames task={task}/>
          </div>
        </div>
    </div>
  </div>
}