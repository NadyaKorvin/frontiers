import React from "react";
import style from "./Button.module.css";

export default function Button({ title, addStyle }) {
  return (
    <>
      <button className={} data-style={addStyle} data-text={title}>
        {title}
      </button>
    </>
  );
}
