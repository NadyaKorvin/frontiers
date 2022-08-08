import React from "react"
import { useState } from "react"

export function Projects() {
  const [handleValue, setHandleValue] = useState(0)

  const [handleValueLabel, setHandleValueLabel] = useState("200 тыс. ₽")

  const handleChangeValue = (event) => {
    setHandleValue(event.target.value)
    setHandleValueLabel(Number(event.target.value).toLocaleString("ru-RU", { style: "currency", currency: "RUB", notation: "compact" }))
  }

  return (
    <div className="projects">
      <h2 className="projects__title">Проекты</h2>
      <div className="projects__filter">
        <div className="range_slider__container">
          <p className="range_slider__title">Сумма инвестиций</p>
          <input className="range_slider" type="range" min="200000" max="10000000" step="200000" value={handleValue} onChange={handleChangeValue} />
          <div className="range_slider__img"></div>

          <div
            className="range_slider__label"
            style={{ left: `${handleValue < 300000 ? 0 : handleValue > 9800000 ? 94 : (handleValue * 100) / 10000000 - 4}%` }}
          >
            {handleValueLabel}
          </div>
        </div>
        <div className="information_about_projects">
          <p className="information_about_projects__title">Информация по проекту</p>
          <p className="projects__instuction">Передвигайте ползунок слева, для того чтобы узнать более детальную информацию по проекту</p>
          <div className="information_about_project__cards_with_protections"></div>
        </div>
        <div className="projects_filter__cadrs_block">
          <div className="projects_filter__card"></div>
          <div className="projects_filter__card"></div>
          <div className="projects_filter__card"></div>
        </div>
      </div>
    </div>
  )
}
