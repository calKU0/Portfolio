import { useState } from "react";
import { CardGroup, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Toogler from "./Toogler";
import Project from "./Project";
import projects from "./projectData";
import "./Portfolio.css";

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Portfolio() {
  const [toogleState, setToogleState] = useState(1);

  const filteredProjects =
    toogleState === 1
      ? projects
      : projects.filter(
          (project) => project.type === (toogleState === 2 ? "Web" : "Other")
        );

  return (
    <Container id="portfolio__container" className="section">
      <div className="mb-5  mt-5 pt-5">
        <h1>Portfolio</h1>
        <h5>My personal and commercial projects</h5>
      </div>
      <Toogler toogleState={toogleState} setToogleState={setToogleState} />

      <Slider {...sliderSettings} className="pt-3">
        {filteredProjects.map((project) => (
          <div key={project.title}>
            <motion.div
              className="h-100 px-md-3 px-0"
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
        ))}
      </Slider>
    </Container>
  );
}

export default Portfolio;
