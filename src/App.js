import { useState, useEffect } from "react"
import { dataPersones } from "./components/aboutAs/dataPersones"
import "./App.css"
import FirstScreen from "./components/firstScreen/FirstScreen"
import { SecondScreenBlock } from "./components/secondScreen/SecondScreenBlock"
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation"
import { Nambers } from "./components/numbers/Numbers"
import { AboutAs } from "./components/aboutAs/AboutAs"
import LastScreen from "./components/lastScreen/LastScreen"

function App() {
  const [mousePosition, setMousePosition] = useState("")
  const [refreshData, setRefreshData] = useState(dataPersones)
  const [activePage, setActivePage] = useState(1)
  const [animatingPage, setAnimatingPage] = useState(false)

  const listenUpperMousePosition = (event) => {
    setMousePosition(event.target.className)
  }

  const removePerson = (elem) => {
    let filter = refreshData.filter((person) => person.key !== elem.key)
    setRefreshData([elem, ...filter])
  }

  useEffect(() => {
    function onWheel(event) {
      let page = activePage
      const direction = getDirection(event.deltaY)
      console.log("direction", direction)

      if (!direction || animatingPage) return
      if (direction === "up" && page === 1) return
      if (direction === "down" && page === 5) return

      if (direction === "up") page--
      if (direction === "down") page++
      console.log("page", page)
      setActivePage(page)
      setAnimatingPage(true)
    }
    document.addEventListener("wheel", onWheel, { passive: true })
    return () => document.addEventListener("wheel", onWheel)
  }, [activePage, animatingPage])

  function getDirection(deltaY) {
    return deltaY > 0 ? "down" : deltaY < 0 ? "up" : null
  }

  const afterTransition = (event) => {
    setTimeout(() => {
      console.info(`🔥 animating`, false)
      setAnimatingPage(false)
    }, 500)
  }

  return (
    <div
      className=" container js-container"
      onTransitionEnd={afterTransition}
      style={{ transform: `translateY(${(activePage - 1) * -100}%)` }}
      data-page={activePage}
    >
      <div className="js-page div1">
        <FirstScreen />
      </div>
      <div className="second__screen  div2 js-page">
        <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} mousePosition={mousePosition} />
        <SecondScreenBlock />
      </div>
      <div className="numbers js-page div3">
        <Nambers />
      </div>
      <div className="about_us__screen div4 js-page">
        <AboutAs removePerson={removePerson} refreshData={refreshData} />
      </div>
      <div className="last__screen js-page div5">
        <LastScreen />
      </div>
    </div>
  )
}
export default App
