import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

function ProjectCard(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={process.env.PUBLIC_URL + "/" + props.img} alt="project screenshot"></img>
      <div className="card-body card-centered">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.descr}</p>
        <a href={props.github} rel="noreferrer" target="_blank" className="btn btn-primary">Repo</a>&nbsp;
        <a href={props.deploy} rel="noreferrer" target="_blank" className="btn btn-primary">Website</a>
      </div>
    </div>
  );
}

export default ProjectCard;

