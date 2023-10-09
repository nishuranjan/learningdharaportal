import React, { useEffect } from "react"
import ReactDOM from "react-dom"

function Main() {
  return (
    <div>
      <h1>This is our test app</h1>
      <p>Setting up new project</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
if (module.hot) {
  module.hot.accept()
}
