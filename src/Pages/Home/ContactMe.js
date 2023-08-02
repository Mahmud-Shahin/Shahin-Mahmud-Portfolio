import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
// import firebaseDB from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import "./contactme.scss";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c0fkljq",
        "template_ttveggk",
        form.current,
        "BFgJFDBApTVr0grZw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = state;
  const handlSubmit = (s) => {
    s.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please Provide value in each field");
    } else {
      // firebaseDB.child("contacts").push(state);
      setState({ name: "", email: "", subject: "", message: "" });
      toast.success("The message Send SuccessFully");
    }
  };

  const handleInputChange = (s) => {
    let { name, value } = s.target;
    setState({ ...state, [name]: value });
  };
  return (
    <section className="contact" id="contactme">
      <div className="main-text">
        <h2>Contact me</h2>
        <span>Ask me any Question?</span>
      </div>
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4 ">Send me massage</h3>
                    <form
                      ref={form}
                      action=""
                      id="#contactform"
                      className="contactform"
                      // onSubmit={handlSubmit}
                      onSubmit={sendEmail}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Your name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-2">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="subject"
                              className="form-control"
                              placeholder="subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-2">
                            <textarea
                              type="text"
                              name="message"
                              className="form-control"
                              placeholder="Your message"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-2">
                            <input
                              type="submit"
                              value="send message"
                              className="btn btn-warning"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3 className="mb-4">Contact Me</h3>

                    <div className="dbox w-100 d-flex align-items-start mb-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker "></span>
                      </div>
                      <div className="text-pl-3 ml-3">
                        <p>
                          <span>Address: </span> Ulon, Rampura, Dhaka
                        </p>
                      </div>
                    </div>

                    <div className="dbox w-100 d-flex align-items-center mb-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text-pl-3 ml-3">
                        <p>
                          <span>Phone: </span> 01643820208 , 01516791453
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center mb-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text-pl-3 ml-3">
                        <p>
                          <span>Email: </span> Shahinmahmud184@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center mb-4">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text-pl-3 ml-3">
                        <p>
                          <span>Website: </span>
                          <a href="#">Shahin Mahmud.Com</a>
                        </p>
                      </div>
                    </div>
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
