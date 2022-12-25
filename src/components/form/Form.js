import React, { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import Button from "../button/Button.js"
import Personal from "./PersonalData"
import ModalSuccess from "./ModalSuccess"
import ModalError from "./ModalError"
import Preloader from "./Preloader"

export default function Form() {
  const [isPersonal, setIsPersonal] = useState(false)
  const [isActiveModalSuccess, setActiveModalSuccess] = useState(false)
  const [isActiveModalError, setActiveModalError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [checked, setChecked] = useState(false)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onSubmit"
  })

  const onSubmit = async () => {
    setIsLoading(true)
    const url = new URL(window.location.origin)
    try {
      axios.post("http://45.130.42.68:8080/api/bitrix24/send", {
        name,
        phone,
        message,
        utm: {
          UTM_SOURCE: url.searchParams.get("utm_source"),
          UTM_MEDIUM: url.searchParams.get("utm_medium"),
          UTM_CONTENT: url.searchParams.get("utm_content"),
        },
      })
      setIsLoading(false)
      setActiveModalSuccess(true)
      setTimeout(setActiveModalSuccess, 5000)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setActiveModalError(true)
      setTimeout(setActiveModalError, 5000)
    }
    setChecked(false)
    reset()
  }

  const openPersonal = () => {
    setIsPersonal(true)
  }
  const closePersonal = () => {
    setIsPersonal(false)
  }

  const clouseModal = () => {
    setActiveModalSuccess(false)
    setActiveModalError(false)
  }

  return (
    <>
      <form name="form" className="form" onSubmit={handleSubmit(onSubmit)}>
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
            onChange={(e) => setName(e.target.value)}
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
                value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                message: "Введите в формате +79000000000"
              }
            })}
            id="phone"
            className="form__input"
            type="tel"
            placeholder="+79000000000"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>{errors?.phone && <p className="form__focus">{errors?.phone?.message || "Error!"}</p>}</div>
        <div className="form__borders"></div>
        <div className="form__line">
          <label htmlFor="message" className="form_labels">
            СООБЩЕНИЕ
          </label>
          <textarea name="message" {...register("message")} id="message" className="form__textarea" onChange={(e) => setMessage(e.target.value)} />
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
                {...register("consent", { required: "Подтвердите свое согласие для отправки формы" })}
                id="consent"
                className="form__checkbox"
              />
              <span className="form__checkfake" onClick={() => setChecked(!checked)}></span>
            </label>
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
          </div>
          <div className="form__btn">
            <Button title="Отправить" type="submit" disabled={!isValid} />
          </div>
        </div>
        <div className="form__focus_consent">{errors?.consent && <p>{errors?.consent?.message || "Error!"}</p>}</div>
      </form>
      {isActiveModalSuccess && <ModalSuccess clouseModal={clouseModal} />}
      {isActiveModalError && <ModalError clouseModal={clouseModal} />}
      {isPersonal && <Personal closePersonal={closePersonal} setChecked={setChecked} />}
      {isLoading && <Preloader />}
    </>
  )
}
