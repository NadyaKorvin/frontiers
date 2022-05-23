import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
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
              <form>
                <div className={style.}
                <p></p>
              </form>
          </div>
        </div>
        <div className={style.footer}></div>
      </section>
    </>
  );
}
