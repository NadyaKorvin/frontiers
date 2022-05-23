import React from "react";
import style from "./FirstScreen.module.css";
import image from "../../../public/images.webp"

export default function FirstScreenAnimation() {
  const pointer = (
    <svg
      width="8"
      height="101"
      viewBox="0 0 8 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.35355 100.356C4.15829 100.551 3.84171 100.551 3.64645 100.356L0.464466 97.1735C0.269204 96.9783 0.269204 96.6617 0.464466 96.4664C0.659728 96.2712 0.976311 96.2712 1.17157 96.4664L4 99.2948L6.82843 96.4664C7.02369 96.2712 7.34027 96.2712 7.53553 96.4664C7.7308 96.6617 7.7308 96.9783 7.53553 97.1735L4.35355 100.356ZM3.5 100.002L3.5 0.00195312H4.5L4.5 100.002H3.5Z"
        fill="black"
      />
    </svg>
  );
  const image = "/public/images/image.webp"
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
          <p>
            Мы помогли заработать более 50 млн рублей частным инвесторам в 2021
            году на вложениях в российский бизнес
          </p>
          <p>ПРОКРУТИ ВНИЗ</p>
          <div className={style.content__pointer}>{pointer}</div>
          <img src={image} />
        </div>
      </section>
    </>
  );
}
