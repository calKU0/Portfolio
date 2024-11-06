import { ListGroup, Badge } from "react-bootstrap";
import projects from "./projectData";

function Toogler({ toogleState, setToogleState }) {
  const webProjects = projects.filter(
    (project) => project.type === "Web"
  ).length;
  const otherProjects = projects.length - webProjects;

  return (
    <ListGroup horizontal className="justify-content-center">
      <ListGroup.Item
        className={
          toogleState === 1
            ? "portfolio__button portfolio__button-active"
            : "portfolio__button"
        }
      >
        <button
          className="button-transparent"
          onClick={() => setToogleState(1)}
        >
          All{" "}
          <Badge pill className="bg-purple">
            {webProjects + otherProjects}
          </Badge>
        </button>
      </ListGroup.Item>
      <ListGroup.Item
        className={
          toogleState === 2
            ? "portfolio__button portfolio__button-active"
            : "portfolio__button"
        }
      >
        <button
          className="button-transparent"
          onClick={() => setToogleState(2)}
        >
          Web{" "}
          <Badge pill className="bg-purple">
            {webProjects}
          </Badge>
        </button>
      </ListGroup.Item>
      <ListGroup.Item
        className={
          toogleState === 3
            ? "portfolio__button portfolio__button-active"
            : "portfolio__button"
        }
      >
        <button
          className="button-transparent"
          onClick={() => setToogleState(3)}
        >
          Other{" "}
          <Badge pill className="bg-purple">
            {otherProjects}
          </Badge>
        </button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Toogler;
