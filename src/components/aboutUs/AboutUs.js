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
              Инвесторам сложно найти хорошие проекты,
            </p>
            <p className={goUp !== "up" ? "animation__text_second_part" : "animation__text_second_part animation__text_second_part_black"}>
              а хорошим проектам — инвестиции.
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
          <p className="text_paragraph_1">За 15 лет работы наши эксперты провели несколько тысяч сделок по купле-продаже бизнесов в России.</p>
          <div className="second_screen__yellow_mark"></div>
          <p className="text_paragraph_2">Оценили десятки тысяч компаний.</p>
          <p className="text_paragraph_3">Поэтому мы знаем, как выглядят надёжные бизнесы и успешные предприниматели</p>
        </div>
      </div>
    </div>
  )
}
