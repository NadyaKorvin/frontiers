import React from "react";
import style from "./Button.module.css";

export default function Button({ title }) {
  return (
    <>
      <button className={style.form_btn} >
        {title}
      </button>
    </>
  );
}
