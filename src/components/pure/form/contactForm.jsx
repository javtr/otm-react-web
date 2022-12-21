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

  //variables de mail
  let service = "service_u7dxswc";
  let template = "template_3zmbih3";
  let emailKey = "jK2fWXiud23YR9y0X";

  //variables del captcha

  // localhost
  // let captchakey = "6LePq5gjAAAAAOxxb4VD45X50p94esRZjr5o9bwc";

  // otm oficial 
  // let captchakey = "6LckQzYbAAAAACchRcTZ-T4RcoEBkDTAQtVLQpzH";

  // onRender
  let captchakey = "6LchrpgjAAAAAKCvPP5dY0ihEP5d3JP-tifmgaT2";





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




      if (captcha) {

      emailjs
        .send(service, template, formData, emailKey)
        .then(
          (result) => {
            console.log(result.text);
            console.log("envio exitoso");
          },
          (error) => {
            console.log(error.text);
            console.log("falla envio de mail");
          }
        );


      }
      else{
        console.log("falla el captcha");
      }
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
              sitekey={captchakey}
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
