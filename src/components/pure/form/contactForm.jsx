import React,{useState} from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const { register, control, handleSubmit, watch } = useForm();
  const [captcha, setCaptcha] = useState(null);

  function registerSubmit(data) {
    console.log(window.innerHeight);
    if(captcha){
    console.log(data);
    }
  }

  function onChange(value) {
    setCaptcha(true)
  }


  return (
    <div>
      <div className="formContact ">
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

          <div className="formContact__recaptcha">
            <ReCAPTCHA sitekey="6Ldy4bUiAAAAAH9ZiMjWguQIIigWl8LafZI38GKm" 
            onChange={onChange} 
            size= {window.innerWidth<640? "compact" : "normal"} 

            theme="dark"
            />
          </div>

          <div className="formContact__boton">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
