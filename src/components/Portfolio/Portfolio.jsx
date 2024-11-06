import { useState } from "react";
import { CardGroup, Container, Row } from "react-bootstrap";
import Toogler from "./Toogler";
import Project from "./Project";
import projects from "./projectData";
import "./Portfolio.css";

function Portfolio() {
  const [toogleState, setToogleState] = useState(1);

  const filteredProjects =
    toogleState === 1
      ? projects
      : projects.filter(
          (project) => project.type === (toogleState === 2 ? "Web" : "Other")
        );

  return (
    <Container id="portfolio">
      <div className="mb-5 pb-5">
        <h1>Portfolio</h1>
        <h5>My personal and commercial projects</h5>
      </div>
      <Toogler toogleState={toogleState} setToogleState={setToogleState} />
      <CardGroup>
        <Row xs={1} md={3} className="g-4 pt-5">
          {filteredProjects.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              text={project.text}
              title={project.title}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
}
export default Portfolio;
