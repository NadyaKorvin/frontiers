import React from "react"
import { useState } from "react"
import { dataPersones } from "./dataPersones"
import { TeamPopup } from "./TeamPopup"

export function Team({ width }) {
  const [refreshData, setRefreshData] = useState(dataPersones)
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const removePerson = (elem) => {
    let filter = refreshData.filter((person) => person.key !== elem.key)
    setRefreshData([elem, ...filter])
  }
  const togglePopup = () => setIsOpenPopup(!isOpenPopup)

  return (
    <div className="team__block">
      <p className="team__block_title">команда Frontiers</p>
      <div className="team__block_main">
        <div className="team__block_description">
          <p>
            Для нас <span className="team__yellow_line">это не просто работа</span>, но и вклад в развитие здорового предпринимательства в России. Нам
            приятно видеть, как бизнес и инвесторы начинают больше доверять друг другу.
          </p>
        </div>
        {width > 1024 ? (
          <div className="persones">
            <div className="big_persona" style={{ backgroundImage: `url('${refreshData[0].url}')` }}>
              <div className="persones_description">
                <p className="persones__title">{refreshData[0].title}</p>
                <hr className="persones__hr"></hr>
                <p className="persones__name">{refreshData[0].name}</p>
                <p className="persones__text">{refreshData[0].text}</p>
                <button className="persones__read_more persones__text" onClick={togglePopup}>
                  читать подробнее
                </button>
                {isOpenPopup && <TeamPopup useData={refreshData} />}
              </div>
            </div>
            {refreshData.slice(1).map((elem) => (
              <div
                className={elem.className}
                key={elem.key}
                style={{ backgroundImage: `url('${elem.url}')` }}
                onClick={() => removePerson(elem)}
              ></div>
            ))}
          </div>
        ) : (
          <TeamPopup useData={refreshData} />
        )}
      </div>
    </div>
  )
}
