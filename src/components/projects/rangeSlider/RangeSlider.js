import React, { useState } from "react"

export function RangeSlider({ width, setHandleValue, handleValue }) {
  const [handleValueLabel, setHandleValueLabel] = useState("100 тыс. ₽")

  const handleChangeValue = (event) => {
    setHandleValue(event.target.value)
    setHandleValueLabel(Number(event.target.value).toLocaleString("ru-RU", { style: "currency", currency: "RUB", notation: "compact" }))
  }

  return (
    <div className="range_slider__container">
      <div className="range_slider__title_and_handle_input">
        <h1 className="range_slider__title">Куда инвестировать деньги</h1>
        <div className="range_slider__handel_input">
          <input type="number" placeholder="Ввести сумму вручную"></input>
          <button></button>
        </div>
      </div>

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
  )
}
