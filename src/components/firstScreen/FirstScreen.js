import React from "react"

export default function firstScreen() {
  return (
    <section className="firstscreen">
      <div className="firstscreen__content">
        <div className="firstscreen__content_left_text">
          <p>ИНВЕСТИЦИИ</p>
          <div>
            <p className="firstscreen__content_left_text_hard">СЛОЖНО</p>
          </div>
        </div>
        <div className="firstscreen__content_rihgt_text">
          <div className="firstscreen__content_rihgt_text_up">
            <p>
              Frontiers — инвестиционное агентство, работаем c 2019 года. Только в 2021 году мы помогли частным инвесторам заработать 50 млн рублей на
              вложениях в российский бизнес.
            </p>
          </div>
          <div>
            <p className="firstscreen__content_rihgt_text_down">НЕ</p>
          </div>
        </div>
      </div>
      <div className="firstscreen__content_bottom_content">
        <div className="firstscreen__content_bottom_content_left">
          <p className="firstscreen__content_bottom_content_left_scrolldown">ПРОКРУТИ ВНИЗ</p>
        </div>
        <div className="firstscreen__text_description">
          <p>
            Frontiers — инвестиционное агентство, работаем c 2019 года. Только в 2021 году мы помогли частным инвесторам заработать 50 млн рублей на
            вложениях в российский бизнес.
          </p>
        </div>
        <div className="firstscreen__content_bottom_content_right"></div>
      </div>
    </section>
  )
}
