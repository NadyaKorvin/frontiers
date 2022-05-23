import { useState } from "react"
import "./App.css"
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation"
import { SecondScreenBlock } from "./components/secondScreen/SecondScreenBlock"
import { ThirdScreen } from "./components/therstScreen/ThirdScreenBlock"
import FirstScreenAnimation from "./components/firstScreen/FirstScreenAnimation"
import LastScreenAnimation from "./components/lastScreen/LastScreenAnimation"

function App() {
  const [mousePosition, setMousePosition] = useState("")

  const listenUpperMousePosition = (event) => {
    setMousePosition(event.target.className)
  }

  return (
    <div className="App">
      <FirstScreenAnimation />
      <section className="second__screen_main">
        <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} mousePosition={mousePosition} />
        <SecondScreenBlock />
      </section>
      <section className="third__screen">
        <ThirdScreen />
      </section>
      <LastScreenAnimation />
    </div>
  )
}
export default App
