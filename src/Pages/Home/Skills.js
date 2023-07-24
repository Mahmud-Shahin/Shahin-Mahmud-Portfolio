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
            <div className="main-text">
              <h2> My Skill</h2>
              <span>All my Skills here</span>
            </div>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "90",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  90%
                </div>
                <h5 className="text-warning">HTML5</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "80",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  80%
                </div>
                <h5 className="text-warning">CSS3</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "70",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  70%
                </div>
                <h5 className="text-warning">Javascript</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "60",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  60%
                </div>
                <h5 className="text-warning">SAAS</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "50",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  50%
                </div>
                <h5 className="text-warning">Bootsrap</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "50",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  50%
                </div>
                <h5 className="text-warning">Tailwind</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "60",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  60%
                </div>
                <h5 className="text-warning">React</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "40",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  40%
                </div>
                <h5 className="text-warning">Node</h5>
              </div>
              <div className="item">
                <div
                  className="radial-progress text-warning"
                  style={{
                    "--value": "40",
                    "--size": "7rem",
                    "--thickness": "1rem",
                  }}
                >
                  40%
                </div>
                <h5 className="text-warning">MongoDB</h5>
              </div>
            </Carousel>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
