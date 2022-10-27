import { React, useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const CompPrueba = () => {
  const [showYes, setShowYes] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      message: "",
      yes_no: false
    }
  });

  const resetForm = () => {
    reset();
    setShowYes(false);
  };

  const sendEmail = (formData) => {
    resetForm();

    console.log(formData);
    
    // emailjs
    //   .send("service_ldxbl2a", "template_4hokf8f", formData, "eIgtXFdKWTCe8NiPY")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       resetForm();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );


  };

  return (
    <div>
      <p>Have you spoken to our agent in the last 14 days?</p>
      <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
        <div className="mb-2">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="true"
              id="yes"
              name="yes_no"
              {...register("yes_no", { required: true })}
              onClick={setShowYes}
            />
            <label className="form-check-label mr-4" htmlFor="yes">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="false"
              id="no"
              name="yes_no"
              {...register("yes_no", { required: true })}
              defaultChecked
              onClick={() => setShowYes(false)}
            />
            <label className="form-check-label mr-4" htmlFor="no">
              No
            </label>
          </div>
        </div>
        {showYes && (
          <div className="form-group row mb-0">
            <div className="col-12 py-3">
              <input
                type="text"
                className="form-control custom--fields-mod text-the-primary"
                id="agentName"
                placeholder="Agent Name *"
                name="agent_name"
                {...register("agent_name", { required: true })}
              />
              {errors.agent_name && (
                <span className="invalid-feedback d-block">
                  Please fill out this field.
                </span>
              )}
            </div>
          </div>
        )}
        <div className="form-group mb-0 py-3">
          <textarea
            className="form-control custom--fields-mod text-the-primary"
            id="message"
            rows="3"
            placeholder="Message *"
            name="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback d-block">
              Please fill out this field.
            </span>
          )}
        </div>
        <div className="form-group row py-2 mb-0">
          <div className="col-12 text-center text-md-left py-2 py-md-0">
            <input
              className="buttons-width float-md-right btn btn-dark-moderate-orange rounded-0"
              type="submit"
              value="SEND MESSAGE"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default CompPrueba;
