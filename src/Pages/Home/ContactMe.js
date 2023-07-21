import React from "react";

import "./contactme.scss";

const ContactMe = () => {
  const handlSubmit = () => {};

  const handleInputChange = () => {};
  return (
    <section className="contact" id="contactme">
      <div className="main-text">
        <span>Ask me any Question?</span>
        <h2>Contact me</h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send me massage</h3>
                    <form
                      action=""
                      id="#contactform"
                      className="contactform"
                      onSubmit={handlSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your name"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your email"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your name"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
