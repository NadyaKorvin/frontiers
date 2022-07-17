import React from "react"
import { useState } from "react"

export function AboutUs() {
  const [mousePosition, setMousePosition] = useState("")

  const listenMousePosition = (event) => {
    setMousePosition(event.target.className)
  }

  let goUp = ""
  const goUpBlackLines = (mousePosition) => {
    if (mousePosition === "animation__text_first_part") {
      goUp = "up"
      return goUp
    }
  }
  goUpBlackLines(mousePosition)

  return (
    <div className="about__us_main" id="link__about_us">
      <div className="animation__text_block">
        <div>
          <div className="animation__text" onMouseOver={listenMousePosition}>
            <p className={goUp !== "up" ? "animation__text_first_part" : "animation__text_first_part animation__text_first_part_white"}>
              Инвестору <br></br> сложно найти прибыльные проекты,
            </p>
            <p className={goUp !== "up" ? "animation__text_second_part" : "animation__text_second_part animation__text_second_part_black"}>
              еще сложнее определить, можно ли доверять собственнику бизнеса
            </p>
          </div>
          <div className="animation__black_lines">
            <div className={goUp !== "up" ? "animation__1th_black_line" : "animation__1th_black_line animation__1th_black_line_go_upp"}></div>
            <div className={goUp !== "up" ? "animation__2th_black_line" : "animation__2th_black_line animation__2th_black_line_go_upp"}></div>
            <div className={goUp !== "up" ? "animation__3th_black_line" : "animation__3th_black_line animation__3th_black_line_go_upp"}></div>
          </div>
        </div>
      </div>
      <div className="right__part">
        <div className="conversation__image"></div>
        <p className="decoration_marks">“</p>
        <div className="about_us__text">
          <p className="text_paragraph">
            Мы знаем, как выглядят устойчивый бизнес и надежные предприниматели, потому что за 15 лет провели
            <span className="second_screen__yellow_mark"> несколько </span>
            <span className="second_screen__yellow_mark">тысяч сделок</span> по купле-продаже бизнесов в России и оценили
            <span className="second_screen__yellow_mark"> десятки тысяч </span>
            <span className="second_screen__yellow_mark">компаний.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
