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
  console.log(width)

  useEffect(() => {
    if (width > 1024) {
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
    }
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
        className={width > 1024 ? "container js-container" : "tablet"}
        onTransitionEnd={afterTransition}
        style={{ transform: width > 1024 ? `translateY(${(activePage - 1) * -100}%)` : "none" }}
        data-page={activePage}
      >
        <div className={width > 1024 ? "js-page div1" : "tablet"}>
          <FirstScreen />
        </div>
        <div className={width > 1024 ? "div2 js-page" : "tablet"}>
          <AboutUs />
        </div>
        <div className={width > 1024 ? "js-page div3" : "tablet"}>
          <Nambers />
        </div>
        <div className={width > 1024 ? "js-page div4" : "tablet"}>
          <Team />
        </div>
        <div className={width > 1024 ? "js-page div5" : "tablet"}>
          <LastScreen />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App
