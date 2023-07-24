import React from "react";
import Shahin from "../logo/Shahin Mahmud.png";
// import background from "../logo/aboutmeback.jpeg";
import "./aboutme.css";
const AboutMe = () => {
  return (
    <div
      className="hero"
      id="aboutme"
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Shahin} alt="" className="photo" />
        <div>
          <h1 className="text-5xl font-bold">
            Hi, This is <span className="">Shahin Mahmud</span> <br />
          </h1>
          <div className="animation">
            <div className="static-text">And I am</div>
            <div className="Dynamic-text text-warning">
              <ul>
                <li>
                  <span>FrontEnd Developer</span>
                </li>
                <li>
                  <span>Web Developer</span>
                </li>
                <li>
                  <span>BackEnd Developer</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="py-6 text-xl">
            I am a Web Developer. If you need any kind of Web Application please
            Contact With Me. I will make a better service for you.
          </p>
          <button className="btn btn-active btn-warning">Let's Connect</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
