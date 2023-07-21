import React from "react";
import "./projects.css";
import doctors from "../project/doctors.PNG";
const Projects = () => {
  return (
    <section className="work-box">
      <div>
        <h2>Latest Project</h2>
        <span>What I will do for you</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="filter-button mixitup-control-active">
              <button className="btn " data-filter=".all">
                All
              </button>
              <button className="btn" data-filter=".product">
                Product
              </button>
              <button className="btn" data-filter=".web-site">
                website
              </button>
              <button className="btn" data-filter=".web-application">
                Web Application
              </button>
            </div>
          </div>
        </div>
        **************
        <div className="row portfolio-gallary">
          <div className="col-lg-4 mix port-box all  web-site  ">
            <div className="port-image">
              <img src={doctors} alt="" />
            </div>
            <div className="port-content">
              <h3>React Application</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                maiores ipsa eligendi velit rem recusandae impedit provident
                architecto officiis suscipit!
              </p>
            </div>
          </div>

          <div className="col-lg-4 mix  port-box all  web-site  ">
            <div className="port-image">
              <img src={doctors} alt="" />
            </div>
            <div className="port-content">
              <h3>React Application</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                maiores ipsa eligendi velit rem recusandae impedit provident
                architecto officiis suscipit!
              </p>
            </div>
          </div>

          <div className="col-lg-4 mix port-box all  web-application  ">
            <div className="port-image">
              <img src={doctors} alt="" />
            </div>
            <div className="port-content">
              <h3>React Application</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                maiores ipsa eligendi velit rem recusandae impedit provident
                architecto officiis suscipit!
              </p>
            </div>
          </div>
          <div className="col-lg-4 mix port-box all  web-application  ">
            <div className="port-image">
              <img src={doctors} alt="" />
            </div>
            <div className="port-content">
              <h3>React Application</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                maiores ipsa eligendi velit rem recusandae impedit provident
                architecto officiis suscipit!
              </p>
            </div>
          </div>
          <div className="col-lg-4 mix port-box all product  ">
            <div className="port-image">
              <img src="" alt="" />
            </div>
            <div className="port-content">
              <h3>React Application</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                maiores ipsa eligendi velit rem recusandae impedit provident
                architecto officiis suscipit!
              </p>
            </div>
          </div>
          <div className="col-lg-4 mix port-box all product  ">
            <div className="port-image">
              <img src="" alt="" />
            </div>
            <div className="port-content">
              <h3>React Application</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                maiores ipsa eligendi velit rem recusandae impedit provident
                architecto officiis suscipit!
              </p>
            </div>
          </div>
        </div>
      </div>
      ************************
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="box-menu">
              <ul>
                <li className="mixitup-control-active" data-filter=".all">
                  All
                </li>
                <li data-filter=".product">product</li>
                <li data-filter=".web-site">web site </li>
                <li data-filter=".web-application">Web Application</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row box-list">
          <div className="col-lg-4 mix box-item  all  web-site  ">
            <img src={doctors} alt="" />
          </div>
          <div className="col-lg-4 mix box-item all web-site">
            <img src={doctors} alt="" />
          </div>
          <div className="col-lg-4 mix box-item all  web-application  ">
            <img src={doctors} alt="" />
          </div>
          <div className="col-lg-4 mix box-item all web-application">
            <img src={doctors} alt="" />
          </div>
          <div className="col-lg-4 mix box-item all product">
            <img src={doctors} alt="" />
          </div>
          <div className="col-lg-4 mix box-item all product">
            <img src={doctors} alt="" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Projects;
