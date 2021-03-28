import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";

// Split the projects data into two arrays of three each.
const projects1 = projects.slice(0, 3);
const projects2 = projects.slice(0).slice(-3);
  
function Portfolio () {
  return (
    <div className="container main-container">
    <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="page-header">Portfolio</h1>
          <div className="row">
            <div className="col-md-6">
              {projects1.map(project => (
                <ProjectCard
                  title={project.title}
                  img={project.img}
                  descr={project.descr}
                  github={project.github}
                  deploy={project.deploy}
                />

              ))}

              <br></br>
            </div>

            <div className="col-md-6">
              {projects2.map(project => (
                <ProjectCard
                  key={project.key}
                  title={project.title}
                  img={project.img}
                  descr={project.descr}
                  github={project.github}
                  deploy={project.deploy}
                />
              ))}

              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;