import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from "./assets/images/profile-pic.png";
import gitHubIcon from "./assets/images/GitHub-Mark-64px.png";
import linkedInIcon from "./assets/images/In-Blue-Logo-original.png";
import resume from "./assets/Leal_Johanna_Resume.pdf";

function About() {
  return (
    <div className="container main-container">
      <div className="row">
          <div className="col-lg-8">
            <h1 className="page-header">About Me</h1>
            <div className="row">
              <div className="col-md-3">
                <img className="img img-thumbnail img-fluid profile-img" src={profilePic} alt="johanna leal pic" />
              </div>

              <div className="col-md-9">
                <p>I am a current student at Columbia University Engineering Coding Bootcamp. My most recent experience is as a technical project manager at an educational SaaS startup. I have extensive experience as a software developer but switched over to project management eight years ago. I decided to take this bootcamp to get up to speed on my coding skills. These skills will assist me in my current profession as a technical project manager or perhaps as a web developer.</p>

                  <p>This portfolio showcases some of the homework and projects that I completed during my bootcamp classes. It includes full-stack technologies such as: HTML, CSS, Bootstrap, JavaScript, and node.js. To see my work, click on the GitHub icon on this page.</p>
              </div>
            </div>
          </div>
    
          {/* Sidebar - Let's Connect */}
          <div className="col-lg-4">
            <div className="card mt-2">
              <div className="card-body lets-connect">
                <h4 className="card-title card-center">Let's Connect</h4>
                <br></br>
                <p className="card-text">
                  <a target="_blank" rel="noreferrer" href="https://github.com/johannaleal"><img src={gitHubIcon} alt="GitHub icon" /></a>
                  &nbsp;&nbsp;
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/johannarleal/"><img src={linkedInIcon} alt="LinkedIn icon" /></a></p>
                  <a id="resume-link" target="_blank" rel="noreferrer"  href={resume}>My Resume</a>
              </div>
            </div>
          </div>
      </div>
  </div>
  );
};

export default About;