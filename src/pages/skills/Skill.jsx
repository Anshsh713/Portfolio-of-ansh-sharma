import React from "react";
import "./Skill.css";
import js from "./languages/js.png";
import python from "./languages/python.png";
import c from "./languages/letter-c.png";
import cpp from "./languages/c++.png";
import html from "./languages/html-5.png";
import css from "./languages/css-3.png";
import react from "./languages/science.png";
import mysql from "./languages/mysql.png";
import github from "./languages/github.png";
import work from "./languages/sorry.png";
import Tailwindcss from "./languages/Tailwind.png";
const Skill = () => {
  const languages = [
    { img: js, name: "JavaScript" },
    { img: c, name: "C" },
    { img: cpp, name: "C++" },
  ];
  const Frontend = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: react, name: "React" },
  ];
  const Backend = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpisGYyGorcHGf3rRcISyFKWNMcC8X_51vrg&s",
      name: "Appwrite",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s",
      name: "Node.js",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlDx-wmb9kv0mAr6Ff4eG1y9dwUCJ9sYXPQ&s",
      name: "Express.js",
    },
  ];
  const Database = [
    { img: github, name: "GitHub" },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s",
      name: "MongoDB",
    },
  ];
  return (
    <div className="skill" id="skills">
      <div className="skill-header">
        <h1>Teach Stack</h1>
      </div>
      <div className="skill-content">
        <p>
          Here you can see my skills, one of the fascinations of the computer
          world is the momentary changes of technologies, but I try to update my
          knowledge every day and experience new technologies.
        </p>
        <div className="skill-box">
          <div className="skill-box1">
            <h2>Languages</h2>
            <div className="languages">
              {languages.map((language, index) => {
                return (
                  <div key={index} className="language-items">
                    <img src={language.img} alt="language" />
                    <p>{language.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skill-box2">
            <h2>Frontend Development</h2>
            <div className="languages">
              {Frontend.map((languages, index) => {
                return (
                  <div key={index} className="language-items">
                    <img src={languages.img} alt="language" />
                    <p>{languages.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skill-box3">
            <h2>Backend Development</h2>
            <div className="languages">
              {Backend.map((languages, index) => {
                return (
                  <div key={index} className="language-items">
                    <img src={languages.img} alt="language" />
                    <p>{languages.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skill-box4">
            <h2>DataBases</h2>
            <div className="languages">
              {Database.map((languages, index) => {
                return (
                  <div key={index} className="language-items">
                    <img src={languages.img} alt="language" />
                    <p>{languages.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
