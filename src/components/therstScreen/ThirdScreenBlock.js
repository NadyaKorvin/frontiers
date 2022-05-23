import { dataPersones } from "./dataPersones"
import { useState } from "react"

export function ThirdScreen({}) {
  const [currentPerson, setCurrentPerson] = useState("")

  const reversPerson = (event) => {
    setCurrentPerson(event.target.className)
    let tmp = event.target.className
    let index = dataPersones.findIndex((elem) => elem.className === currentPerson)

    let bigPerson = dataPersones.splice(index)
    dataPersones.unshift(...bigPerson)
  }

  return (
    <div className="third__block">
      <p className="third__block_title">ЭКСПЕРТЫ СВОЕГО ДЕЛА</p>
      <div className="third__block_main">
        <p className="third__block_description">Выращиваем капитал инвестора на росте сильных компаний. Даем быстрый результат надежному бизнесу.</p>
        <div className="persones">
          <div className="big_persona" style={{ backgroundImage: `url('${dataPersones[0].url}')` }}>
            <div className="persones_description">
              <p className="persones__title">{dataPersones[0].title}</p>
              <hr className="persones__hr"></hr>
              <p className="persones__name">{dataPersones[0].name}</p>
              <p className="persones__text">{dataPersones[0].text}</p>
            </div>
          </div>
          {dataPersones.slice(1).map((elem) => (
            <div className={elem.className} key={elem.key} style={{ backgroundImage: `url('${elem.url}')` }} onClick={reversPerson}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
