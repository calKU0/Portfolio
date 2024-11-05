import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./Skills.css";

function Skills() {
  const frontend = [
    ["HTML", "Intermediate"],
    ["Bootstrap", "Intermediate"],
    ["CSS", "Basic"],
    ["Git", "Intermediate"],
    ["JavaScript", "Basic"],
    ["React", "Basic"],
  ];

  const backend = [
    ["ASP.NET", "Intermediate"],
    ["MSSQL", "Advanced"],
    ["Node Js", "Basic"],
    ["T-SQL", "Advanced"],
    ["Java", "Intermediate"],
    ["C#", "Intermediate"],
  ];

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="var(--icon-color)"
      className="bi bi-patch-check-fill"
      viewBox="0 0 16 18"
    >
      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
    </svg>
  );

  const renderSkills = (skills) => {
    return skills.map(
      (skill, index) =>
        index % 2 === 0 && (
          <Row key={index} className="mb-2 text-start ">
            <Col>
              <div>
                <CheckIcon /> {skill[0]}
              </div>
              <small className="text-muted">{skill[1]}</small>
            </Col>
            <Col>
              {skills[index + 1] && (
                <>
                  <div>
                    <CheckIcon /> {skills[index + 1][0]}
                  </div>
                  <small className="text-muted">{skills[index + 1][1]}</small>
                </>
              )}
            </Col>
          </Row>
        )
    );
  };

  return (
    <Container id="skills">
      <div className="mb-5 pb-5">
        <h1>Skills</h1>
        <h5>My technical level</h5>
      </div>
      <CardGroup className="w-75">
        <Card className="skills__card">
          <Card.Body>
            <Card.Title className="pb-4">Frontend Development</Card.Title>
            {renderSkills(frontend)}
          </Card.Body>
        </Card>
        <Card className="skills__card">
          <Card.Body>
            <Card.Title className="pb-4">Backend Development</Card.Title>
            {renderSkills(backend)}
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default Skills;
