import React, { useState } from "react"
import { DataNumbers } from "./DataNumbers"

export function Nambers() {
  const [currentSlider, setCurrenrSlider] = useState(0)

  const goForward = () => {
    let tmp = currentSlider
    if (tmp === DataNumbers.length) return
    tmp++
    setCurrenrSlider(tmp)
  }

  const goBack = () => {
    let tmp = currentSlider
    if (tmp === 0) return
    tmp--
    setCurrenrSlider(tmp)
  }

  return (
    <div className="numbers__content_block">
      <div className="numbers__title_flex">
        <p className="numbers__title">Сколько</p>
        <p className="numbers__title numbers__title_give">вложили</p>
        <p className="numbers__title numbers__title_and">и</p>
        <p className="numbers__title numbers__title_take">заработали</p>
        <p className="numbers__title numbers__title_our">наши</p>
        <p className="numbers__title numbers__title_clients">клиенты</p>
        <p className="numbers__title">в</p>
        <div className="numbers__navigation_goback_arrow" onClick={() => goForward()}></div>
        <div className="numbers__title">{DataNumbers[currentSlider].key}</div>
        <div className="numbers__navigation_goforward_arrow" onClick={() => goBack()}></div>
        <p className="numbers__title">году:</p>
      </div>
      <div className="numbers__flex_box">
        <div className="numbers__flex_box_1v">
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">{DataNumbers[currentSlider].investors_profit}</p>
            <p className="numbers__small_description">прибыль инвесторов</p>
          </div>
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">{DataNumbers[currentSlider].invested_by_investors}</p>
            <p className="numbers__small_description">Вложили инвесторы</p>
          </div>
        </div>
        <div className="numbers__flex_box_2v">
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">{DataNumbers[currentSlider].profit}</p>
            <p className="numbers__small_description">прибыльность инвестиций</p>
          </div>
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">{DataNumbers[currentSlider].transactions}</p>
            <p className="numbers__small_description">СДЕЛОК ЗАВЕРШЕНО</p>
          </div>
        </div>
        <div className="numbers__flex_box_3v">
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">{DataNumbers[currentSlider].re_invest}</p>
            <p className="numbers__small_description">инвестируют повторно</p>
          </div>
          <div className="numbers__flex_block">
            <p className="numbers__big_numbers">{DataNumbers[currentSlider].investor_check}</p>
            <p className="numbers__small_description">СРЕДНИЙ ЧЕК ИНВЕСТОРА</p>
          </div>
        </div>
      </div>
    </div>
  )
}
