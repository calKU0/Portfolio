import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Box from "./Box";
import "./About.css";

function About() {
  return (
    <div id="about">
      <h1 className="mb-5">About Me</h1>
      <Container>
        <Row className="text-start">
          <Col>
            <img
              src="https://jaronski.pl/wp-content/uploads/2018/05/400x400.png"
              alt="Krzysztof Kurowski"
            />
          </Col>
          <Col>
            <Row xs={1} md={3} className="text-center">
              <Box />
            </Row>
            <Row className="pt-3">
              <span>
                I'm a backend developer with a strong focus on ASP.NET and .NET
                technologies, building efficient and scalable solutions.
                Recently, I've been expanding my skill set into frontend
                development, working with HTML, CSS, JavaScript, and React to
                become a more versatile full-stack developer. My goal is to
                create seamless and user-friendly applications by combining
                solid backend logic with engaging frontend experiences.
              </span>
            </Row>
            <button className="button mt-5">Download CV</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
