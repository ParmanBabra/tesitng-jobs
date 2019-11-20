import React, { Fragment } from "react";
import logo from "./logo.svg";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Nakarin Satayasai
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#experience">
                EXPERIENCE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education">
                EDUCATION
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                PROJECTS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#demo">
                DEMO
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                SKILLS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#expertise">
                EXPERTISE
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="parallax"></div>
      <div class="section-info">
        <div class="container">
          <div class="row panel">
            <div class="col-md panel-image">
              <img src="/profile.jpg" class="img-fluid" />
            </div>
            <div class="col-md panel-detail">
              <p class="h1">Nakarin Satayasai</p>
              <p class="h5">Technical Specialist</p>
              <p class="h5 label-info">Phone:</p>
              <p class="label-info-value">096-987-3636</p>
              <p class="h5 label-info">Email:</p>
              <p class="label-info-value">Parmanbabra2529@gmail.com</p>
              <p class="h5 label-info">Address:</p>
              <p class="label-info-value">Parmanbabra@hotmail.com</p>
              <p class="h5 label-info">Date of Birth:</p>
              <p class="label-info-value">25 November 1986</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-hello">
        <div class="container">
          <div class="row contact">
            <div class="icon">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />
            </div>
            <div class="icon">
              <FontAwesomeIcon icon={["fab", "line"]} size="2x" />
            </div>
            <div class="icon">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </div>
            <div class="icon">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </div>
          </div>
          <div class="row hello d-flex">
            <p class="h2">Hello! I'm Nakarin</p>
            <p class="lead">
              I like results-driven, customer-focused, articulate and analytical
              Software Engineer who can think “out of the box”. Strong in design
              and integration problem solving skills. Expert in C#, Javascript,
              .NET, NodeJs, and T-SQL with database analysis and design. Skilled
              in developing business plans, requirements specifications, user
              documentation, and architectural systems research. Interested in a
              challenging technical track career in an application development
              environment.
            </p>
          </div>
        </div>
      </div>

      <div id="experience" class="mb-4">
        <p class="h4 text-center my-4 ">EXPERIENCE</p>
        <hr class="mb-3" />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class="timeline">
                <li>
                  <div class="header">
                    <p class="h5">2009-2016</p>
                    <p class="lead">Developer</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Iconcepts.co.th</p>
                    <p class="lead">
                      As a technology focused company, with a vision to deliver
                      solutions to our customers that otherwise would not be
                      achievable. This is a bold statement; however, we believe
                      with our track record, we have the backing of our
                      customers and sufficient evidence of our capability. At
                      IConcepts, we are not only a software house; we make the
                      impossible, possible. With IConcepts extensive oversea
                      large scale project success and quality driven approach
                      and the only company in Thailand that has been CMMI level
                      3 certified.
                    </p>
                    <p class="lead">
                      imageOur core product is our world class Livescan
                      solutions. We have specific domain knowledge regarding
                      fingerprint processing, image processing, and fingerprint
                      matching. Our team have extensive telecommunication
                      experience, software development processes, and all facets
                      of Microsoft technologies.
                    </p>
                    <p class="lead">
                      As IConcepts continues to grow at an expediential rate we
                      believe that IConcepts is in a position to help your
                      business in transforming your IT department from a cost
                      center into a real revenue generating department. We have
                      included in the next section a brief on some of our
                      solution that we have developed for our customers.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">2016-2018</p>
                    <p class="lead">Senior Software Developer</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Iconext.co.th</p>
                    <p class="lead">
                      Our main business is to provide various IT relating
                      services e.g. system consulting service to support
                      customers’ business activities, application system
                      development of core system/operation system, package
                      system installation service, system operation and
                      maintenance service, IT outsourcing service,
                      server/network construction.
                    </p>
                    <p class="lead">
                      In addition, iCONEXT has a “Project Coordinator Team” who
                      can support many languages with a deep knowledge of IT and
                      manufacturing business, so we can effectively support
                      requirement definition and specification confirmation by
                      English as well as Japanese language.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">2018-Present</p>
                    <p class="lead">Technical Specialist</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Iconext.co.th</p>
                    <p class="lead">
                      Our main business is to provide various IT relating
                      services e.g. system consulting service to support
                      customers’ business activities, application system
                      development of core system/operation system, package
                      system installation service, system operation and
                      maintenance service, IT outsourcing service,
                      server/network construction.
                    </p>
                    <p class="lead">
                      In addition, iCONEXT has a “Project Coordinator Team” who
                      can support many languages with a deep knowledge of IT and
                      manufacturing business, so we can effectively support
                      requirement definition and specification confirmation by
                      English as well as Japanese language.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="education" class="mb-4">
        <hr class="mb-3 mt-4" />
        <p class="h4 text-center my-4 ">EDUCATION</p>
        <hr class="mb-3" />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class="timeline">
                <li>
                  <div class="header">
                    <p class="h5">2005-2009</p>
                    <p class="lead">Bachelor of computer science</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">
                      Chandrakasem Rajabhat University
                    </p>
                    <p class="lead">
                      At present, Chandrakasem Rajabhat University is a tertiary
                      education institution, offering bachelor degrees in public
                      and non-government hours, and also offering graduate,
                      master and doctoral degrees. Society in every situation,
                      teachers and personnel have continuous self-development as
                      well as learning management. Technology and information
                      systems to be universities with international standards
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">2009-2014</p>
                    <p class="lead">Master Degree of computer science</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">
                      Dhurakij Pundit University
                    </p>
                    <p class="lead">
                      DPU LSS System The DPU LSS System (DPU Learning Support
                      System) is a teaching support system. In the form of a
                      personal homepage for teachers Is a system that helps
                      increase channels Communication between teachers and
                      students helps to reduce the gap between them. For the
                      Master to be able Send important news and information
                      about academic subjects to students thoroughly And
                      students can follow the news Of subjects anywhere,
                      anytime. DPU LSS system consists of professors'
                      information, announcements, academic articles. Teaching
                      documents, job submission, discussion board, hourly
                      schedule, consultation You can also send messages directly
                      to teachers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" class="mb-4">
        <hr class="mb-3 mt-4" />
        <p class="h4 text-center my-4 ">PROJECTS</p>
        <hr class="mb-3" />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <ul class="timeline">
                <li>
                  <div class="header">
                    <p class="h5">Jan 2009</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">KCE</p>
                    <p class="lead">
                      The system is designed on the mainboard electronic.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Jun 2009</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">KCE K2</p>
                    <p class="lead">
                      The system for monitoring the production data current.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Feb 2011</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">ONYX Booking System</p>
                    <p class="lead">
                      Development and design of the booking hotel rooms in Onyx,
                      a system that is running on Windows azure.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Jan 2012</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">
                      Ministry of Science and Technology (MOST) Social network
                    </p>
                    <p class="lead">
                      Develop data collection and research scientists, and
                      social systems online
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Dec 2013</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">E-Fingerprint</p>
                    <p class="lead">
                      Development of the issue to the agency, the Immigration
                      and structured reporting system
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Mar 2014</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Unilever</p>
                    <p class="lead">
                      Design and storage networking stock to stores Unilever.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Aug 2015</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Tiffany</p>
                    <p class="lead">
                      Design and created system booking tickets to the Tiffany
                      Show
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Sep 2016</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">GenApp Archiving</p>
                    <p class="lead">
                      A system that scans documents to classify and store loan
                      application documents.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Sep 2016</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">
                      Legal and Collections Services System (LCSS)
                    </p>
                    <p class="lead">
                      Legal record system for monitoring legal liabilities.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Sep 2016</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Kanban Board</p>
                    <p class="lead">
                      Systems that store jobs with kanban boards
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Sep 2016</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">
                      Legal and Collections Services System II (LCSS Web Mobile)
                    </p>
                    <p class="lead">
                      System to view the prosecution information so that the
                      lawyer can browse the prosecution information from the
                      place.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Sep 2016</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Boon My Choice</p>
                    <p class="lead">
                      E-commerce system for selling offerings , which customer
                      can organize the offerings themselves
                    </p>
                  </div>
                </li>
                <li>
                  <div class="header">
                    <p class="h5">Sep 2016</p>
                  </div>
                  <div class="content">
                    <p class="h5 font-weight-normal">Autolone</p>
                    <p class="lead">
                      Take care of the system to apply for a car loan. Which can
                      be applied via the salesman's tablet
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="demo" class="mb-4">
        <hr class="mb-3 mt-0" />
        <p class="h4 text-center my-4 ">DEMO PROJECTS</p>
        <hr class="mb-3" />
      </div>
      <div id="skills">
        <hr class="mb-3 mt-4" />
        <p class="h4 text-center my-4 ">SKILLS</p>
        <hr class="mb-0" />
        <div class="parallax">
          <div class="container">
            <div class="row py-5">
              <div class="col-6 text-center outer-skill">
                <p class="h5 skill">C Sharp .Net - Advanced</p>
              </div>
              <div class="col-6 text-center outer-skill">
                <p class="h5 skill">Javasctipt NodeJs - Advanced</p>
              </div>
              <div class="col-6 text-center outer-skill">
                <p class="h5 skill">SQL Database - Advanced</p>
              </div>
              <div class="col-6 text-center outer-skill">
                <p class="h5 skill">NoSQL Database - Advanced Scalable</p>
              </div>
              <div class="col-6 text-center outer-skill">
                <p class="h5 skill">Fontend ReactJs - Proficient</p>
              </div>
              <div class="col-6 text-center outer-skill">
                <p class="h5 skill">Google Cloud - Proficient</p>
              </div>
              <div class="col-6 text-center outer-skill">
                <p class="h5 skill">Microsoft Azure - Proficient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="expertise" class="mb-4">
        <hr class="mb-3 mt-0" />
        <p class="h4 text-center my-4 ">EXPERTISE</p>
        <hr class="mb-3" />
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <p class="h6">Full Stack Web Developer</p>
              <p class="em">
                Highly skilled computer programmer is comfortable with both
                front and back end programming. Full Stack Developers are
                responsible for developing and designing front end web
                architecture, ensuring the responsiveness of applications and
                working alongside graphic designers for web design features,
                among other duties.
              </p>
            </div>
            <div class="col-sm">
              <p class="h6">Cloud Architectural</p>
              <p class="em">
                Desing components in terms of databases, software capabilities,
                applications, etc. engineered to leverage the power of cloud
                resources to solve business problems. Cloud architecture defines
                the components as well as the relationships between them.
                Providing the users with high bandwidth, allowing users to have
                uninterrupted access to data and applications, on-demand agile
                network with possibility to move quickly and efficiently between
                servers or even between clouds and most importantly network
                security
              </p>
            </div>
            <div class="col-sm">
              <p class="h6">Fastest Technology Learning</p>
              <p class="em">
                Able to learn technology quickly And can be used in projects to
                meet the needs of customers. Therefore suitable for
                organizations that want to find people to research various
                technologies In order to meet the rapidly changing business
                needs in this modern era.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <hr class="mb-3 mt-0" />
        <p class="h4 text-center my-4 ">CONTACT ME</p>
        <hr class="mb-0" />
        <div class="container">
          <div class="row">
            <div class="col-sm border-right">
              <form class="p-5">
                <div class="row">
                  <div class="col-sm-6 mb-3 mt-1">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-sm-6 mb-3 mt-1">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-sm-12 mb-3">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="col-sm-12 mb-3">
                    <textarea
                      class="form-control"
                      type="text"
                      rows="6"
                      placeholder="Message"
                    />
                  </div>
                  <div class="col-sm-12 mb-3">
                    <button type="button" class="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-sm">
              <div class="p-5 h-100 d-flex flex-column">
                <p class="h4 mb-0">Nakarin Satayasai</p>
                <p class="lead">Technical Specialist</p>
                <p class="h6 mb-0">Phone:</p>
                <p class="small">096-987-3636</p>
                <p class="h6 mb-0">Email:</p>
                <p class="small">Parmanbabra2529@gmail.com</p>
                <div class="flex-grow-1 d-flex flex-column justify-content-end">
                  <hr class="border-top w-100" />
                  <div class="d-flex flex-row">
                    <div class="mx-3">
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />
                    </div>
                    <div class="mx-3">
                      <FontAwesomeIcon icon={["fab", "line"]} size="2x" />
                    </div>
                    <div class="mx-3">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                    </div>
                    <div class="mx-3">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div class="container my-3">© 2019 By Nakarin Satayasai.</div>
      </div>
    </Fragment>
  );
}

export default App;