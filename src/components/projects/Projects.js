import React, { useState } from "react"
import { DataProjects } from "./DataProjects"

export function Projects({ width }) {
  const [handleValue, setHandleValue] = useState(0)
  const [handleValueLabel, setHandleValueLabel] = useState("100 тыс. ₽")
  const [selectedProjectCard, setSelectedProjectCard] = useState("")
  const [clickOnCard, setClickOnCard] = useState(false)
  const [onTapToQuastion, setOnTapToQuastion] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [useKey, setUseKey] = useState("")

  const handleChangeValue = (event) => {
    setHandleValue(event.target.value)
    setHandleValueLabel(Number(event.target.value).toLocaleString("ru-RU", { style: "currency", currency: "RUB", notation: "compact" }))
  }

  const clickOnProjectCard = (key) => {
    setSelectedProjectCard(key)
    setClickOnCard(true)
  }

  const clickOnProtectionCard = (key) => {
    setSelectedProjectCard(key)
    width > 1024 ? setClickOnCard(true) : setClickOnCard(false)
  }

  const findElementOnTap = (event, key) => {
    setUseKey(event.target.parentElement.parentElement.className)
    event.target.parentElement.parentElement.className === key ? setShowDescription(!showDescription) : setShowDescription(false)
  }

  return (
    <div className="projects">
      <h2 className="projects__title">Проекты</h2>
      <div className="projects__filter">
        <div className="range_slider__container">
          <p className="range_slider__title">Сумма инвестиций</p>
          <input className="range_slider" type="range" min="100000" max="10000000" step="100000" value={handleValue} onChange={handleChangeValue} />
          {width > 768 ? (
            <div
              className="range_slider__label"
              style={{ left: `${handleValue < 400000 ? 0 : handleValue > 9800000 ? 94 : (handleValue * 100) / 10000000 - 4}%` }}
            >
              {handleValueLabel}
            </div>
          ) : width > 375 ? (
            <div
              className="range_slider__label"
              style={{ left: `${handleValue < 400000 ? 0 : handleValue > 9500000 ? 92 : (handleValue * 100) / 10000000 - 4}%` }}
            >
              {handleValueLabel}
            </div>
          ) : (
            <div
              className="range_slider__label"
              style={{ left: `${handleValue < 400000 ? 0 : handleValue > 8500000 ? 82 : (handleValue * 100) / 10000000 - 4}%` }}
            >
              {handleValueLabel}
            </div>
          )}
        </div>
        {width > 1024 || width <= 375 ? (
          <div className="information_about_projects">
            <p className="information_about_projects__title">Информация по проекту</p>
            <p className="projects__instuction">Передвигайте ползунок, для того чтобы узнать более детальную информацию по проекту</p>
          </div>
        ) : (
          <div></div>
        )}
        <div className="projects_filter__cadrs_block">
          {DataProjects.map((elem) =>
            handleValue <= elem.min ? (
              <div
                className={`project_filter__card ${elem.key}`}
                key={elem.key + "project_filter__card"}
                onClick={() => clickOnProjectCard(elem.key)}
              >
                <div className={`project_filter_card__grey ${elem.key}`}>
                  <div className={`project_filter_card__grey_logo ${elem.key}`} style={{ backgroundImage: `url('${elem.grey_logo}')` }}></div>
                  <div className={`project_filter_card__min_invest ${elem.key}`}>
                    <p className={`project_filter_card_min_invest__numbers ${elem.key}`}>{Number(elem.min).toLocaleString("ru-RU") + " ₽"}</p>
                    <p className={`project_filter_card_min_invest__description ${elem.key}`}>Мин. размер инвестиций</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`project_filter__card ${elem.key}`}
                key={elem.key + "project_filter__card2"}
                onClick={() => clickOnProjectCard(elem.key)}
              >
                <div className={`project_filter_card__color ${elem.key}`} style={{ backgroundImage: `url('${elem.background}')` }}>
                  <div className={`project_filter_card__logo ${elem.key}`} style={{ backgroundImage: `url('${elem.logo}')` }}></div>
                  <div className={`project_filter_card__income_money ${elem.key}`}>
                    <p className={`project_filter_card_income_money_numbers ${elem.key}`}>
                      {handleValue < elem.mid
                        ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽"
                        : handleValue >= elem.mid && handleValue < elem.max
                        ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽"
                        : handleValue >= elem.max && handleValue < elem.ultra
                        ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽"
                        : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽"}
                    </p>
                    <p className={`project_filter_card_income_money_description ${elem.key}`}>Доходность в год</p>
                  </div>
                  <div className={`project_filter_card__income_percent ${elem.key}`}>
                    <p className={`project_filter_card_income_percent_numbers ${elem.key}`}>
                      {handleValue < elem.mid
                        ? elem.income_min + "% годовых"
                        : handleValue >= elem.mid && handleValue < elem.max
                        ? elem.income_mid + "% годовых"
                        : handleValue >= elem.max && handleValue < elem.ultra
                        ? elem.income_max + "% годовых"
                        : elem.income_ultra + "% годовых"}
                    </p>
                    <p className={`project_filter_card_income_percent_description ${elem.key}`}>Доход</p>
                  </div>
                  <div className="only_for_375"></div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="information_about_project__cards_with_protections">
          {width <= 1024 && width > 375 ? (
            <div className="information_about_projects">
              <p className="information_about_projects__title">Информация по проекту</p>
              <p className="projects__instuction">Передвигайте ползунок, для того чтобы узнать более детальную информацию по проекту</p>
            </div>
          ) : (
            <div></div>
          )}
          {!clickOnCard
            ? DataProjects.map((elem) => (
                <div className="card__with_protections" key={elem.key + "card__with_protections"} onClick={() => clickOnProtectionCard(elem.key)}>
                  {elem.inshure.map((element) =>
                    handleValue >= element.need_to_invest ? (
                      <div
                        key={element.key + "need_to_invest"}
                        className={element.key}
                        onTouchEndCapture={(event) => findElementOnTap(event, element.key)}
                      >
                        <p className="card_with_protections__title">{element.title}</p>
                        <div className="card_with_protections__list">
                          <p className="card_with_protections__provide">{element.provide}</p>
                          <div className="card_with_protections__quastion"></div>
                          {width <= 1024 ? (
                            <p
                              className="card_with_protections__provide_description"
                              style={{ display: useKey === element.key && showDescription ? "block" : "none" }}
                            >
                              {element.provide_descriptoin}
                            </p>
                          ) : (
                            <p className="card_with_protections__provide_description">{element.provide_descriptoin}</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div key={element.key + Math.random()}></div>
                    )
                  )}
                </div>
              ))
            : DataProjects.map((elem) =>
                elem.key === selectedProjectCard ? (
                  <div className="after_click__information_about_project" key={elem.key + "after_click__information_about_project"}>
                    <div className="after_click__closer" onClick={() => setClickOnCard(false)}></div>
                    <p className="after_click__title">{elem.title}</p>
                    <p className="after_click__description">{elem.description}</p>
                    <div className="after_click__handle_invest" onTouchEndCapture={() => setOnTapToQuastion(!onTapToQuastion)}>
                      <p className="after_click__handle_invest__numbers">{Number(handleValue).toLocaleString("ru-RU") + " ₽"}</p>
                      <div className="after_click_handle_invest__string">
                        <p className="after_click__handle_invest__description">Размер инвестиций</p>
                        <div className="after_click_handle_invest__question"></div>
                        {width <= 1024 ? (
                          <div className="after_click_handle_invest_description" style={{ display: onTapToQuastion ? "block" : "none" }}>
                            Для расчета дохода при инвестициях свыше 10 млн. ₽ оставьте заявку на консультацию или позвоните нам
                          </div>
                        ) : (
                          <div className="after_click_handle_invest_description">
                            Для расчета дохода при инвестициях свыше 10 млн. ₽ оставьте заявку на консультацию или позвоните нам
                          </div>
                        )}
                      </div>
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
                            onTouchEndCapture={(event) => findElementOnTap(event, element.key)}
                          >
                            <div className="after_click_protections__list">
                              <p className="after_click_protections__provide">{element.provide}</p>
                              <div className="after_click_protections__question"></div>
                              {width <= 1024 ? (
                                <p
                                  className="after_click_protections__provide_description"
                                  style={{ display: useKey === element.key && showDescription ? "block" : "none" }}
                                >
                                  {element.provide_descriptoin}
                                </p>
                              ) : (
                                <p className="after_click_protections__provide_description">{element.provide_descriptoin}</p>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="after_click_protections__provide" key={element.key + Math.random()}>
                            Для получения дополнительных гарантий увеличьте сумму инестиций
                          </div>
                        )
                      )}
                    </div>
                    <a className="after_click__outside_link" href={elem.url} target="_blank" rel="noreferrer">
                      Перейти на сайт
                    </a>
                  </div>
                ) : (
                  <div key={elem.key + Math.random()}></div>
                )
              )}
        </div>
      </div>
    </div>
  )
}
