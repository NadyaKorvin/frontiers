import React from "react";
import style from "./FirstScreen.module.css";

export default function FirstScreenAnimation() {
  return (
    <>
      <section className={style.first__screen}>
        <div className={style.menu}>
          <div className={style.logotype}>FRONTIERS</div>
          <div className={style.menu__nav}>Агенство</div>
          <div className={style.menu__nav}>Агенство</div>
          <div className={style.menu__nav}>Агенство</div>
          <div className={style.menu__nav}>Агенство</div>
        </div>
      </section>
    </>
  );
}