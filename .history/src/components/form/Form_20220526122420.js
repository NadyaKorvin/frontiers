import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../button/Button";

export default function Form() {
  const [checked, setChecked] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);

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

  // функция для открытия модального окна соглашения о персональных данных
  const openPersonal = () => {
    setIsPersonal(true);
  };

  return (
    <form
      name="form"
      id="form"
      className="form"
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
        className="form__input"
        placeholder="Имя"
      />
      <div>
        {errors?.name && (
          <p className={focus}>{errors?.name?.message || "Error!"}</p>
        )}
      </div>
      <div className={borders} />
      <input
        name="phone"
        {...register("phone", {
          required: "Это поле обязательно",
          pattern: {
            value: /^\+?7(\d{10})$/,
            message: "Введите в формате +7 000 000 00 00",
          },
        })}
        id="phone"
        className="form__input"
        type="tel"
        placeholder="Ваш Телефон  +7 000 000 00 00"
      />
      <div>
        {errors?.phone && (
          <p className={focus}>{errors?.phone?.message || "Error!"}</p>
        )}
      </div>
      <div className={borders} />
      <textarea
        name="message"
        {...register("message", {
          required: "Это поле обязательно",
          minLength: {
            value: 10,
            message: "Минимум 10 символов",
          },
          maxLength: {
            value: 500,
            message: "Максимум 500 символов",
          },
        })}
        id="message"
        className="form__"
        placeholder="Сообщение"
      />
      <div>
        {errors?.message && (
          <p className={focus}>{errors?.message?.message || "Error!"}</p>
        )}
      </div>
      <div className={borders} />
      <label className={consent}>
        <input
          name="consent"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          value={checked}
          {...register("consent", {
            required: "Подтвердите свое согласие для отправки формы",
          })}
          id="consent"
          className={checkbox}
        />
        <span
          className={checkfake}
          onClick={() => setChecked(!checked)}
        ></span>
        <div className={policy_text}>
          <p>Я соглашаюсь на обработку&nbsp;</p>
          <span
            onClick={openPersonal}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            персональных данных
          </span>
        </div>
        <div className={form__btn}>
            <Button
              title="Отправить"
              type="submit"
              disabled={!isValid}
            />
          </div>
      </label>
      <div className={focus_consent}>
        {errors?.consent && <p>{errors?.consent?.message || "Error!"}</p>}
      </div>
    </form>
  );
}
