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

      const onSubmit =

  return (
    <form name="form"
    id="form" className={style.form} onSubmit={handleSubmit(onSubmit)}>

    </form>
  );
}
