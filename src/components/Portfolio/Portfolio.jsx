import { useState } from "react";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
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
      <div className="mb-5 pb-5 mt-5 pt-5">
        <h1>Portfolio</h1>
        <h5>My personal and commercial projects</h5>
      </div>
      <Toogler toogleState={toogleState} setToogleState={setToogleState} />

      <CardGroup>
        <Row xs={1} md={3} className="g-4 pt-5">
          {filteredProjects.map((project) => (
            <Col key={project.title}>
              <div className="h-100 d-flex flex-column">
                <motion.div
                  className="h-100"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    },
                    duration: 0.4,
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Project
                    image={project.image}
                    text={project.text}
                    title={project.title}
                    github={project.github}
                    demo={project.demo}
                  />
                </motion.div>
              </div>
            </Col>
          ))}
        </Row>
      </CardGroup>
    </Container>
  );
}

export default Portfolio;
