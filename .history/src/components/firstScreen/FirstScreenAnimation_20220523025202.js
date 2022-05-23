import React from "react";
import style from "./FirstScreen.module.css";

export default function FirstScreenAnimation() {
  return (
    <>
      <section className={style.first__screen}>
        <div className={style.menu}>
          <div className={style.logotype}>FRONTIERS</div>
          <nav>
            <ul></ul>
          </nav>
          <div className={style.menu__nav}>Агенство</div>
          <div className={style.menu__nav}>Кейсы</div>
          <div className={style.menu__nav}>Услуги</div>
          <div className={style.menu__nav}>Контакты</div>
        </div>
      </section>
    </>
  );
}