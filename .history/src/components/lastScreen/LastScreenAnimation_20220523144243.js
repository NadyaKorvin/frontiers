import React from "react";
import style from "./LastScreen.module.css";

export default function LastScreenAnimation() {
  return (
    <>
      <section className={style.last__screen}>
        <div className={style.wrapper}>
          <div className={style.left__content}>
            <p>
              ОТПРАВЬТЕ НАМ ЗАЯВКУ НА КОНСУЛЬТАЦИЮ И МЫ ПОДБЕРЕМ ДЛЯ ВАС
              НАИБОЛЕЕ ПОДХОДЯЩУЮ СТРАТЕГИЮ
            </p>
          </div>
          <div className={style.right__content}>
            <div className={style.text__form}>
              <p>ЗАПОЛНИТЕ ФОРМУ И МЫ С ВАМИ СВЯЖЕМСЯ В БЛИЖАЙШЕЕ ВРЕМЯ</p>
            </div>
            <form>
              
            </form>
          </div>
        </div>
        <div className={style.footer}>
            <div className={style.contact}>
                <p>КОНТАКТЫ</p>
                <p>Санкт-Петербург, Невский пр-кт, 71 (5 этаж)</p>
                <p>+7 000 987 6543</p>
                <p>info@frontiers.ru</p>
            </div>
            <div className={style.design}>
                <p>Дизайн и разработка</p>
                <img></img>
            </div>
            <div className={style.frontiers}></div>
        </div>
      </section>
    </>
  );
}
