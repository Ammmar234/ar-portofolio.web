import React from "react";
import "./hero.css";
export default function Hero() {
  return (
    <section className="hero flex ">
      <div className="left-section  ">
        <img src="/public/images/logo.jpeg" alt="" className="logo" />
        <h1 className="tittle">
          Ammar Al Tayyeb , front-end developer 

        </h1>
        <p className="subtitle">
          Lorem ipsum dolor, sit amat consectetur adipisicing edit. Praesentium recusandae odit illo labore? Enim, porro laudantium. Quae reiciendis quam distinctio?
        </p>
        <ul className="links flex  ">
          <li><a className = "icon-facebook2"  href=""> </a></li>
          <li><a className = "icon-x" href=""></a></li>
          <li><a className = "icon-github-square" href=""></a></li>
          <li><a className = "icon-instagram" href=""></a></li>
          

        </ul>
      </div>
      <div className="right-section">animation </div>
    </section>
  );
}
