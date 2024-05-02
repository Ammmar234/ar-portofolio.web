import "./contact.css";
import Lottie from "lottie-react"
import sent from "../../../public/animation/sent.json";
import contact from "../../../public/animation/contact.json";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkgaykj");
  if (state.succeeded) {
    return (
    
      <Lottie animationData = {sent} loop className = "sent-animation"/>
    )
  }
  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information about our services .
      </p>

      <div className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required id="email" type="email" name="email" />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button className="submit" type="submit" disabled={state.submitting} >Submit</button>
        </form>
        <div className=" animation ">
          <Lottie animationData={contact} loop className="contact-animation " />
        </div>
      </div>
    </section>
  );
};

export default Contact;
