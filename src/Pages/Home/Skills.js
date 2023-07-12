import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Home/skill.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="Skills" className="skill">
      <Container>
        <Row>
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              non! Lorem ipsum dolor sit amet <br /> consectetur non! Lorem
              ipsum dolor sit amet consectetur non! Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "90",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  90%
                </div>
                <h5>HTML5</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "80",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  80%
                </div>
                <h5>CSS3</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "70",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  70%
                </div>
                <h5>Javascript</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "60",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  60%
                </div>
                <h5>SAAS</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "50",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  50%
                </div>
                <h5>Bootsrap</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "50",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  50%
                </div>
                <h5>Tailwind</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "60",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  60%
                </div>
                <h5>React</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "40",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  40%
                </div>
                <h5>Node</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress"
                  style={{
                    "--value": "40",
                    "--size": "9rem",
                    "--thickness": "1rem",
                  }}
                >
                  40%
                </div>
                <h5>MongoDB</h5>
              </div>
            </Carousel>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
