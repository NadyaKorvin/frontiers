import { useState } from "react"
import "./App.css"
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation"
import Main from "./Main/Main";

function App() {
  const [mousePosition, setMousePosition] = useState("")

  const listenUpperMousePosition = (event) => {
    console.log(event)
    console.log(event.target)
    setMousePosition(event.target)
  }

  return (
    <>
      <div className="App">
      <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} />
    </div>
    </>
  )
}
export default App
