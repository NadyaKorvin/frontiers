import React, { useState } from "react"
import { DataProvide } from "../provide/DataProvide"

export function ProvideSmallMobail({ errorHandleRange }) {
  const [showDescription, setShowDescription] = useState(false)
  const [useKey, setUseKey] = useState("")
  const [openDescription, setOpenDescription] = useState(false)
  const [openProvide, setOpenProvide] = useState(false)

  const findElementOnTap = (event, key) => {
    setUseKey(event.target.parentElement.parentElement.className)
    event.target.parentElement.parentElement.className === key ? setShowDescription(!showDescription) : setShowDescription(false)
  }

  return (
    <div>
      <div
        className={
          openDescription || errorHandleRange ? "provide_small_mobail__block provide_small_mobail__block_open" : "provide_small_mobail__block"
        }
      >
        <div className="provide_small_mobail__block_visible" onClick={() => setOpenDescription(!openDescription)}>
          <p className="provide_small_mobail__block_title">Как пользоваться?</p>
          <div
            className={
              openDescription ? "provide_small_mobile__arrow_to_down provide_small_mobile__arrow_to_up" : "provide_small_mobile__arrow_to_down"
            }
          ></div>
        </div>
        <div className="provide_small_mobail__instruction__text">
          <p>Двигайте ползунок или напишите сумму — калькулятор покажет, сколько можно заработать на разных проектах.</p>
          <p>Нажимайте на карточки с логотипами, чтобы увидеть подробности о каждом из проектов.</p>
          <p>Листайте страницы с проектами — стрелки находятся под карточками с логотипами.</p>
          <p className={errorHandleRange ? "provide_small_mobail__instuction_with_handle_range_error" : ""}>
            Калькулятор считает доходность инвестиций до 10 млн ₽. Хотите узнать доходность большей суммы — оставьте заявку.
          </p>
        </div>
      </div>
      <div className={openProvide ? "provide_small_mobail__block provide_small_mobail__block_open" : "provide_small_mobail__block"}>
        <div className="provide_small_mobail__block_visible" onClick={() => setOpenProvide(!openProvide)}>
          <p className="provide_small_mobail__block_title">Виды обеспечения</p>
          <div
            className={openProvide ? "provide_small_mobile__arrow_to_down provide_small_mobile__arrow_to_up" : "provide_small_mobile__arrow_to_down"}
          ></div>
        </div>
        <div className="provide_small_mobail__provide">
          {DataProvide.map((elem) => (
            <div key={elem.key + "provide"} className={elem.key} onClick={(event) => findElementOnTap(event, elem.key)}>
              <div className="provide_small_mobail__line_text">
                <p className="provide_small_mobail__text">{elem.title}</p>
                <div className="provide_small_mobail__quastion"></div>
              </div>
              <p className="provide_small_mobail__description" style={{ display: useKey === elem.key && showDescription ? "block" : "none" }}>
                {elem.descriptoin}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
