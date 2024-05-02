import "./hero.css";
import Lottie from "lottie-react"
import done from "../../../public/animation/done.json"
const Hero = () => {
  return (
    <section className="hero flex" id = "about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          web developer & copywriter 
        </h1>
        <p className="sub-title">
          I’m Ammar-Al-Tayyeb , a web developer since 2022 
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie animationData={done}></Lottie>
      </div>
    </section>
  );
};

export default Hero;
