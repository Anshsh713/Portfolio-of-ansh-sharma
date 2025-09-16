import React from "react";
import "./Project.css";
import tic from "./project_photo/tic.png";
import portfolio from "./project_photo/portfolio.png"
function Project() {
  const projects = [
    {
      img: tic, 
      Name: "TIC TAC TOE",
      Github_link: "https://github.com/Anshsh713/TIC_TAC_TOEgame",
      website_link: "https://anshsh713.github.io/TIC_TAC_TOEgame/home_page.html",
      about: "Start Playing now and see who will get three in row",
      tags: ["CSS", "JavaScript"],
    },
    {
      img: portfolio,
      Name: "PortFolio",
      Github_link: "#",
      website_link: "#",
      about: "A sleek personal portfolio built with React, Tailwind CSS. ",
      tags: ["React"],
    },
  ];

  return (
    <div className="projects-container">
      <div className="project-text">
        <h1>Project</h1>
        <p>Creating is always attractive and I tried to never deprive myself of this pleasure, here you can see the projects published by me.</p>
      </div>
      <div className="projects-grid">
              {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            {project.img ? (
              <img src={project.img} alt={project.Name} />
            ) : (
              <div className="placeholder">No Image</div>
            )}
          </div>
          <div className="project-details">
            <h2>{project.Name}</h2>
            <p>{project.about}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="link">
              <a
                href={project.Github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" title="GitHub"></i>
              </a>
              {project.website_link && (
                <a
                  href={project.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    View Project
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Project;
