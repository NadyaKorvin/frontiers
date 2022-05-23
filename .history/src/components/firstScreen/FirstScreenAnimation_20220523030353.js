import React from "react";
import style from "./FirstScreen.module.css";

export default function FirstScreenAnimation() {
  return (
    <>
      <section className={style.first__screen}>
        <div className={style.menu}>
          <div className={style.logotype}>FRONTIERS</div>
          <nav className={style.nav__sidebar}>
            <ul>Агенство</ul>
            <ul>Кейсы</ul>
            <ul>Услуги</ul>
            <ul>Контакты</ul>
          </nav>
          {/* <div className={style.button}>Получить консультацию</div> */}
        </div>
      </section>
    </>
  );
}