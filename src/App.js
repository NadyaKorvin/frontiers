import { useState, useEffect, useRef } from "react"
import { dataPersones } from "./components/team/dataPersones"
import "./App.css"
import { Header } from "./components/header/Header"
import FirstScreen from "./components/firstScreen/FirstScreen"
import { SecondScreenBlock } from "./components/secondScreen/SecondScreenBlock"
import { SecondScreenAnimation } from "./components/secondScreen/SecondScreenAnimation"
import { Nambers } from "./components/numbers/Numbers"
import { Team } from "./components/team/Team"
import LastScreen from "./components/lastScreen/LastScreen"
import { ScrollBar } from "./components/scrollBar/ScrollBar"
import { Footer } from "./components/footer/Footer"

function App() {
  const [mousePosition, setMousePosition] = useState("")
  const [refreshData, setRefreshData] = useState(dataPersones)
  const [activePage, setActivePage] = useState(1)
  const animatingPage = useRef(false)

  const listenUpperMousePosition = (event) => {
    setMousePosition(event.target.className)
  }

  const removePerson = (elem) => {
    let filter = refreshData.filter((person) => person.key !== elem.key)
    setRefreshData([elem, ...filter])
  }

  useEffect(() => {
    const onWheel = (event) => {
      if (animatingPage.current) return
      const direction = getDirection(event.deltaY)

      if (!direction) return
      if (direction === "up" && activePage === 1) return
      if (direction === "down" && activePage === 5) return

      setActivePage((prev) => (direction === "up" ? prev - 1 : prev + 1))
      animatingPage.current = true
    }

    document.addEventListener("wheel", onWheel)
    return () => document.removeEventListener("wheel", onWheel)
  }, [animatingPage, activePage])

  function getDirection(deltaY) {
    return deltaY > 0 ? "down" : deltaY < 0 ? "up" : null
  }

  const afterTransition = (event) => {
    if (event.target !== event.currentTarget) return
    setTimeout(() => (animatingPage.current = false), 500)
  }

  // const goToLink = (goToPage) => {
  //   setActivePage(goToPage)
  // }

  return (
    <>
      <ScrollBar activePage={activePage} />
      <Header setActivePage={setActivePage} />
      <div
        className="container js-container"
        onTransitionEndCapture={afterTransition}
        style={{ transform: `translateY(${(activePage - 1) * -100}%)` }}
        data-page={activePage}
      >
        <div className="js-page div1">
          <FirstScreen />
        </div>
        <div className="second__screen  div2 js-page">
          <div className="second__screen_main">
            <SecondScreenAnimation listenMousePosition={listenUpperMousePosition} mousePosition={mousePosition} />
            <SecondScreenBlock />
          </div>
        </div>
        <div className="js-page div3">
          <Nambers />
        </div>
        <div className="div4 js-page">
          <Team removePerson={removePerson} refreshData={refreshData} />
        </div>
        <div className="js-page div5">
          <LastScreen />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App
