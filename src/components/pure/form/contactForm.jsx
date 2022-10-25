import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

export default function ContactForm() {
  const { register, control, handleSubmit, watch } = useForm();

  function registerSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <div className="formContact  global__cont">
        <h2 className="formContact__title">Contact us</h2>

        <form onSubmit={handleSubmit(registerSubmit)}>
          <div className="formContact__campo">
            <h3>Name:</h3>
            <input {...register("name")} placeholder="name" type="text" />
          </div>

          <div className="formContact__campo">
            <h3>Email:</h3>
            <input {...register("email")} placeholder="email" type="text" />
          </div>

          <div className="formContact__campo">
            <h3>Message:</h3>
            <textarea {...register("message")} placeholder="message" />
          </div>

          <div className="formContact__boton">
            <button className="global__btp" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
