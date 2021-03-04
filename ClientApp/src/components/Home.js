import React, { Component } from "react";
import { Button } from "reactstrap";
// import
import { Hidden } from "@material-ui/core";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-4">
            <h1 className="display-4"> Help Student Reach Their Potential</h1>
            <p style={{ color: "#626262", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Molestie nunc non blandit massa.{" "}
            </p>
          </div>
          <Hidden smDown>
            <div className="col-8">
              <img src={"banner.webp"} height="600" width="840" />
            </div>
          </Hidden>
        </div>
        <div className="row my-5">
          <div
            className="col-12 col-md-4 "
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <div className="card" style={{ borderBottom: "5px solid #0B799D" }}>
              <div className="card-body">
                <div className="card-title d-flex justify-content-center">
                  <img
                    src={"online-education.svg"}
                    height="50"
                    width="50"
                    // style={{ alignSelf: "center", display: "flex" }}
                  />
                  <br />
                </div>
                <hr style={{ width: "70px", border: "1px solid #99979E" }} />
                <div className="card-text">
                  <h4 style={{ textAlign: "center" }}>Online Learning</h4>
                  <p style={{ textAlign: "center" }}>
                    Join the community of modern thinking students. Highly
                    qualified teacher and millions of people learning.
                  </p>
                  <div className="my-5 d-flex justify-content-center">
                    <button
                      className="btn btn-outline-info"
                      style={{ borderRadius: 0, border: "2px solid" }}
                    >
                      {" "}
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div
            className="col-12 col-md-4 "
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <div className="card" style={{ borderBottom: "5px solid #0B799D" }}>
              <div className="card-body">
                <div className="card-title d-flex justify-content-center">
                  <img
                    src={"online-education.svg"}
                    height="50"
                    width="50"
                    // style={{ alignSelf: "center", display: "flex" }}
                  />
                  <br />
                </div>
                <hr style={{ width: "70px", border: "1px solid #99979E" }} />
                <div className="card-text">
                  <h4 style={{ textAlign: "center" }}>Online Learning</h4>
                  <p style={{ textAlign: "center" }}>
                    Join the community of modern thinking students. Highly
                    qualified teacher and millions of people learning.
                  </p>
                  <div className="my-5 d-flex justify-content-center">
                    <button
                      className="btn btn-outline-info"
                      style={{ borderRadius: 0, border: "2px solid" }}
                    >
                      {" "}
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-4 "
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
            }}
          >
            <div className="card" style={{ borderBottom: "5px solid #0B799D" }}>
              <div className="card-body">
                <div className="card-title d-flex justify-content-center">
                  <img
                    src={"online-education.svg"}
                    height="50"
                    width="50"
                    // style={{ alignSelf: "center", display: "flex" }}
                  />
                  <br />
                </div>
                <hr style={{ width: "70px", border: "1px solid #99979E" }} />
                <div className="card-text">
                  <h4 style={{ textAlign: "center" }}>Online Learning</h4>
                  <p style={{ textAlign: "center" }}>
                    Join the community of modern thinking students. Highly
                    qualified teacher and millions of people learning.
                  </p>
                  <div className="my-5 d-flex justify-content-center">
                    <button
                      className="btn btn-outline-info"
                      style={{ borderRadius: 0, border: "2px solid" }}
                    >
                      {" "}
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
