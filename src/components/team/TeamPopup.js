import React, { useState } from "react"

export function TeamPopup({ useData }) {
  const [checkedNumbers, setChecedNumbers] = useState(true)
  const [checkedBiografy, setChecedBiografy] = useState(false)
  const [currentSlider, setCurrenrSlider] = useState(0)
  const [isClose, setIsClose] = useState(false)

  const isChecedNumbers = () => {
    setChecedNumbers(true)
    setChecedBiografy(false)
  }
  const isChecedBiografy = () => {
    setChecedNumbers(false)
    setChecedBiografy(true)
  }

  const goForward = () => {
    let tmp = currentSlider
    if (tmp === 6) return
    tmp++
    setCurrenrSlider(tmp)
  }

  const goBack = () => {
    let tmp = currentSlider
    if (tmp === 0) return
    tmp--
    setCurrenrSlider(tmp)
  }

  if (isClose) return <div></div>

  return (
    <div className="team__popup">
      <div className="team__sliders">
        <button className="popUp__closer" onClick={() => setIsClose(true)}></button>
        <div className="team__slide" key={useData[currentSlider].key}>
          <div className="popup__img" style={{ backgroundImage: `url('${useData[currentSlider].url}')` }}>
            <div className="popup_description">
              <p className="popup__title">{useData[currentSlider].title}</p>
              <hr className="popup__hr"></hr>
              <p className="popup__name">{useData[currentSlider].name}</p>
            </div>
          </div>
          <div className="popup__info">
            <button className={checkedNumbers ? "popup__numbers_checked" : "popup__numbers_unchecked"} onClick={() => isChecedNumbers()}>
              Цифры
            </button>
            <span> / </span>
            <button className={checkedBiografy ? "popup__biografy_checked" : "popup__biografy_unchecked"} onClick={() => isChecedBiografy()}>
              Биография
            </button>
            <div className="popup__info_texts">
              <div className={checkedNumbers ? "popup__numbers_block_checked" : "popup__numbers_block_unchecked"}>
                {useData[currentSlider].numbers.map((elem) => (
                  <div className="popup__numbers_block" key={elem.key}>
                    <p className="popup__numbers_big_element">{elem.num}</p>
                    <p className="popup__numbers_small_element">{elem.desc}</p>
                  </div>
                ))}
              </div>
              <div className={checkedBiografy ? "popup__biografy_block_checked" : "popup__biografy_block_unchecked"}>
                <p className="popup__biografy_title">{useData[currentSlider].biografyTitle}</p>
                {useData[currentSlider].biografy.map((elem) => (
                  <p className="popup__biografy_text" key={elem.key}>
                    {elem.paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="slider__navigation">
          <button className="slider__navigation_goback_arrow" onClick={() => goBack()}></button>
          <p>
            {currentSlider + 1}/{useData.length}
          </p>
          <button className="slider__navigation_goforward_arrow" onClick={() => goForward()}></button>
        </div>
      </div>
    </div>
  )
}
