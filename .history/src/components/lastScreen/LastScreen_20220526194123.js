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
              <p className="lastscreen__contact_group_contact">КОНТАКТЫ</p>
              <p className="lastscreen__footer_text">Санкт-Петербург, Невский пр-кт, 71 (5 этаж)</p>
              <p className="lastscreen__footer_text">+7 000 987 6543</p>
              <p className="lastscreen__footer_text">
                <a href="mailto:info@frontiers.ru">info@frontiers.ru</a>
              </p>
            </div>
            <div className="lastscreen__frontiers_group">
              <p className="lastscreen__contact_group_frontiers">FRONTIERS</p>
              <p className="lastscreen__footer_text">Политика конфиденциальности</p>
              <p className="lastscreen__footer_text">© 2022 Frontiers Group</p>
            </div>
          </div>
          <div className="lastscreen__design_dev">
            <p className="lastscreen__footer_text">Дизайн и разработка</p>
            <LogoKojo className="" />
          </div>
        </footer>
      </section>
    </>
  );
}
