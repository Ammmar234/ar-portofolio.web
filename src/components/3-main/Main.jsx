import React from "react";
import "./main.css";
import projects from "/src/projects.json"
export default function Main() {
  return (
    <main className="flex ">
      <section className="left-container ">
        <button className="active">all projects </button>
        <button>html & css </button>
        <button> javascript </button>
        <button>React Js</button>
      </section>
      <section className="right-container flex ">
        {projects.map((project) => {
          return (
            <article key ={project.id}>
              <img src={project.src} alt="" />
              <div className="box">
                <h1 className="title"> {project.title} </h1>
                <p className="subtitle">
                  {project.subtitle}
                </p>
                <div className="links flex ">
                  <div className = "icons flex  ">
                  <a href={project.link} className = "icon-link"></a>
                  <a href={project.github} className = "icon-github-square "></a>
                 </div>

                  <a href="" className = "more-link">
                    more <span className = "icon-arrow-right-thick "></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}