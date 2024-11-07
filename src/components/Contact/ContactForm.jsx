import { Form } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    e.target.reset();
  };

  return (
    <Form ref={form} onSubmit={() => sendEmail(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your e-mail"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formText">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={6}
          placeholder="Ask me anything"
        />
      </Form.Group>
      <button type="submit" className="button">
        Send Message&nbsp;&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-send"
          viewBox="0 0 16 17"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
        </svg>
      </button>
    </Form>
  );
}
export default ContactForm;
