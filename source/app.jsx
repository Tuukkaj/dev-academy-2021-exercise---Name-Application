import React, { createContext, useContext, useEffect, useState} from "react"
import ReactDOM from "react-dom"

import Names from "./Names"

const AppContext = createContext()
export function useAppContext() {
  return useContext(AppContext)
}

function App() {
  const [ appData, setAppData ] = useState({})
  
  useEffect(() => {
    fetch("/api/maindata")
    .then(response => response.json())
    .then(data =>  setAppData(data))
    .catch(err => console.log(err, "Something went wrong when connecting to backend!"))
  }, [])

if(Object.keys(appData) < 1) {
  return <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
}

  return <AppContext.Provider value={appData}>
    <div className="container-flex">
      <div className="row">
        <div className="col-lg-8 col offset-lg-2">
          <Names />
        </div>
      </div>
    </div>
  </AppContext.Provider>
}

let appContainer = document.getElementById("app")
ReactDOM.render(<App />, appContainer)