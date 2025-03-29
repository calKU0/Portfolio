import { Col, Row, Container } from "react-bootstrap";
import Box from "./Box";
import "./About.css";

function About() {
  return (
    <Container id="about__container" className="section">
      <div className="mb-3 pb-3 pt-5 pt-md-0 mt-md-0 mb-md-5 pb-md-5">
        <h1>About Me</h1>
        <h4>Hello!</h4>
      </div>
      <Row className="text-start g-3" xs={1} sm={1} md={2}>
        <Col className="selfie-container" md={5}>
          <img src="selfie.jpg" alt="Krzysztof Kurowski" />
        </Col>
        <Col md={7}>
          <Row xs={1} sm={2} md={3} className="text-center p-1 g-3">
            <Box />
          </Row>
          <Row className="pt-3">
            <span>
              I&apos;m a backend developer with a strong focus on ASP.NET and
              .NET technologies, building efficient and scalable solutions.
              Recently, I&apos;ve been expanding my skill set into frontend
              development, working with HTML, CSS, JavaScript, Blazor and React
              to become a more versatile full-stack developer. My goal is to
              create seamless and user-friendly applications by combining solid
              backend logic with engaging frontend experiences.
            </span>
          </Row>
          <button className="button mt-5">
            Download CV{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-file-earmark-arrow-down"
              viewBox="0 0 16 17"
            >
              <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
