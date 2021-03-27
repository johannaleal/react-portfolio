import React from "react";

function Contact() {
  return (
    <div className="container main-container">
      <div className="card row">
        {/* <div className="card"> */}
          <div className="card-body">
            <div className="col-lg-12">
              <h2 className="page-header">Contact</h2>

              {/* Name label and text box */}
              <div className="row">
                <div className="col-lg-1">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-11">
                    <input type="text" className="form-control" placeholder="Name"></input>
                  </div>
                </div>
              </div>

              <br></br>
                
              {/* Email label and text box */}
              <div className="row">
                <div className="col-lg-1">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-11">
                    <input type="text" className="form-control" placeholder="Email"></input>
                  </div>
                </div>
              </div>

              <br></br>

              {/* Message label and text area */}
              <div className="row">
                <div className="col-lg-1">
                  <div className="input-group">
                    <span className="input-group-text">Message</span>
                  </div>
                </div>
              </div>

              <div className="row">
                  <div className="col-lg-9">
                    <textarea className="form-control"></textarea>
                  </div>
              </div>

              <br></br>

              <div className="row">
                <div className="col-lg-1">
                  <button type="button" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
        </div>
      {/* </div> */}
    </div>
  </div>
  );

}

export default Contact;