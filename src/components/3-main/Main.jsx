import "./main.css";
import projects from "../../projects.json";
import { useState } from "react";
const Main = () => {
  const [active, setActive] = useState("all");
  const [array, setArray] = useState(projects);
  return (
    <main className="flex" id="projects">
      <section className="flex  left-section">
        <button
          className={active === "all" ? "active" : null}
          onClick={() => {
            setActive("all");
            setArray(projects);
          }}
        >
          all projects
        </button>
        <button
          className={active === "css" ? "active" : null}
          onClick={() => {
            setActive("css");
            const setar = projects.filter((item) => {
              return item.category === "css";
            });
            setArray(setar);
          }}
        >
          HTML & CSS
        </button>
        <button
          className={active === "js" ? "active" : null}
          onClick={() => {
            setActive("js");
            const setar = projects.filter((item) => {
              return item.category === "js";
            });
            setArray(setar);
          }}
        >
          JavaScript
        </button>
        <button
          className={active === "react" ? "active" : null}
          onClick={() => {
            setActive("react");
            const setar = projects.filter((item) => {
              return item.category === "react";
              
            });
            setArray(setar)
          }}
        >
          React & MUI
        </button>
      </section>

      <section className=" flex right-section">
        {array.map((item) => {
          return (
            <article key={item.id} className="  card">
              <img width={266} src={item.imgpath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title"> {item.tittle} </h1>
                <p className="sub-title">{item.subtitle}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link">
                      <a href={item["preview-link"]}></a>
                    </div>
                    <div className="icon-github">
                      <a href={item["git-link"]}></a>
                    </div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
