import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.css";

export default function Form() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form
      name="form"
      id="form"
      className={style.form}
      onSubmit={handleSubmit(onSubmit)}
    >
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
      />
      <div>
        {errors?.name && (
          <p className={style.focus}>{errors?.name?.message || "Error!"}</p>
        )}
      </div>
      <div className={style.borders} />
      <input
        name="phone"
        {...register("phone", {
          required: "Это поле обязательно",
          pattern: {
            value: /^\+?7(\d{10})$/,
            message: "Введите в формате +7 000 000 00 00",
          },
        })}
        id="phone"
        className={style.input}
        type="tel"
        placeholder="Ваш Телефон  +7 000 000 00 00"
      />
      <div>
        {errors?.phone && (
          <p className={style.focus}>{errors?.phone?.message || "Error!"}</p>
        )}
      </div>
      <div className={style.borders} />
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
          />
        <div>
            {errors?.message && (
              <p className={style.focus}>
                {errors?.message?.message || "Error!"}
              </p>
            )}
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
      <input type="submit" />
    </form>
  );
}
