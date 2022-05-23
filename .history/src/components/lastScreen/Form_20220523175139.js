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
            placeholder="Ваш Телефон      +7 000 000 00 00"
          />
      <input type="submit" />
    </form>
  );
}
