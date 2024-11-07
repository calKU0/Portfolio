import { Card } from "react-bootstrap";

function Project(props) {
  const { image, title, text, github, demo } = props;

  const renderLink = (url, icon) => {
    if (!url) return null;
    return (
      <Card.Link href={url}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="var(--font-color)"
          className={
            icon === "github" ? "bi bi-github" : "bi bi-box-arrow-up-right"
          }
          viewBox={icon === "github" ? "0 -3.5 256 256" : "0 0 16 16"}
        >
          {icon === "github" ? (
            <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
          ) : (
            <>
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
              />
            </>
          )}
        </svg>
      </Card.Link>
    );
  };

  return (
    <Card className="h-100 d-flex flex-column">
      <Card.Img variant="top" src={image} alt="Project Image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-start">{text}</Card.Text>
      </Card.Body>
      {(github || demo) && (
        <Card.Body className="d-flex justify-content-end align-items-end">
          {renderLink(github, "github")}
          {renderLink(demo, "demo")}
        </Card.Body>
      )}
    </Card>
  );
}

export default Project;
