import { useState, useEffect } from "react"

import { dataPersones } from "./components/therstScreen/dataPersones"
import "./App.css"
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation"
import { SecondScreenBlock } from "./components/secondScreen/SecondScreenBlock"
import { ThirdScreen } from "./components/therstScreen/ThirdScreenBlock"
import FirstScreen from "./components/firstScreen/FirstScreen"
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
      <div className="js-page">
        <FirstScreen />
      </div>
      <div className="second__screen  js-page">
        <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} mousePosition={mousePosition} />
        <SecondScreenBlock />
      </div>
      <div className="third__screen  js-page">
        <ThirdScreen removePerson={removePerson} refreshData={refreshData} />
      </div>
      <div className=" js-page"></div>
      <div className=" js-page">
        <LastScreen />
      </div>
    </div>
  )
}
export default App
