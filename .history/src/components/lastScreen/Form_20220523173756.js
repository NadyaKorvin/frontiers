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
            onChange={handleChange}
            value={values.name}
          />
      <div className={style.borders}></div>
      <input type="submit" />
    </form>
  );
}
