import React from "react";
// import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";
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
            <form
              name="form"
              id="form"
              ref={form}
              className={style.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={style.borders}>
                <input
                  name="name"
                  {...register("name", {
                    required: "Это поле обязательно",
                    minLength: {
                      value: 2,
                      message: "Минимум 2 символа",
                    },
                    maxLength: {
                      value: 50,
                      message: "Максимум 50 символов",
                    },
                  })}
                  id="name"
                  className={style.input}
                  placeholder="Имя"
                  onChange={handleChange}
                  value={values.name}
                />
                <div>
                  {errors?.name && (
                    <p className={style.focus}>
                      {errors?.name?.message || "Error!"}
                    </p>
                  )}
                </div>
              </div>
              <div className={style.borders}>
                <input
                  name="email"
                  {...register("email", {
                    required: "Это поле обязательно",
                    maxLength: {
                      value: 50,
                      message: "Максимум 50 символов",
                    },
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Недопустимый формат email",
                    },
                  })}
                  id="email"
                  className={style.input}
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                <div>
                  {errors?.email && (
                    <p className={style.focus}>
                      {errors?.email?.message || "Error!"}
                    </p>
                  )}
                </div>
              </div>
              <div className={style.borders}>
                <input
                  name="phone"
                  {...register("phone", {
                    required: "Это поле обязательно",
                    pattern: {
                      value: /^\+?7(\d{10})$/,
                      message: "Введите в формате +7XXXXXXXXXX",
                    },
                  })}
                  id="phone"
                  className={style.input}
                  type="tel"
                  placeholder="Телефон"
                  onChange={handleChange}
                  value={values.phone}
                />
                <div>
                  {errors?.phone && (
                    <p className={style.focus}>
                      {errors?.phone?.message || "Error!"}
                    </p>
                  )}
                </div>
              </div>
              <div className={style.borders}>
                <textarea
                  name="message"
                  {...register("message", {
                    required: "Это поле обязательно",
                    minLength: {
                      value: 10,
                      message: "Минимум 10 символов",
                    },
                    maxLength: {
                      value: 500,
                      message: "Максимум 500 символов",
                    },
                  })}
                  id="message"
                  className={style.textarea}
                  placeholder="Сообщение"
                  onChange={handleChange}
                  value={values.message}
                ></textarea>
                <div>
                  {errors?.message && (
                    <p className={style.focus}>
                      {errors?.message?.message || "Error!"}
                    </p>
                  )}
                </div>
              </div>
              <label className={style.consent}>
                <input
                  name="consent"
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  value={checked}
                  {...register("consent", {
                    required: "Подтвердите свое согласие для отправки формы",
                  })}
                  id="consent"
                  className={style.checkbox}
                />
                <span
                  className={style.checkfake}
                  onClick={() => setChecked(!checked)}
                ></span>
                <span className={style.policy_text}>
                  Я даю согласие на обработку&nbsp;
                  <span
                    onClick={openPersonal}
                    style={{ color: "#1f1f1f", textDecoration: "underline" }}
                  >
                    персональных данных
                  </span>
                </span>
              </label>
              <div className={style.focus_consent}>
                {errors?.consent && (
                  <p>{errors?.consent?.message || "Error!"}</p>
                )}
              </div>
              <div className={style.submitWrapper}>
                <div></div>
                <div className={style.form__btn}>
                  <Button
                    title="Отправить"
                    addStyle="form_btn"
                    type="submit"
                    disabled={!isValid}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={style.footer}></div>
      </section>
    </>
  );
}
