import React from "react";
import style from "./FirstScreen.module.css";

export default function FirstScreenAnimation() {
  return (
    <>
      <section className={style.first__screen}>
        <div className={style.header}>
          <div className={style.logotype}>FRONTIERS</div>
          <nav className={style.nav__sidebar}>
            <ul>Агенство</ul>
            <ul>Кейсы</ul>
            <ul>Услуги</ul>
            <ul>Контакты</ul>
          </nav>
          <div className={style.button}>
            <p className={style.text__btn}>Получить консультацию</p>
          </div>
        </div>
        <div className={style.content}>
          <p>ИНВЕСТИЦИИ</p>
          <p>НЕ</p>
          <p>СЛОЖНО</p>
          <p>Мы помогли заработать более 50 млн рублей частным инвесторам в 2021 году на вложениях в российский бизнес</p>
        </div>
      </section>
    </>
  );
}
