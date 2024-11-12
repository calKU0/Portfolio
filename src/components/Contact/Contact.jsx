import { Container, Col, Row } from "react-bootstrap";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <Container id="contact__container" className="section">
      <div className="mb-3 pb-3 pt-5 mt-md-0 mb-md-5 pb-md-5">
        <h1>Contact</h1>
        <h5>Get in touch</h5>
      </div>
      <Row>
        <Col md={4}>
          <ContactCards />
        </Col>
        <Col className="px-md-5 mx-md-5 px-sm-0 mx-sm-0 text-start mt-3 mt-md-0">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;
