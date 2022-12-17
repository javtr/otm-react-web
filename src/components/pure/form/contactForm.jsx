import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { textEn, textEs } from "../../../assets/text/contact.js";
import LanguageContext from "../../../context/langContext.js";
import { ValidateForm, getBannedEmail, ValidateEmail } from '../../../helpers/formValidation.js'

export default function ContactForm() {
  const { register, control, handleSubmit, watch } = useForm();
  const [captcha, setCaptcha] = useState(null);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState(textEn);
  const [arrVar, setArrVar] = useState([]);

  useEffect(() => {
    obtainFeatures();
  }, []);

  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
    } else if (lang == "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);


  const obtainFeatures = () => {
    getBannedEmail()
      .then((response) => {
        setArrVar(response);

      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`);
      })
      .finally(() => {


      });
  }


  const sendEmail = (formData) => {

    let filtro = true;

    //validaciones de email -----------------------------
    //validacion blacklist
    if (arrVar.indexOf(formData.email) > -1) {
      console.log("esta en la lista");
      filtro = false;
    }

    //verificar el formato del email
    if (!ValidateEmail(formData.email)) {
      console.log("no tiene un formato valido");
      filtro = false;
    }

    if (filtro) {

      // if (captcha) {

      // emailjs
      //   .send("service_ldxbl2a", "template_4hokf8f", formData, "eIgtXFdKWTCe8NiPY")
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
      // }

      console.log("enviar email");
    }
  }

  function onChange(value) {
    setCaptcha(true);
  }

  return (
    <div>
      <div className="formContact ">
        <h2 className="formContact__title">{text.tit}</h2>

        <form onSubmit={handleSubmit(sendEmail)}>
          <div className="formContact__campo">
            <h3>{text.name}:</h3>
            <input {...register("name")} placeholder={text.nameE} type="text" />
          </div>

          <div className="formContact__campo">
            <h3>{text.email}:</h3>
            <input {...register("email")} placeholder={text.emailE} type="text" />
          </div>

          <div className="formContact__campo">
            <h3>{text.message}:</h3>
            <textarea {...register("message")} placeholder={text.messageE} />
          </div>

          <div className="formContact__recaptcha">
            <ReCAPTCHA
              sitekey="6Ldy4bUiAAAAAH9ZiMjWguQIIigWl8LafZI38GKm"
              onChange={onChange}
              size={window.innerWidth < 640 ? "compact" : "normal"}
              theme="dark"
            />
          </div>



          <div className="formContact__boton">
            <button type="submit">{text.btn}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
