import React, { useState } from "react"
import { DataProjects } from "../DataProjects"

export function ProjectCardsSmallMobail({ setClickOnCard, handleValue, setSelectedProjectCard }) {
  const [showDescription, setShowDescription] = useState(false)
  const [useKey, setUseKey] = useState("")
  const clickOnProjectCard = (key) => {
    setSelectedProjectCard(key)
    setClickOnCard(true)
  }

  const findElementOnTap = (event, key) => {
    setUseKey(event.target.parentElement.parentElement.className)
    event.target.parentElement.parentElement.className === key ? setShowDescription(!showDescription) : setShowDescription(false)
  }

  return (
    <div>
      <div className="projects_filter__cadrs_block">
        {DataProjects.map((elem) =>
          handleValue <= elem.min ? (
            <div className={`project_filter__card ${elem.key}`} key={elem.key + "project_filter__card"} onClick={() => clickOnProjectCard(elem.key)}>
              <div className={`project_filter_card__grey ${elem.key}`}>
                <div className="project_filter_card__visible">
                  <div className={`project_filter_card__grey_logo ${elem.key}`} style={{ backgroundImage: `url('${elem.grey_logo}')` }}></div>
                  <div className={`project_filter_card__min_invest ${elem.key}`}>
                    <p className={`project_filter_card_min_invest__numbers ${elem.key}`}>{Number(elem.min).toLocaleString("ru-RU") + " ₽"}</p>
                    <p className={`project_filter_card_min_invest__description ${elem.key}`}>Мин. размер инвестиций</p>
                  </div>
                  <div className="project_filter_card__arrow_to_down_grey"></div>
                </div>
                {/* <div className="after_click__project_block">
                  <div className="after_click__information_about_project">
                    <p className="after_click__description">{elem.description}</p>
                    <div className="after_click__handle_invest">
                      <p className="after_click__handle_invest__numbers">{Number(handleValue).toLocaleString("ru-RU") + " ₽"}</p>
                      <p className="after_click__handle_invest__description">Размер инвестиций</p>
                    </div>
                    <div className="after_click____income_money">
                      <p className="after_click____income_money__numbers">
                        {handleValue < elem.mid
                          ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽"
                          : handleValue >= elem.mid && handleValue < elem.max
                          ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽"
                          : handleValue >= elem.max && handleValue < elem.ultra
                          ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽"
                          : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽"}
                      </p>
                      <p className="after_click____income_money__description">Доходность в год</p>
                    </div>
                    <div className="after_click____income_percent">
                      <p className="after_click____income_percent__numbers">
                        {handleValue < elem.mid
                          ? elem.income_min + "% годовых"
                          : handleValue >= elem.mid && handleValue < elem.max
                          ? elem.income_mid + "% годовых"
                          : handleValue >= elem.max && handleValue < elem.ultra
                          ? elem.income_max + "% годовых"
                          : elem.income_ultra + "% годовых"}
                      </p>
                      <p className="after_click____income_percent__numbers_description">Доход</p>
                    </div>
                    <div className="after_click_protections">
                      <p className="after_click_protections__title">Обеспечение по проекту:</p>
                      {elem.inshure.map((element) =>
                        handleValue >= element.need_to_invest ? (
                          <div
                            key={element.key + "after_click_protections"}
                            className={element.key}
                            onClick={(event) => findElementOnTap(event, element.key)}
                          >
                            <div className="after_click_protections__list">
                              <p className="after_click_protections__provide">{element.provide}</p>
                              <div className="after_click_protections__question"></div>
                              <p
                                className="after_click_protections__provide_description"
                                style={{ display: useKey === element.key && showDescription ? "block" : "none" }}
                              >
                                {element.provide_descriptoin}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="after_click_protections__no_provide"
                            style={{ display: element.count < 1 ? "block" : "none" }}
                            key={element.key + Math.random()}
                          >
                            Для получения дополнительных гарантий увеличьте сумму инестиций
                          </div>
                        )
                      )}
                    </div>
                    <a className="after_click__outside_link" href={elem.url} target="_blank" rel="noreferrer">
                      Перейти на сайт
                    </a>
                  </div>
                </div> */}
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

              {/* <div className="after_click__project_block">
                <div className="after_click__information_about_project">
                  <p className="after_click__description">{elem.description}</p>
                  <div className="after_click__handle_invest">
                    <p className="after_click__handle_invest__numbers">{Number(handleValue).toLocaleString("ru-RU") + " ₽"}</p>
                    <p className="after_click__handle_invest__description">Размер инвестиций</p>
                  </div>
                  <div className="after_click____income_money">
                    <p className="after_click____income_money__numbers">
                      {handleValue < elem.mid
                        ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽"
                        : handleValue >= elem.mid && handleValue < elem.max
                        ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽"
                        : handleValue >= elem.max && handleValue < elem.ultra
                        ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽"
                        : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽"}
                    </p>
                    <p className="after_click____income_money__description">Доходность в год</p>
                  </div>
                  <div className="after_click____income_percent">
                    <p className="after_click____income_percent__numbers">
                      {handleValue < elem.mid
                        ? elem.income_min + "% годовых"
                        : handleValue >= elem.mid && handleValue < elem.max
                        ? elem.income_mid + "% годовых"
                        : handleValue >= elem.max && handleValue < elem.ultra
                        ? elem.income_max + "% годовых"
                        : elem.income_ultra + "% годовых"}
                    </p>
                    <p className="after_click____income_percent__numbers_description">Доход</p>
                  </div>
                  <div className="after_click_protections">
                    <p className="after_click_protections__title">Обеспечение по проекту:</p>
                    {elem.inshure.map((element) =>
                      handleValue >= element.need_to_invest ? (
                        <div
                          key={element.key + "after_click_protections"}
                          className={element.key}
                          onClick={(event) => findElementOnTap(event, element.key)}
                        >
                          <div className="after_click_protections__list">
                            <p className="after_click_protections__provide">{element.provide}</p>
                            <div className="after_click_protections__question"></div>
                            <p
                              className="after_click_protections__provide_description"
                              style={{ display: useKey === element.key && showDescription ? "block" : "none" }}
                            >
                              {element.provide_descriptoin}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="after_click_protections__no_provide"
                          style={{ display: element.count < 1 ? "block" : "none" }}
                          key={element.key + Math.random()}
                        >
                          Для получения дополнительных гарантий увеличьте сумму инестиций
                        </div>
                      )
                    )}
                  </div>
                  <a className="after_click__outside_link" href={elem.url} target="_blank" rel="noreferrer">
                    Перейти на сайт
                  </a>
                </div>
              </div> */}
            </div>
          )
        )}
      </div>
    </div>
  )
}
