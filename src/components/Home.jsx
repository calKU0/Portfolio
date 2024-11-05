import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <Container id="home">
      <Row className="d-flex justify-content-center align-items-center h-100 text-start">
        <Col xs={12} md={8}>
          <h1>Krzysztof Kurowski</h1>
          <h3>Web developer</h3>
          <h6 id="home__desctiption">
            I'm a developer based in Poland. I'm very dedicated and passionate
            about my work.
          </h6>
          <button className="button mt-4">Let's contact</button>
          <Row className="pt-5">
            <Col md={1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="black"
                class="bi bi-mouse"
                viewBox="0 0 16 22"
              >
                <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5" />
              </svg>
            </Col>
            <Col className="text-start">
              <h3>Scroll Down</h3>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <img
            src="https://jaronski.pl/wp-content/uploads/2018/05/400x400.png"
            alt="Krzysztof Kurowski"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
