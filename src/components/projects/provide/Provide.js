import React, { useState } from "react"
import { DataProvide } from "./DataProvide"

export function Provide({ errorHandleRange }) {
  const [showDescription, setShowDescription] = useState(false)
  const [useKey, setUseKey] = useState("")

  const findElementOnTap = (event, key) => {
    setUseKey(event.target.parentElement.parentElement.className)
    event.target.parentElement.parentElement.className === key ? setShowDescription(!showDescription) : setShowDescription(false)
  }

  return (
    <div>
      <div className="instuction">
        <p className="instruction__title">Калькулятор доходности</p>
        <div className="instruction__text">
          <p>Двигайте ползунок или напишите сумму — калькулятор покажет, сколько можно заработать на разных проектах.</p>
          <p>Нажимайте на карточки с логотипами, чтобы увидеть подробности о каждом из проектов.</p>
          <p>Листайте страницы с проектами — стрелки находятся под карточками с логотипами.</p>
          <p className={errorHandleRange ? "instuction_with_handle_range_error" : ""}>
            Калькулятор считает доходность инвестиций до 10 млн ₽. Хотите узнать доходность большей суммы — оставьте заявку.
          </p>
        </div>
      </div>

      <div className="poride__block">
        <p className="provide__title">виды обеспечения</p>
        {DataProvide.map((elem) => (
          <div
            key={elem.key + "provide"}
            className={elem.key}
            onClick={(event) => findElementOnTap(event, elem.key)}
          >
            <div className="provide__line_text">
              <p className="provide__text">{elem.title}</p>
              <div className="provide__quastion"></div>
            </div>

            <p className="provide__description" style={{ display: useKey === elem.key && showDescription ? "block" : "none" }}>
              {elem.descriptoin}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
