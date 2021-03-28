import React from "react";
import codeQuizImg from "./assets/images/code-quiz.png";
import weatherDashboardImg from "./assets/images/weather-dashboard.png";
import passwordGeneratorImg from "./assets/images/password-generator.png";
import burgerAppImg from "./assets/images/burger.png";
import dayPlannerImg from "./assets/images/day-planner.png";
import tadkYaLaterImg from "./assets/images/task-ya-later.png";

function Portfolio() {
  return (
    <div className="container main-container">
    <div className="row">
        <div className="col-md-8">
          <h1 className="page-header">Portfolio</h1>
          <div className="row">
            <div className="col-md-6">

              <div className="card" style={{width: "18rem"}}>
                <img src={codeQuizImg} className="card-img-top" alt="code quiz" />
                <div className="card-body card-centered">
                  <h5 className="card-title">Code Quiz</h5>
                  <p className="card-text">A timed coding quiz with multiple-choice questions</p>
                  <a href="https://johannaleal.github.io/code-quiz/" rel="noreferrer" target="_blank" className="btn btn-primary">Go to Code Quiz</a>
                </div>
              </div>

              <br></br>

              <div className="card" style={{width: "18rem"}}>
                <img src={weatherDashboardImg} className="card-img-top" alt="weather dashboard" />
                <div className="card-body card-centered">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text">A weather dashboard app to see the weather outlook of cities</p>
                  <a href="https://johannaleal.github.io/weather-dashboard/" rel="noreferrer" target="_blank" className="btn btn-primary">Go to Weather Dashboard</a>
                </div>
              </div>

              <br></br>

              <div className="card" style={{width: "18rem"}}>
                <img src={passwordGeneratorImg} className="card-img-top" alt="password generator" />
                <div className="card-body card-centered">
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text">An app that generates a random password </p>
                  <a href="https://johannaleal.github.io/password-generator/" rel="noreferrer" target="_blank" className="btn btn-primary">Go to Password Generator</a>
                </div>
              </div>

              <br></br>
            </div>

            <div className="col-md-6">
              <div className="card" style={{width: "18rem"}}>
                <img src={burgerAppImg} className="card-img-top" alt="burger app" />
                <div className="card-body card-centered">
                  <h5 className="card-title">Eat-Da-Burger</h5>
                  <p className="card-text">An app that logs burgers created and eaten</p>
                  <a href="https://burger-johanna.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-primary">Go to Eat-Da-Burger</a>
                </div>
              </div>

              <br></br>

              <div className="card" style={{width: "18rem"}}>
                <img src={dayPlannerImg} className="card-img-top" alt="day planner" />
                <div className="card-body card-centered">
                  <h5 className="card-title">Day Planner</h5>
                  <p className="card-text">A simple calendar application to plan your working day</p>
                  <a href="https://johannaleal.github.io/day-planner/" rel="noreferrer" target="_blank" className="btn btn-primary">Go to Day Planner</a>
                </div>
              </div>

              <br></br>

              <div className="card" style={{width: "18rem"}}>
                <img src={tadkYaLaterImg} className="card-img-top" alt="task ya later" />
                <div className="card-body card-centered">
                  <h5 className="card-title">Task Ya Later!</h5>
                  <p className="card-text">A task and messaging application for teachers and students</p>
                  <a href="https://project-two-ljm.herokuapp.com/" rel="noreferrer" target="_blank" className="btn btn-primary">Go to Task Ya Later!</a>
                </div>
              </div>

              <br></br>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

};

export default Portfolio;