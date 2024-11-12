import { Col, Row, Container } from "react-bootstrap";
import Socials from "./Socials";
import "./Home.css";

function Home() {
  return (
    <Container id="home__container" className="section">
      <Row className="d-flex justify-content-center align-items-center text-start">
        <Col
          xs={0}
          md={1}
          className="order-md-1 mb-3 d-flex justify-content-center"
        >
          <Socials />
        </Col>
        <Col xs={0} md={4} className="order-md-3 mb-3 selfie-container">
          <img src="selfie.jpg" alt="Krzysztof Kurowski" />
        </Col>

        <Col xs={12} md={7} className="order-md-2">
          <h1>Krzysztof Kurowski</h1>
          <h3>Web developer</h3>
          <h6 id="home__desctiption" className="mb-4 pb-md-3 pt-1">
            I&apos;m a junior backend developer based in Poland. I&apos;m very
            dedicated and passionate about my work.
          </h6>

          <a href="#contact" className="home__button">
            <button className="button mt-md-4">
              Let&apos;s contact &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 17"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </button>
          </a>
          <Row
            className="pt-md-5 pt-3 scroll-row d-flex justify-content-center position-absolute bottom-0 px-4 px-md-0"
            md={1}
          >
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                className="bi bi-mouse"
                viewBox="0 0 16 18"
              >
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
              </svg>
              Scroll Down{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                />
              </svg>
            </h3>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
