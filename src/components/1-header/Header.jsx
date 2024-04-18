import React, { useState } from "react";
import "./header.css";
export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const handleShowModel = () => {
    setShowModel(!showModel);
  };

  return (
    <>
      <header className="flex ">
        <button
          onClick={() => {
            handleShowModel();
          }}
          className="menu icon-menu"
        ></button>
        <div></div>
        <nav className="">
          <ul className="flex">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects </a>
            </li>
            <li>
              <a href="">Contact </a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">Certifications</a>
            </li>
          </ul>
        </nav>
        <button className="dark-mode">
          <span className="icon-moon-o "></span>
        </button>
        {showModel && (
          <div className="fixed">
            <ul className="model ">
              <li className ="" >
                <button
                  onClick={() => {
                    handleShowModel();
                  }}
                  className="icon-log-out "
                ></button>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Contact </a>
              </li>
              <li>
                <a href="">Testimonials </a>
              </li>
              <li>
                <a href="">Certifications</a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
