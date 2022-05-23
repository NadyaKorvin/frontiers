import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form name="form"
    id="form" className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" />
    </form>
  );
}
