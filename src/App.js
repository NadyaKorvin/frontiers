import React from "react"
import { useState, useEffect, useRef } from "react"
import "./App.css"
import { Header } from "./components/header/Header"
import { ScrollBar } from "./components/scrollBar/ScrollBar"
import FirstScreen from "./components/firstScreen/FirstScreen"
import { AboutUs } from "./components/aboutUs/AboutUs"
import { Nambers } from "./components/numbers/Numbers"
import { Team } from "./components/team/Team"
import LastScreen from "./components/lastScreen/LastScreen"
import { Footer } from "./components/footer/Footer"
import { Projects } from "./components/projects/Projects"

function App() {
  const [activePage, setActivePage] = useState(1)
  const animatingPage = useRef(false)
  const [width, setWidth] = useState(window.innerWidth)

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  useEffect(() => {
    const onWheel = (event) => {
      if (animatingPage.current) return
      const direction = getDirection(event.deltaY)

      if (!direction) return
      if (direction === "up" && activePage === 1) return
      if (direction === "down" && activePage === 6) return

      setActivePage((prev) => (direction === "up" ? prev - 1 : prev + 1))
      animatingPage.current = true
    }

    document.addEventListener("wheel", onWheel)
    return () => document.removeEventListener("wheel", onWheel)
  }, [animatingPage, activePage, width])

  function getDirection(deltaY) {
    return deltaY > 0 ? "down" : deltaY < 0 ? "up" : null
  }

  const afterTransition = (event) => {
    if (event.target !== event.currentTarget) return
    setTimeout(() => (animatingPage.current = false), 500)
  }

  return (
    <>
      <ScrollBar activePage={activePage} />
      <Header setActivePage={setActivePage} />
      <div
        className="container js-container"
        onTransitionEnd={afterTransition}
        style={{ transform: width > 1024 ? `translateY(${(activePage - 1) * -100}%)` : "none" }}
        data-page={activePage}
      >
        <div className="js-page div1" id="main">
          <FirstScreen />
        </div>
        <div className="js-page div2" id="about_us">
          <AboutUs />
        </div>
        <div className="js-page div3" id="projects">
          <Projects width={width} />
        </div>
        <div className="js-page div4" id="numbers">
          <Nambers />
        </div>
        <div className="js-page div5" id="team">
          <Team width={width} />
        </div>
        <div className="js-page div6" id="form">
          <LastScreen />
          <Footer setActivePage={setActivePage} />
        </div>
      </div>
    </>
  )
}
export default App
