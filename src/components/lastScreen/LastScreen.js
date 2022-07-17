import React from "react"
import Form from "../form/Form"

export default function LastScreen() {
  return (
    <>
      <section>
        <div className="lastscreen">
          <div className="lastscreen__wrapper">
            <div className="lastscreen__left_content">
              <p className="lastscreen__title">Главное — это цели инвестора</p>
              <p className="lastscreen__decoration_marks">“</p>
              <p className="lastscreen__description">
                Советуем подходящие проекты и не скрываем риски, а <span className="lastscreen__yelow_line">учим управлять </span> ими.
              </p>
            </div>
            <div className="lastscreen__right_content">
              <div className="lastscreen__text_form">
                <p>ЗАПОЛНИТЕ ФОРМУ И МЫ С ВАМИ СВЯЖЕМСЯ</p>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
