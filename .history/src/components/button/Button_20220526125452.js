import React from "react";

export default function Button({ title }) {
  return (
    <>
      <button className="form__btn" >
        {title}
      </button>
    </>
  );
}
