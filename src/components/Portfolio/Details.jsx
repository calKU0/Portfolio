import { Modal, Row, Col, Container, Badge } from "react-bootstrap";

function Details({ show, handleClose, project }) {
  const technologies = project.technologies
    .split(",")
    .map((tech) => tech.trim());
  const frameworks = project.frameworks
    .split(",")
    .map((framework) => framework.trim());

  return (
    <Container>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className="details-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="align-items-center">
            {/* Project Image */}
            <Col md={6} className="text-center">
              <img
                src={project.image}
                alt="Project"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </Col>

            {/* Technologies & Frameworks */}
            <Col md={6}>
              <h5 className="mb-2 mt-2 mt-sm-0">Technologies</h5>
              <div className="d-flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} pill bg="purple" className="p-2">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h5 className="mt-3 mb-2">Frameworks</h5>
              <div className="d-flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <Badge key={index} pill bg="black" className="p-2">
                    {framework}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>

          {/* Project Description */}
          <p className="mt-4">{project.text}</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          {/* Links */}
          <div className="d-flex justify-content-start gap-3 details-link ">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark button-github px-1 px-sm-2"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 200 280"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <g fill="white">
                    <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />

                    <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                  </g>
                </svg>{" "}
                GitHub Repo
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn button-demo px-1 px-sm-2 d-flex align-items-center"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 18 16"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                  className="bi bi-box-arrow-up-right"
                >
                  <g fill="white">
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                    />
                  </g>
                </svg>{" "}
                Live Demo
              </a>
            )}
          </div>
          {/*<Button variant="secondary" onClick={handleClose}>
            Close
          </Button>*/}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Details;
