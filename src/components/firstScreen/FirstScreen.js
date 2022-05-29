import React from "react"

export default function firstScreen({ goToLink }) {
  return (
    <>
      <section className="firstscreen">
        <header className="firstscreen__header">
          <div className="firstscreen__logotype">FRONTIERS</div>
          <div className="firstscreen__menu">
            <div className="firstscreen__nav">
              <nav className="firstscreen__nav_team">
                <a className="nav_links" onClick={() => goToLink(2)}>
                  О нас
                </a>
                <a className="nav_links" onClick={() => goToLink(4)}>
                  Команда
                </a>
                <a className="nav_links" onClick={() => goToLink(3)}>
                  Цифры
                </a>
              </nav>
            </div>
            <button className="firstscreen__button" onClick={() => goToLink(5)}>
              Получить консультацию
            </button>
          </div>
        </header>
        <div className="firstscreen__content">
          <div className="firstscreen__content_left_text">
            <p>ИНВЕСТИЦИИ</p>
            <div>
              <p className="firstscreen__content_left_text_hard">СЛОЖНО</p>
              <div className="firstscreen__content_vector_complex"></div>
            </div>
          </div>
          <div className="firstscreen__content_rihgt_text">
            <div className="firstscreen__content_rihgt_text_up">
              <p>Мы помогли заработать более 50 млн рублей частным инвесторам в 2021 году на вложениях в российский бизнес</p>
            </div>
            <p className="firstscreen__content_rihgt_text_down">НЕ</p>
            <div className="firstscreen__content_vector_not" />
          </div>
        </div>
        <div className="firstscreen__content_bottom_content">
          <div className="firstscreen__content_bottom_content_left">
            <p className="firstscreen__content_bottom_content_left_scrolldown">ПРОКРУТИ ВНИЗ</p>
          </div>
          <div className="firstscreen__content_bottom_content_right"></div>
        </div>
      </section>
    </>
  )
}
