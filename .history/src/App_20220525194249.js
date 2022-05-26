import { useState } from "react"
import "./App.css"
import { SecondScreen } from "./components/secondScreen/SecondScreenAnimation"
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
      <div className="container js-container" data-page="1">
        <div className="js-page div1">
          <FirstScreenAnimation />
        </div>
        <div className="second__screen js-page div2">
          <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} mousePosition={mousePosition} />
          <SecondScreenBlock />
        </div>
        <div className="third__screen js-page div3">
          <ThirdScreen />
        </div>
        <div className="js-page div4">
          <LastScreenAnimation />
        </div>
      </div>
    </div>
  )
}
export default App
