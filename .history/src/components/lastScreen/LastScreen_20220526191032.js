import React from "react";
import Form from "../form/Form";
import LogoKojo from "./LogoKojo";

export default function LastScreen() {
  return (
    <>
      <section className="lastscreen">
        <div className="lastscreen__wrapper">
          <div className="lastscreen__left_content">
            <p>
              ОТПРАВЬТЕ НАМ ЗАЯВКУ НА КОНСУЛЬТАЦИЮ И МЫ ПОДБЕРЕМ ДЛЯ ВАС
              НАИБОЛЕЕ ПОДХОДЯЩУЮ СТРАТЕГИЮ
            </p>
          </div>
          <div className="lastscreen__right_content">
            <div className="lastscreen__text_form">
              <p>ЗАПОЛНИТЕ ФОРМУ И МЫ С ВАМИ СВЯЖЕМСЯ В БЛИЖАЙШЕЕ ВРЕМЯ</p>
            </div>
            <Form />
          </div>
        </div>
        <footer className="lastscreen__footer">
          <div className="lastscreen__footer_wrapper_info">
            <div className="lastscreen__contact_group">
              <p>КОНТАКТЫ</p>
              <p>Санкт-Петербург, Невский пр-кт, 71 (5 этаж)</p>
              <p>+7 000 987 6543</p>
              <p>
                <a href="mailto:info@frontiers.ru">info@frontiers.ru</a>
              </p>
            </div>
            <div className="lastscreen__frontiers_group">
              <p>FRONTIERS</p>
              <p>Политика конфиденциальности</p>
              <p>© 2022 Frontiers Group</p>
            </div>
          </div>
          <div className="lastscreen__design">
            <p>Дизайн и разработка</p>
            <LogoKojo />
          </div>
        </footer>
      </section>
    </>
  );
}
