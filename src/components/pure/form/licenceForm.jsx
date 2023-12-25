import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import licImg from "../../../assets/img/id.jpg";
import { textEn, textEs } from "../../../assets/text/licence.js";
import LanguageContext from "../../../context/langContext.js";
import { ValidateEmail } from "../../../helpers/formValidation.js";
import spImg from "../../../assets/img/sp.png";
import enImg from "../../../assets/img/en.png";
import { Dna } from "react-loader-spinner";

export default function LicenceForm() {
  const { register, control, handleSubmit, watch } = useForm();
  const [captcha, setCaptcha] = useState(null);
  const { lang, setLang } = useContext(LanguageContext);
  const [text, setText] = useState({});
  const [mailState, setMailState] = useState("none");
  const [content, setContent] = useState(textEn);

  //variables de oficial
  let service = "service_u7dxswc";
  let template = "template_a3k6iui";
  let emailKey = "jK2fWXiud23YR9y0X";

  //variables de test
  // let service = "service_ldxbl2a";
  // let template = "template_2fiajve";
  // let emailKey = "eIgtXFdKWTCe8NiPY";

  //variables del captcha

  // localhost
  // let captchakey = "6LePq5gjAAAAAOxxb4VD45X50p94esRZjr5o9bwc";

  // otm oficial
  let captchakey = "6LckQzYbAAAAACchRcTZ-T4RcoEBkDTAQtVLQpzH";

  // onRender
  // let captchakey = "6LchrpgjAAAAAKCvPP5dY0ihEP5d3JP-tifmgaT2";

  useEffect(() => {
    if (lang == "en") {
      setText(textEn);
    } else if (lang == "es") {
      setText(textEs);
    } else {
      setText(textEn);
    }
  }, [lang]);

  const sendEmail = (formData) => {
    let filtro = true;
    //verificar el formato del email
    if (!ValidateEmail(formData.email)) {
      console.log("no tiene un formato valido");
      filtro = false;
    }

    if (filtro) {
      if (captcha) {
        setMailState("sending");


        emailjs.send(service, template, formData, emailKey).then(
          (result) => {
            console.log(result.text);
            setMailState("succes");
          },
          (error) => {
            console.log(error.text);
            setMailState("fail");
          }
        );
      }
    }
  };

  function onChange(value) {
    setCaptcha(true);
  }

  function switchLanguage() {
    const lang = localStorage.getItem("otm_lang");

    if (lang == "es") {
      localStorage.setItem("otm_lang", "en");
      setLang("en");
      setContent(textEn);
    } else if (lang == "en") {
      localStorage.setItem("otm_lang", "es");
      setLang("es");
      setContent(textEs);
    } else {
      localStorage.setItem("otm_lang", "en");
      setLang("en");
      setContent(textEn);
    }
  }

  return (
    <div>

      <div className="formLicence__langCont">
        <div
          className="formLicence__langCont--button"
          onClick={() => {
            switchLanguage();
          }}
          style={
            lang == "es"
              ? {
                  backgroundImage: `url(${spImg})`,
                }
              : {
                  backgroundImage: `url(${enImg})`,
                }
          }
        ></div>
      </div>

      <div className="formLicenceLabel">{text.gen}</div>

      {mailState == "sending" && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}


      {mailState != "none" && mailState != "sending" ? (
        <div
          className={
            mailState == "fail"
              ? "mensaje mensajeFail"
              : "mensaje mensajeSucces"
          }
        >
          {mailState == "fail" && mailState != "sending"
            ? text.fail
            : text.succes}
        </div>
      ) : (
        <></>
      )}

      {mailState == "none" && (
        <div className="formLicence">
          <h2 className="formLicence__title">
            {text.tit} <br /> {text.tit2}
          </h2>
          <h4 className="formLicence__subTitle">{text.sub}</h4>
          <p className="formLicence__numeration">{text.one}</p>
          <div className="formLicence__idImage">
            <img src={licImg}></img>
          </div>
          <p className="formLicence__caption">{text.oneSub}</p>
          <p className="formLicence__numeration  formLicence__numeration--end">
            {text.two}
          </p>

          <form onSubmit={handleSubmit(sendEmail)}>
            <div className="formLicence__campo">
              <h3>{text.name}:</h3>
              <input
                {...register("name")}
                placeholder={text.nameE}
                type="text"
              />
            </div>
            <div className="formLicence__campo">
              <h3>{text.id}:</h3>
              <input {...register("id")} placeholder={text.idE} type="text" />
            </div>
            <div className="formLicence__campo">
              <h3>{text.email}:</h3>
              <input
                {...register("email")}
                placeholder={text.emailE}
                type="text"
              />
            </div>

            <div className="formLicence__campo">
              <h3>{text.message}:</h3>
              <textarea {...register("message")} placeholder={text.messageE} />
            </div>

            <div className="formLicence__recaptcha">
              <ReCAPTCHA
                sitekey={captchakey}
                onChange={onChange}
                size={window.innerWidth < 640 ? "compact" : "normal"}
                theme="dark"
              />
            </div>

            <div className="formLicence__boton">
              <button type="submit">{text.btn}</button>
            </div>
          </form>
          <p className="formLicence__clarif">• {text.text1}</p>
          <p className="formLicence__clarif">• {text.text2}</p>
          <p className="formLicence__clarif">
            » {text.text3} <br /> » {text.text4}
          </p>
        </div>
      )}
    </div>
  );
}
