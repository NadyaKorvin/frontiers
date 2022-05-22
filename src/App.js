import { useState } from "react"
import "./App.css"
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation"
import { SecondScreenBlock } from "./components/secondScreen/SecondScreenBlock"

function App() {
  const [mousePosition, setMousePosition] = useState("")

  const listenUpperMousePosition = (event) => {
    setMousePosition(event.target.className)
  }

  return (
    <div className="App">
      <section className="second__screen">
        <SecondScreenBlock />
        <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} mousePosition={mousePosition} />
      </section>
    </div>
  )
}
export default App
