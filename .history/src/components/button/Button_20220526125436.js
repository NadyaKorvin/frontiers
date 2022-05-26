import React from "react";

export default function Button({ title }) {
  return (
    <>
      <button className={style.form_btn} >
        {title}
      </button>
    </>
  );
}
