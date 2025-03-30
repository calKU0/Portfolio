import { ListGroup, Badge } from "react-bootstrap";
import projects from "./projectData";

function Toogler({ toogleState, setToogleState }) {
  const allProjects = projects.length;
  const backendProjects = projects.filter(
    (project) => project.type === "Backend"
  ).length;
  const frontendProjects = projects.filter(
    (project) => project.type === "Frontend"
  ).length;
  const fullstackProjects = projects.filter(
    (project) => project.type === "Fullstack"
  ).length;

  return (
    <ListGroup horizontal className="justify-content-center d-flex flex-wrap">
      <ListGroup.Item
        className={`portfolio__button ${
          toogleState === 1 ? "portfolio__button-active" : ""
        } col-6 col-sm-3 p-2 border-start`}
      >
        <button
          className="button-transparent portfolio-item-button"
          onClick={() => setToogleState(1)}
        >
          <span>All </span>
          <Badge pill className="bg-purple">
            {allProjects}
          </Badge>
        </button>
      </ListGroup.Item>

      <ListGroup.Item
        className={`portfolio__button ${
          toogleState === 2 ? "portfolio__button-active" : ""
        } col-6 col-sm-3 p-2 border-start`}
      >
        <button
          className="button-transparent portfolio-item-button"
          onClick={() => setToogleState(2)}
        >
          <span>Backend </span>
          <Badge pill className="bg-purple">
            {backendProjects}
          </Badge>
        </button>
      </ListGroup.Item>

      <ListGroup.Item
        className={`portfolio__button ${
          toogleState === 3 ? "portfolio__button-active" : ""
        } col-6 col-sm-3 p-2 border-start`}
      >
        <button
          className="button-transparent portfolio-item-button"
          onClick={() => setToogleState(3)}
        >
          <span>Frontend </span>
          <Badge pill className="bg-purple">
            {frontendProjects}
          </Badge>
        </button>
      </ListGroup.Item>

      <ListGroup.Item
        className={`portfolio__button ${
          toogleState === 4 ? "portfolio__button-active" : ""
        } col-6 col-sm-3 p-2 border-start`}
      >
        <button
          className="button-transparent portfolio-item-button"
          onClick={() => setToogleState(4)}
        >
          <span>Fullstack </span>
          <Badge pill className="bg-purple">
            {fullstackProjects}
          </Badge>
        </button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Toogler;
