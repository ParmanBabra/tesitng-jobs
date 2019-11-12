import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "components/CV/Cv.css";

export default class Cv extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-4 image">
            <img src="/profile.jpg" />
          </div>
          <div className="col-8 text-left">
            <div class="overpoint">
              <h1 className="">OVERPOINT</h1>
              <hr className="line" />
              <p className="">
                My name is Nakarin Satayasai. I like results-driven,
                customer-focused, articulate and analytical Software Engineer
                who can think “out of the box”. Strong in design and integration
                problem solving skills. Expert in C#, Javascript, .NET, NodeJs,
                and T-SQL with database analysis and design. Skilled in
                developing business plans, requirements specifications, user
                documentation, and architectural systems research. Interested in
                a challenging technical track career in an application
                development environment.
              </p>
            </div>
          </div>
        </div>
        <div className="row overlap-row">
          <div className="col-5 name text-left">
            <div className="inner-name">
              <h2>Nakarin Satayasai</h2>
              <h4 className="font-weight-normal">
                Full Stack Software Engineer
              </h4>
            </div>
          </div>
          <div className="col-7 contact text-left row">
            <div className="inner-contact row">
              <div className="col-12 mt-3">
                <span className="icon">
                  <FontAwesomeIcon icon="address-card" size="1x" />
                </span>
                2098/765 Soi Hua Mak 31, Hua Mak, Bang Kapi, Bangkok, 10240
                Thailand
              </div>
              <div className="col-4">
                <span className="icon">
                  <FontAwesomeIcon icon="phone" size="1x" />
                </span>
                096-987-3636
              </div>
              <div className="col-6">
                <span className="icon">
                  <FontAwesomeIcon icon="envelope" size="1x" />
                </span>
                Parmanbabra2529@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 column-exp-1">
            <div className="d-flex flex-column text-left inner">
              <h4 className="label-experience mt-5">EXPERIENCE</h4>
              <hr className="line" />
              <h5>Software Developer</h5>
              <h5>2009-2016</h5>
              <p>
                There are more than 5 years experience working in an Agile
                development process and programming applications, especially web
                application.
              </p>
              <hr className="new-line" />
              <h5>Senior Software Developer</h5>
              <h5>2016-2017</h5>
              <p>
                There are more than 8 years experience working in an Agile
                development process and programming applications, especially web
                application.
              </p>
              <hr className="new-line" />
              <h5>Technical Specialist</h5>
              <h5>2017-present</h5>
              <p>
                There are more than 10 years experience working in an Agile
                development process and programming applications, especially web
                application.
              </p>
              <hr className="new-line" />
              <h4 className="label-experience mt-5">FOLLOWER ME</h4>
              <hr className="line" />
              <hr className="new-line" />
              <h5>Facebook</h5>
              <p>https://www.facebook.com/Parmanbabra</p>
              <h5>LinkedIn</h5>
              <p>www.linkedin.com/in/nakarin-satayasai-21515816b</p>
            </div>
          </div>
          <div className="col-8 column-exp-2">
            <div className="d-flex flex-column text-left inner">
              <h4 className="label-experience mt-5">EXPERIENCE</h4>
              <hr className="line" />
              <div className="d-flex">
                <div className="col-4 font-weight-bold">
                  <h5>JUN 2012</h5>
                </div>
                <div className="col-6">
                  <h5>ONYX Booking System</h5>
                  <p>
                    Development and design of the booking hotel rooms in Onyx, a
                    system that is running on Windows azure.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-4 font-weight-bold">
                  <h5>OCT 2013</h5>
                </div>
                <div className="col-6">
                  <h5>Ministry of Science and Technology</h5>
                  <p>
                    Ministry of Science and Technology (MOST) Social network
                    Develop data collection and research scientists, and social
                    systems online
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-4 font-weight-bold">
                  <h5>JAN 2015</h5>
                </div>
                <div className="col-6">
                  <h5>Tiffany</h5>
                  <p>
                    Design and created system booking tickets to the Tiffany
                    Show, a system that is running on Windows azure.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-4 font-weight-bold">
                  <h5>JAN 2016</h5>
                </div>
                <div className="col-6">
                  <h5>Legal and Collections Services System (LCSS) </h5>
                  <p>Legal record system for monitoring legal liabilities.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-4 font-weight-bold">
                  <h5>AUG 2017</h5>
                </div>
                <div className="col-6">
                  <h5>Autolone</h5>
                  <p>
                    Take care of the system to apply for a car loan. Which can
                    be applied via the salesman's tablet.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-4 font-weight-bold">
                  <h5>OCT 2017</h5>
                </div>
                <div className="col-6">
                  <h5>Legal and Collections Services System II (Web Mobile)</h5>
                  <p>
                    System to view the prosecution information so that the
                    lawyer can browse the prosecution information from the
                    place.
                  </p>
                </div>
              </div>
              <h4 className="label-experience mt-5">HOBBIES</h4>
              <hr className="line" />
              <div className="d-flex flex-row">
                <div className="col-3">
                  <span className="icon-sm">
                    <FontAwesomeIcon icon="plug" size="sm" />
                  </span>
                  IOT
                </div>
                <div className="col-3">
                  <span className="icon-sm">
                    <FontAwesomeIcon icon="project-diagram" size="sm" />
                  </span>
                  Programing
                </div>
                <div className="col-3">
                  <span className="icon-sm">
                    <FontAwesomeIcon icon="brush" size="sm" />
                  </span>
                  3D-Modeling
                </div>
                <div className="col-3">
                  <span className="icon-sm">
                    <FontAwesomeIcon icon="film" size="sm" />
                  </span>
                  Watch Animation
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
