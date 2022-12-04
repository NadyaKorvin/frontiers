import React, { useState } from "react"
import { useForm } from "react-hook-form"

export function RangeSlider({ width, setHandleValue, handleValue, setErrorHandleRange, errorHandleRange }) {
  const [handleValueLabel, setHandleValueLabel] = useState("100 тыс. ₽")
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function onSubmit(data) {
    setHandleValue(Number(data.number))
    setHandleValueLabel(Number(data.number).toLocaleString("ru-RU", { style: "currency", currency: "RUB", notation: "compact" }))
  }

  const handleChangeValue = (event) => {
    setHandleValue(event.target.value)
    setHandleValueLabel(Number(event.target.value).toLocaleString("ru-RU", { style: "currency", currency: "RUB", notation: "compact" }))
  }

  return (
    <div className="range_slider__container">
      <div className="range_slider__title_and_handle_input">
        <h1 className="range_slider__title">Куда инвестировать деньги</h1>
        <form className="range_slider__form" onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onSubmit)}>
          <input
            className={errorHandleRange ? "range_slider__input_number__error" : "range_slider__input_number"}
            type="number"
            {...register("number", { required: true, max: 10000000, maxLength: 8 })}
            placeholder="Введите сумму инвестиций"
          />
          <input
            className={errorHandleRange ? "range_slider__input_number__submit_disable" : "range_slider__input_number__submit_active"}
            type="submit"
            value=""
          />
          {errors.number && errors.number.type !== "required" ? setErrorHandleRange(true) : setErrorHandleRange(false)}
        </form>
      </div>

      <input className="range_slider" type="range" min="0" max="10000000" step="100000" value={handleValue} onChange={handleChangeValue} />
      {width > 768 ? (
        <div
          className="range_slider__label"
          style={{ left: `${handleValue < 400000 ? 0 : handleValue > 9600000 ? 93 : (handleValue * 100) / 10000000 - 4}%` }}
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
