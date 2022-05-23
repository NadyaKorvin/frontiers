import React from "react";
import style from "./Button.module.css";

export default function Button({ title, style_btn }) {
  return (
    <>
      <button className={style_btn} data-style={addStyle} data-text={title}>
        {title}
      </button>
    </>
  );
}
