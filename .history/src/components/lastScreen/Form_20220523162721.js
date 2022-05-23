import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

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
    <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="имя" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        <input type="submit" />
    </form>
  );
}
