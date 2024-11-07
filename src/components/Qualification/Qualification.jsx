import { useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Timeline from "./Timeline";
import "./Qualification.css";

function Qualification() {
  const [toogleState, setToogleState] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toogleTab = (index) => {
    if (toogleState !== index) {
      setIsTransitioning(true);
      setTimeout(() => {
        setToogleState(index);
        setIsTransitioning(false);
      }, 600);
    }
  };

  return (
    <Container id="qualification">
      <div className="mb-5 pb-5 mt-5 pt-5 pt-md-0 mt-md-0">
        <h1>Qualifications</h1>
        <h5>My personal journey</h5>
      </div>

      <Card className="qualification__card">
        <Row md={2} className="text-ceter">
          <Col className="text-end">
            <Card.Title className="mb-3">
              <button
                className={
                  toogleState === 1
                    ? "button-transparent"
                    : "button-transparent text-muted"
                }
                onClick={() => toogleTab(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-book"
                  viewBox="0 0 16 18"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>{" "}
                Education
              </button>
            </Card.Title>
          </Col>
          <Col className="text-start">
            <Card.Title className="mb-3">
              <button
                className={
                  toogleState === 2
                    ? "button-transparent"
                    : "button-transparent text-muted"
                }
                onClick={() => toogleTab(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-briefcase"
                  viewBox="0 0 16 19"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                </svg>{" "}
                Work
              </button>
            </Card.Title>
          </Col>
        </Row>
        <div
          className={`timeline-container ${
            isTransitioning ? "fade-out" : "fade-in"
          }`}
        >
          <Timeline type={toogleState === 1 ? "education" : "work"} />
        </div>
      </Card>
    </Container>
  );
}

export default Qualification;
