import React, { useState } from "react"
import { DataProjects } from "../DataProjects"

export function ProjectCardsSmallMobail({ handleValue }) {
  const [showDescription, setShowDescription] = useState(false)
  const [useKey, setUseKey] = useState("")
  const [useProjectKey, setUseProjectKey] = useState("")
  const [openFullProjectDescription, setOpenFullProjectDescription] = useState(false)

  const findElementOnTap = (event, key) => {
    setUseKey(event.target.parentElement.parentElement.className)
    event.target.parentElement.parentElement.className === key ? setShowDescription(!showDescription) : setShowDescription(false)
  }

  const findProjectOnTap = (event, key) => {
    event.target.parentElement.parentElement.parentElement.parentElement.className === key
      ? setUseProjectKey(event.target.parentElement.parentElement.parentElement.parentElement.className)
      : event.target.parentElement.parentElement.parentElement.className === key
      ? setUseProjectKey(event.target.parentElement.parentElement.parentElement.className)
      : event.target.parentElement.parentElement.className === key
      ? setUseProjectKey(event.target.parentElement.parentElement.className)
      : setUseProjectKey("")

    event.target.parentElement.parentElement.parentElement.parentElement.className === key ||
    event.target.parentElement.parentElement.parentElement.className === key ||
    event.target.parentElement.parentElement.className === key
      ? setOpenFullProjectDescription(!openFullProjectDescription)
      : setOpenFullProjectDescription(false)
  }

  return (
    <div>
      <div className="small_mobail__project_cards__block">
        {DataProjects.map((elem) =>
          handleValue <= elem.min ? (
            // Инвестиции ниже минимльных? РИСУЕМ СЕРУЮ КАРТОЧКУ
            //1. Общий блок
            <div className="small_mobail_project__card" key={elem.key + "small_mobail_project__card"}>
              {/* 2.  Изменяемый Див с видимой и невидимой частью карточки */}
              <div
                className={
                  openFullProjectDescription && useProjectKey === elem.key
                    ? "small_mobail_project_card__grey small_mobail_project_card__grey__open"
                    : "small_mobail_project_card__grey"
                }
              >
                {/* 3. Всегда видимая часть */}
                <div className={elem.key} onClick={(event) => findProjectOnTap(event, elem.key)}>
                  <div className="small_mobail_project_card_grey__visible">
                    <div className="small_mobail_project_card__grey_logo" style={{ backgroundImage: `url('${elem.grey_logo}')` }}></div>
                    {/* инфа, если проект на стопе */}
                    {elem.stop === false ? (
                      <div className="small_mobail_project_card__min_invest">
                        <p className="small_mobail_project_card_min_invest__numbers">{Number(elem.min).toLocaleString("ru-RU") + " ₽"}</p>
                        <p className="small_mobail_project_card_min_invest__description">Мин. размер инвестиций</p>
                      </div>
                    ) : (
                      <p className="small_mobail_project_card__cadrs_block_stop">
                        Привлечение средств<br></br> временно приостановлено
                      </p>
                    )}
                    <div
                      className={
                        openFullProjectDescription && useProjectKey === elem.key
                          ? "small_mobail_project_card__arrow_to_down_grey small_mobail_project_card__arrow_to_up_grey"
                          : "small_mobail_project_card__arrow_to_down_grey"
                      }
                    ></div>
                  </div>
                </div>
                {/* 4. Раскрывающийся блок */}
                <div className="small_mobail_after_click__project_block">
                  <div className="small_mobail_after_click__information_about_project">
                    <p className="small_mobail_after_click__description">{elem.description}</p>
                    {/* скрыть, если проект на стопе */}
                    {elem.stop === false ? (
                      <div>
                        <div className="small_mobail_after_click__handle_invest">
                        <p className="small_mobail_after_click__handle_invest__numbers">{Number(handleValue).toLocaleString("ru-RU") + " ₽"}</p>
                        <p className="small_mobail_after_click__handle_invest__description">Размер инвестиций</p>
                      </div>
                    <div className="small_mobail_after_click____income_money">
                      <p className="small_mobail_after_click____income_money__numbers">
                        {handleValue < elem.mid
                          ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽"
                          : handleValue >= elem.mid && handleValue < elem.max
                          ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽"
                          : handleValue >= elem.max && handleValue < elem.ultra
                          ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽"
                          : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽"}
                      </p>
                      <p className="small_mobail_after_click____income_money__description">Доходность в год</p>
                    </div>
                    <div className="small_mobail_after_click____income_percent">
                      <p className="small_mobail_after_click____income_percent__numbers">
                        {handleValue < elem.mid
                          ? elem.income_min + "% годовых"
                          : handleValue >= elem.mid && handleValue < elem.max
                          ? elem.income_mid + "% годовых"
                          : handleValue >= elem.max && handleValue < elem.ultra
                          ? elem.income_max + "% годовых"
                          : elem.income_ultra + "% годовых"}
                      </p>
                      <p className="small_mobail_after_click____income_percent__numbers_description">Доход</p>
                    </div>
                    <div className="small_mobail_after_click_protections">
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
                      </div>
                    ) : (
                      <div></div>
                    )}
                    
                    <a className="small_mobail_after_click__outside_link" href={elem.url} target="_blank" rel="noreferrer">
                      Перейти на сайт
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // 5. Инвестиции больше минимального? РИСУЕМ ЦВЕТНУЮ карточку
            <div className="small_mobail_project__card" key={elem.key + "small_mobail_project__card2"}>
              {/* 2.  Див с видимой и невидимой частью карточки */}
              <div
                className={
                  openFullProjectDescription && useProjectKey === elem.key
                    ? "small_mobail_project_card__color small_mobail_project_card__color__open"
                    : "small_mobail_project_card__color"
                }
              >
                {/* 3. Всегда видимая часть */}
                <div className={elem.key} onClick={(event) => findProjectOnTap(event, elem.key)}>
                  <div
                    className="small_mobail_project_card__color_visible"
                    style={{ backgroundImage: `url('${elem.background}')` }}
                    onClick={() => setOpenFullProjectDescription(!openFullProjectDescription)}
                  >
                    <div className="small_mobail_project_card__logo" style={{ backgroundImage: `url('${elem.logo}')` }}></div>
                    <div className="small_mobail_project_card__income">
                      <p className="small_mobail_project_card_income_percent_numbers">
                        {handleValue < elem.mid
                          ? elem.income_min + "% годовых"
                          : handleValue >= elem.mid && handleValue < elem.max
                          ? elem.income_mid + "% годовых"
                          : handleValue >= elem.max && handleValue < elem.ultra
                          ? elem.income_max + "% годовых"
                          : elem.income_ultra + "% годовых"}
                      </p>
                      <div className="small_mobail_project_card__income_money">
                        <p className="small_mobail_project_card_income_money_numbers">
                          {handleValue < elem.mid
                            ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽ в год"
                            : handleValue >= elem.mid && handleValue < elem.max
                            ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽ в год"
                            : handleValue >= elem.max && handleValue < elem.ultra
                            ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽ в год"
                            : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽ в год"}
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        openFullProjectDescription && useProjectKey === elem.key
                          ? "small_mobail_project_card__arrow_to_down small_mobail_project_card__arrow_to_up"
                          : "small_mobail_project_card__arrow_to_down"
                      }
                    ></div>
                  </div>
                </div>
                {/* 4. Раскрывающийся блок */}
                <div className="small_mobail_after_click__project_block">
                  <div className="small_mobail_after_click__information_about_project">
                    <p className="small_mobail_after_click__description">{elem.description}</p>
                    <div className="small_mobail_after_click__handle_invest">
                      <p className="small_mobail_after_click__handle_invest__numbers">{Number(handleValue).toLocaleString("ru-RU") + " ₽"}</p>
                      <p className="small_mobail_after_click__handle_invest__description">Размер инвестиций</p>
                    </div>
                    <div className="small_mobail_after_click____income_money">
                      <p className="small_mobail_after_click____income_money__numbers">
                        {handleValue < elem.mid
                          ? Number((handleValue * elem.income_min) / 100).toLocaleString("ru-RU") + " ₽"
                          : handleValue >= elem.mid && handleValue < elem.max
                          ? Number((handleValue * elem.income_mid) / 100).toLocaleString("ru-RU") + " ₽"
                          : handleValue >= elem.max && handleValue < elem.ultra
                          ? Number((handleValue * elem.income_max) / 100).toLocaleString("ru-RU") + " ₽"
                          : Number((handleValue * elem.income_ultra) / 100).toLocaleString("ru-RU") + " ₽"}
                      </p>
                      <p className="small_mobail_after_click____income_money__description">Доходность в год</p>
                    </div>
                    <div className="small_mobail_after_click____income_percent">
                      <p className="small_mobail_after_click____income_percent__numbers">
                        {handleValue < elem.mid
                          ? elem.income_min + "% годовых"
                          : handleValue >= elem.mid && handleValue < elem.max
                          ? elem.income_mid + "% годовых"
                          : handleValue >= elem.max && handleValue < elem.ultra
                          ? elem.income_max + "% годовых"
                          : elem.income_ultra + "% годовых"}
                      </p>
                      <p className="small_mobail_after_click____income_percent__numbers_description">Доход</p>
                    </div>
                    <div className="small_mobail_after_click_protections">
                      <p className="small_mobail_after_click_protections__title">Обеспечение по проекту:</p>
                      {elem.inshure.map((element) =>
                        handleValue >= element.need_to_invest ? (
                          <div
                            key={element.key + "small_mobail_after_click_protections"}
                            className={element.key}
                            onClick={(event) => findElementOnTap(event, element.key)}
                          >
                            <div className="small_mobail_after_click_protections__list">
                              <p className="small_mobail_after_click_protections__provide">{element.provide}</p>
                              <div className="small_mobail_after_click_protections__question"></div>
                              <p
                                className="small_mobail_after_click_protections__provide_description"
                                style={{ display: useKey === element.key && showDescription ? "block" : "none" }}
                              >
                                {element.provide_descriptoin}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="small_mobail_after_click_protections__no_provide"
                            style={{ display: element.count < 1 ? "block" : "none" }}
                            key={element.key + Math.random()}
                          >
                            Для получения дополнительных гарантий увеличьте сумму инестиций
                          </div>
                        )
                      )}
                    </div>
                    <a className="small_mobail_after_click__outside_link" href={elem.url} target="_blank" rel="noreferrer">
                      Перейти на сайт
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
