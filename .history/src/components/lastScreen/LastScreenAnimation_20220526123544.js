import React from "react";
import Form from "../form/Form"
import Kojo from "../../images/Kojo"

export default function "lastscreenAnimation() {
  return (
    <>
      <section className=""lastscreen">
        <div className="lastscreen__.wrapper">
          <div className="lastscreen__.left__content">
            <p>
              ОТПРАВЬТЕ НАМ ЗАЯВКУ НА КОНСУЛЬТАЦИЮ И МЫ ПОДБЕРЕМ ДЛЯ ВАС
              НАИБОЛЕЕ ПОДХОДЯЩУЮ СТРАТЕГИЮ
            </p>
          </div>
          <div className="lastscreen__.right__content">
            <div className="lastscreen__.text__form">
              <p>ЗАПОЛНИТЕ ФОРМУ И МЫ С ВАМИ СВЯЖЕМСЯ В БЛИЖАЙШЕЕ ВРЕМЯ</p>
            </div>
            <Form />
          </div>
        </div>
        <footer className="lastscreen__.footer">
          <div className="lastscreen__.contact">
            <p>КОНТАКТЫ</p>
            <p>Санкт-Петербург, Невский пр-кт, 71 (5 этаж)</p>
            <p>+7 000 987 6543</p>
            <p><a href="mailto:info@frontiers.ru" >info@frontiers.ru</a></p>
          </div>
          <div className="lastscreen__.design">
            <p>Дизайн и разработка</p>
            <Kojo />
          </div>
          <div className="lastscreen__.frontiers">
            <p>FRONTIERS</p>
            <p>Политика конфиденциальности</p>
            <p>© 2022 Frontiers Group</p>
          </div>
        </footer>
      </section>
    </>
  );
}
