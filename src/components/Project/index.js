import React from "react";
import "./style.css";

function Project({title, img, descr, github, deploy}) {
  return (
        <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body card-centered">
            <h5 className="card-title">{title</h5>
            <p className="card-text">{descr</p>
            <a href={img} rel="noreferrer" target="_blank" className="btn btn-primary">Go to {title}</a>
        </div>
    </div>
  );
}

export default Project;

