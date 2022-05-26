import React from "react";
import image from "./image.webp";

export default function firstScreen() {
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

  return (
    <>
      <section className="firstscreen">
        <header className="firstscreen__header">
          <div className="firstscreen__logotype">FRONTIERS</div>
          <div className="firstscreen__menu">
            <div className="firstscreen__nav">
              <nav className="firstscreen__nav_team">
                <ul>О нас</ul>
                <ul>Команда</ul>
                <ul>Цифры</ul>
              </nav>
            </div>
            <div className="firstscreen__button">
              <p className="firstscreen__text_btn">Получить консультацию</p>
            </div>
          </div>
        </header>
        <div className="firstscreen__content">
          <div className="firstscreen__content_left_text">
            <p>ИНВЕСТИЦИИ</p>
            <p>СЛОЖНО</p>
          </div>
          <div className="firstscreen__content_rihgt_text"></div>
          <p>НЕ</p>
          <p>
            Мы помогли заработать более 50 млн рублей частным инвесторам в 2021
            году на вложениях в российский бизнес
          </p>
          <p>ПРОКРУТИ ВНИЗ</p>
          <div className="firstscreen__content_pointer">{pointer}</div>
          <img src={image} alt="" className="first__img" />
        </div>
      </section>
    </>
  );
}
