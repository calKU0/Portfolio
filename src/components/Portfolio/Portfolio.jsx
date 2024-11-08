import { useState, useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Toogler from "./Toogler";
import Project from "./Project";
import projects from "./projectData";
import "./Portfolio.css";

function Portfolio() {
  const [toogleState, setToogleState] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const updatedFilteredProjects =
      toogleState === 1
        ? projects
        : projects.filter(
            (project) => project.type === (toogleState === 2 ? "Web" : "Other")
          );

    const newSlides = [];
    for (let i = 0; i < updatedFilteredProjects.length; i += 3) {
      newSlides.push(updatedFilteredProjects.slice(i, i + 3));
    }

    setFilteredProjects(updatedFilteredProjects);
    setSlides(newSlides);
  }, [toogleState]);

  const handleToggleChange = (newState) => {
    setToogleState(newState);
  };

  return (
    <Container id="portfolio__container" className="section">
      <div className="mb-3 pb-3 pt-5 mt-md-0 mb-md-5 pb-md-5">
        <h1>Portfolio</h1>
        <h5>My personal and commercial projects</h5>
      </div>
      <Toogler toogleState={toogleState} setToogleState={handleToggleChange} />

      <Carousel
        interval={null}
        className="pt-3"
        prevIcon={<AiOutlineLeft className="carousel-control-custom" />}
        nextIcon={<AiOutlineRight className="carousel-control-custom" />}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row xs={1} md={3} className="g-4">
              {slide.map((project) => (
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
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Portfolio;
