import React from "react"
import { DataProjects } from "../DataProjects"

export function ProjectCards({ setClickOnCard, handleValue, setSelectedProjectCard }) {
  const clickOnProjectCard = (key) => {
    setSelectedProjectCard(key)
    setClickOnCard(true)
  }

  return (
    <div>
      <div className="projects_filter__cadrs_block">
        {DataProjects.map((elem) =>
          handleValue <= elem.min ? (
            <div className={`project_filter__card ${elem.key}`} key={elem.key + "project_filter__card"} onClick={() => clickOnProjectCard(elem.key)}>
              <div className={`project_filter_card__grey ${elem.key}`}>
                <div className={`project_filter_card__grey_logo ${elem.key}`} style={{ backgroundImage: `url('${elem.grey_logo}')` }}></div>
                {elem.stop === false ? (
                  <div className={`project_filter_card__min_invest ${elem.key}`}>
                    <p className={`project_filter_card_min_invest__numbers ${elem.key}`}>{Number(elem.min).toLocaleString("ru-RU") + " ₽"}</p>
                    <p className={`project_filter_card_min_invest__description ${elem.key}`}>Мин. размер инвестиций</p>
                  </div>
                ) : (
                  <p className="projects_filter__cadrs_block_stop">
                    Привлечение средств<br></br> временно приостановлено
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className={`project_filter__card ${elem.key}`} key={elem.key + "project_filter__card2"} onClick={() => clickOnProjectCard(elem.key)}>
              <div className={`project_filter_card__color ${elem.key}`} style={{ backgroundImage: `url('${elem.background}')` }}>
                <div className={`project_filter_card__logo ${elem.key}`} style={{ backgroundImage: `url('${elem.logo}')` }}></div>
                <div className={`project_filter_card__income ${elem.key}`}>
                  <p className={`project_filter_card_income_percent_numbers ${elem.key}`}>
                    {handleValue < elem.mid
                      ? elem.income_min + "% годовых"
                      : handleValue >= elem.mid && handleValue < elem.max
                      ? elem.income_mid + "% годовых"
                      : handleValue >= elem.max && handleValue < elem.ultra
                      ? elem.income_max + "% годовых"
                      : elem.income_ultra + "% годовых"}
                  </p>
                  <div className={`project_filter_card__income_money ${elem.key}`}>
                    <p className={`project_filter_card_income_money_numbers ${elem.key}`}>
                      {handleValue < elem.mid
                        ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽ в год"
                        : handleValue >= elem.mid && handleValue < elem.max
                        ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽ в год"
                        : handleValue >= elem.max && handleValue < elem.ultra
                        ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽ в год"
                        : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽ в год"}
                    </p>
                  </div>
                  <div className="project_filter_card__arrow_to_down"></div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
