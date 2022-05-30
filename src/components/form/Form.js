import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../button/Button"

export default function Form() {
  const [checked, setChecked] = useState(false)
  const [isPersonal, setIsPersonal] = useState(false)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    setChecked(false)
    reset()
  }

  // функция для открытия модального окна соглашения о персональных данных
  const openPersonal = () => {
    setIsPersonal(true)
  }

  return (
    <form name="form" id="form" className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__line">
        <label htmlFor="name" className="form_labels">
          ИМЯ
        </label>
        <input
          name="name"
          {...register("name", {
            required: "Это поле обязательно",
            minLength: {
              value: 2,
              message: "Минимум 2 символа"
            },
            maxLength: {
              value: 50,
              message: "Максимум 50 символов"
            }
          })}
          id="name"
          className="form__input"
        />
      </div>

      <div>{errors?.name && <p className="form__focus">{errors?.name?.message || "Error!"}</p>}</div>
      <div className="form__borders"></div>
      <div className="form__line">
        <label htmlFor="phone" className="form_labels">
          ВАШ ТЕЛЕФОН
        </label>
        <input
          name="phone"
          {...register("phone", {
            required: "Это поле обязательно",
            pattern: {
              value: /^\+?7(\d{10})$/,
              message: "Введите в формате +7 000 000 00 00"
            }
          })}
          id="phone"
          className="form__input"
          type="tel"
          placeholder="+7 900 000 00 00"
        />
      </div>
      <div>{errors?.phone && <p className="form__focus">{errors?.phone?.message || "Error!"}</p>}</div>
      <div className="form__borders"></div>
      <div className="form__line">
        <label htmlFor="message" className="form_labels">
          СООБЩЕНИЕ
        </label>
        <textarea name="message" id="message" className="form__textarea" />
      </div>
      <div>{errors?.message && <p className="form__focus">{errors?.message?.message || "Error!"}</p>}</div>
      <div className="form__borders"></div>
      <div className="agree_and_button">
        <div className="form__policy">
          <label className="form__consent">
            <input
              name="consent"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              value={checked}
              {...register("consent", {
                required: "Подтвердите свое согласие для отправки формы"
              })}
              id="consent"
              className="form__checkbox"
            />
            {/* </label> */}
            <span className="form__checkfake" onClick={() => setChecked(!checked)}></span>
            <p className="form__policy_text">
              Я соглашаюсь на обработку&nbsp;<br></br>
              <span
                onClick={openPersonal}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  lineHeight: "200%"
                }}
              >
                персональных данных
              </span>
            </p>
          </label>
        </div>
        <div className="form__btn">
          <Button title="Отправить" type="submit" disabled={!isValid} />
        </div>
      </div>
      <div className="form__focus_consent">{errors?.consent && <p>{errors?.consent?.message || "Error!"}</p>}</div>
    </form>
  )
}
