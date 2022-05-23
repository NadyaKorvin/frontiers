import { useState } from "react"
import "./App.css"
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation"
import { SecondScreenBlock } from "./components/secondScreen/SecondScreenBlock"
import { ThirdScreen } from "./components/therstScreen/ThirdScreenBlock"

function App() {
  const [mousePosition, setMousePosition] = useState("")
  const listenUpperMousePosition = (event) => {
    setMousePosition(event.target.className)
  }

  return (
    <div className="App">
      <section className="second__screen">
        <div className="second__screen_main">
          <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} mousePosition={mousePosition} />
          <SecondScreenBlock />
        </div>
      </section>
      <section className="third__screen">
        <ThirdScreen />
      </section>
    </div>
  )
}
export default App
