import { useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  ListGroup,
  Badge,
} from "react-bootstrap";
import "./Portfolio.css";

function Portfolio() {
  const [toogleState, setToogleState] = useState(1);

  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <Container id="portfolio">
      <div className="mb-5 pb-5">
        <h1>Portfolio</h1>
        <h5>My personal and comercial projects</h5>
      </div>
      <ListGroup horizontal className="justify-content-center">
        <ListGroup.Item>
          <button className="button-active">
            All{" "}
            <Badge pill className="bg-purple">
              10
            </Badge>
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button>
            Web{" "}
            <Badge pill className="bg-purple">
              4
            </Badge>
          </button>
        </ListGroup.Item>
        <ListGroup.Item>
          <button>
            App{" "}
            <Badge pill className="bg-purple">
              6
            </Badge>
          </button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
export default Portfolio;
