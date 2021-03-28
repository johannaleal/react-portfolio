import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <nav className="navbar main-nav-div navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="name-hdr">
          <a className="navbar-brand" href="/about"><span style={{color: "white"}}>Johanna Leal</span></a>
        </span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav nav-links mr-auto">
            <a className="nav-link active" aria-current="page" href="/about">About</a>
            <a className="nav-link" href="/portfolio">Portfolio</a>
            <a className="nav-link" href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
