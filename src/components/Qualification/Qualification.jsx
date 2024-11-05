import { Container, Col, Row, Card, CardBody } from "react-bootstrap";
import "./Qualification.css";

function Qualification() {
  return (
    <Container id="qualification">
      <div className="mb-5 pb-5">
        <h1>Qualifications</h1>
        <h5>My personal journey</h5>
      </div>
      <Row>
        <Col>
          <Card className="widget-card bsb-timeline-8 border-light shadow-sm">
            <CardBody className="p-4">
              <Row md={2} className="text-ceter">
                <Col className="text-end">
                  <Card.Title className="widget-card-title mb-3">
                    Education
                  </Card.Title>
                </Col>
                <Col className="text-start">
                  <Card.Title className="widget-card-title mb-3">
                    Work
                  </Card.Title>
                </Col>
              </Row>
              <ul className="timeline">
                <li className="timeline-item">
                  <div className="timeline-body">
                    <div className="timeline-meta">
                      <span>4 years</span>
                    </div>
                    <div className="timeline-content timeline-indicator">
                      <h6 className="mb-1">Technikum Informatyczne</h6>
                      <span className="text-secondary fs-7">2018-2022</span>
                    </div>
                  </div>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Qualification;
