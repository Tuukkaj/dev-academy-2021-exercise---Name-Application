import React from "react"
import {useAppContext} from "./App"
import TASKS from "./constants/tasks"

export default function TaskButtons({currentTask, setTask}) {
  const { localization: loc } = useAppContext();

  return Object.keys(TASKS).map((taskKey) => {
    return <div className="mb-3" key={taskKey}>
          <button className={currentTask === TASKS[taskKey] ? "btn btn-danger" : "btn btn-secondary"} 
            onClick={() => setTask(TASKS[taskKey])}>
          {loc[`${TASKS[taskKey]}Button`]}
        </button>
      </div>
  })
}
