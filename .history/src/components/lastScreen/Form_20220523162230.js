import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}