import React from "react"
import Form from "../form/Form"

export default function LastScreen() {
  return (
    <>
      <section>
        <div className="lastscreen">
          <div className="lastscreen__wrapper">
            <div className="lastscreen__left_content">
              <p>ОТПРАВЬТЕ НАМ ЗАЯВКУ НА КОНСУЛЬТАЦИЮ И МЫ ПОДБЕРЕМ ДЛЯ ВАС НАИБОЛЕЕ ПОДХОДЯЩУЮ СТРАТЕГИЮ</p>
            </div>
            <div className="lastscreen__right_content">
              <div className="lastscreen__text_form">
                <p>ЗАПОЛНИТЕ ФОРМУ И МЫ С ВАМИ СВЯЖЕМСЯ В БЛИЖАЙШЕЕ ВРЕМЯ</p>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
