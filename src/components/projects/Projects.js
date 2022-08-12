import React from "react"
import { useState } from "react"
import { DataProjects } from "./DataProjects"

export function Projects() {
  const [handleValue, setHandleValue] = useState(0)
  const [handleValueLabel, setHandleValueLabel] = useState("100 тыс. ₽")

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
          <input className="range_slider" type="range" min="100000" max="10000000" step="100000" value={handleValue} onChange={handleChangeValue} />
          <div className="range_slider__img"></div>

          <div
            className="range_slider__label"
            style={{ left: `${handleValue < 400000 ? 0 : handleValue > 9800000 ? 94 : (handleValue * 100) / 10000000 - 4}%` }}
          >
            {handleValueLabel}
          </div>
        </div>
        <div className="information_about_projects">
          <p className="information_about_projects__title">Информация по проекту</p>
          <p className="projects__instuction">Передвигайте ползунок, для того чтобы узнать более детальную информацию по проекту</p>
          <div className="information_about_project__cards_with_protections"></div>
        </div>
        <div className="projects_filter__cadrs_block">
          {DataProjects.map((elem) =>
            handleValue <= elem.min ? (
              <div className="project_filter__card" key={elem.key}>
                <div className="project_filter_card__grey">
                  <div className="project_filter_card__grey_logo" style={{ backgroundImage: `url('${elem.grey_logo}')` }}></div>
                  <div className="project_filter_card__min_invest">
                    <p className="project_filter_card_min_invest__numbers">{Number(elem.min).toLocaleString("ru-RU") + " ₽"}</p>
                    <p className="project_filter_card_min_invest__description">Мин. размер инвестиций</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="project_filter__card" key={elem.key}>
                <div className="project_filter_card__color" style={{ backgroundImage: `url('${elem.background}')` }}>
                  <div className="project_filter_card__logo" style={{ backgroundImage: `url('${elem.logo}')` }}></div>
                  <div className="project_filter_card__income_money">
                    <p className="project_filter_card_income_money_numbers">
                      {handleValue < elem.mid
                        ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽"
                        : handleValue >= elem.mid && handleValue < elem.max
                        ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽"
                        : handleValue >= elem.max && handleValue < elem.ultra
                        ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽"
                        : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽"}
                    </p>
                    <p className="project_filter_card_income_money_description">Доходность в год</p>
                  </div>
                  <div className="project_filter_card__income_percent">
                    <p className="project_filter_card_income_percent_numbers">
                      {handleValue < elem.mid
                        ? elem.income_min + "% годовых"
                        : handleValue >= elem.mid && handleValue < elem.max
                        ? elem.income_mid + "% годовых"
                        : handleValue >= elem.max && handleValue < elem.ultra
                        ? elem.income_max + "% годовых"
                        : elem.income_ultra + "% годовых"}
                    </p>
                    <p className="project_filter_card_income_percent_description">Доход</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
