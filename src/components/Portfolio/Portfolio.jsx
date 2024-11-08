import { useState } from "react";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Toogler from "./Toogler";
import Project from "./Project";
import projects from "./projectData";
import "./Portfolio.css";

function Portfolio() {
  const [toogleState, setToogleState] = useState(1);
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects =
    toogleState === 1
      ? projects
      : projects.filter(
          (project) => project.type === (toogleState === 2 ? "Web" : "Other")
        );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleToggleChange = (newState) => {
    setToogleState(newState);
    setVisibleCount(3);
  };

  return (
    <Container id="portfolio__container" className="section">
      <div className="mb-3 pb-3 pt-5 pt-md-0 mt-md-0 mb-md-5 pb-md-5">
        <h1>Portfolio</h1>
        <h5>My personal and commercial projects</h5>
      </div>
      <Toogler toogleState={toogleState} setToogleState={handleToggleChange} />

      <CardGroup>
        <Row xs={1} md={3} className="g-4 pt-5">
          {visibleProjects.map((project) => (
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
      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-4">
          <button className="button" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </Container>
  );
}

export default Portfolio;
