import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Toogler from "./Toogler";
import Project from "./Project";
import projects from "./projectData";
import "./Portfolio.css";

// Import your custom arrows here
const LeftArrow = ({ className, onClick }) => (
  <div
    className={className}
    style={{
      left: "25px",
      top: "100%",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="black"
      className="bi bi-arrow-left-circle"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
      />
    </svg>
  </div>
);

const RightArrow = ({ className, onClick }) => (
  <div
    className={className}
    style={{
      right: "35px",
      top: "100%",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="black"
      className="bi bi-arrow-right-circle"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
      />
    </svg>
  </div>
);

// Slider settings with custom arrows
const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
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

  useEffect(() => {
    const container = document.getElementById("portfolio__container");
    container.classList.add("transitioning");

    const timeout = setTimeout(() => {
      container.classList.remove("transitioning");
    }, 800);

    return () => clearTimeout(timeout);
  }, [toogleState]);

  return (
    <Container id="portfolio__container" className="section">
      <div className="mb-5 mt-5">
        <h1>Portfolio</h1>
        <h5>My personal and commercial projects</h5>
      </div>
      <Toogler toogleState={toogleState} setToogleState={setToogleState} />

      <Slider {...sliderSettings}>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.title}
            className="project-card px-4"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Project
              image={project.image}
              text={project.text}
              title={project.title}
              github={project.github}
              demo={project.demo}
            />
          </motion.div>
        ))}
      </Slider>
    </Container>
  );
}

export default Portfolio;
