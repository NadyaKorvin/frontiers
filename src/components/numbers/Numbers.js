import React from "react"

export function Nambers() {
  return (
    <div className="numbers__content_block">
      <p className="numbers__title_first">Сколько вложили и заработали </p>
      <p className="numbers__title_second">наши клиенты в 2021 году:</p>
      <div className="numbers__flex_box">
        <div className="numbers__flex_box_1v">
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">50 млн ₽</p>
            <p className="numbers__small_description">прибыль инвесторов</p>
          </div>
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">360 млн ₽</p>
            <p className="numbers__small_description">Вложили инвесторы</p>
          </div>
        </div>
        <div className="numbers__flex_box_2v">
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">27%</p>
            <p className="numbers__small_description">ПРИБЫЛьность инвестиций</p>
          </div>
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">250</p>
            <p className="numbers__small_description">СДЕЛОК ЗАВЕРШЕНО</p>
          </div>
        </div>
        <div className="numbers__flex_box_3v">
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">81%</p>
            <p className="numbers__small_description">инвестируют повторно</p>
          </div>
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">1,44 млн ₽</p>
            <p className="numbers__small_description">СРЕДНИЙ ЧЕК ИНВЕСТОРА</p>
          </div>
        </div>
      </div>
    </div>
  )
}
