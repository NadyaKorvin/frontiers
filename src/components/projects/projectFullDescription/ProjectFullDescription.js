import React, { useState } from "react"
import { DataProjects } from "../DataProjects"

export function ProjectFullDescription({ width, selectedProjectCard, setClickOnCard, handleValue }) {
  const [showDescription, setShowDescription] = useState(false)
  const [useKey, setUseKey] = useState("")

  const findElementOnTap = (event, key) => {
    setUseKey(event.target.parentElement.parentElement.className)
    event.target.parentElement.parentElement.className === key ? setShowDescription(!showDescription) : setShowDescription(false)
  }

  return (
    <div>
      <p className="after_click__first_title">О проекте</p>
      <div className="after_click__project_block">
        {DataProjects.map((elem) =>
          elem.key === selectedProjectCard ? (
            <div className="after_click__information_about_project" key={elem.key + "after_click__information_about_project"}>
              <div className="after_click__closer" onClick={() => setClickOnCard(false)}></div>
              <p className="after_click__title">{elem.title}</p>
              <p className="after_click__description">{elem.description}</p>
              {elem.stop === false ? (
                <div>
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
                </div>
              ) : (
                <p className="after_click_stop_invest">Привлечение средств временно приостановлено</p>
              )}
              {elem.url.length > 1 ? (
                <a className="after_click__outside_link" href={elem.url} target="_blank" rel="noreferrer">
                  Перейти на сайт
                </a>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div key={elem.key + Math.random()}></div>
          )
        )}
      </div>
    </div>
  )
}
